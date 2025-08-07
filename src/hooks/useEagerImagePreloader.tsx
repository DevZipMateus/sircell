
import { useEffect, useCallback } from 'react';

interface UseEagerImagePreloaderProps {
  images: string[];
  priority?: boolean;
  preloadCount?: number;
}

// Cache global para evitar recarregamentos
const preloadCache = new Set<string>();
const preloadPromises = new Map<string, Promise<void>>();

export const useEagerImagePreloader = ({ 
  images, 
  priority = false, 
  preloadCount = 8 
}: UseEagerImagePreloaderProps) => {
  
  const preloadImage = useCallback((src: string): Promise<void> => {
    if (preloadCache.has(src)) {
      return Promise.resolve();
    }
    
    if (preloadPromises.has(src)) {
      return preloadPromises.get(src)!;
    }

    const promise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        preloadCache.add(src);
        preloadPromises.delete(src);
        resolve();
      };
      
      img.onerror = () => {
        preloadPromises.delete(src);
        reject();
      };
      
      // Configurações para carregamento otimizado
      img.decoding = 'async';
      img.loading = 'eager';
      img.src = src;
    });
    
    preloadPromises.set(src, promise);
    return promise;
  }, []);

  useEffect(() => {
    if (!priority) return;

    // Preload imagens imediatamente
    const imagesToPreload = images.slice(0, preloadCount);
    
    // Carrega as primeiras 4 imagens imediatamente
    const immediateImages = imagesToPreload.slice(0, 4);
    immediateImages.forEach(src => preloadImage(src));
    
    // Carrega o resto após um pequeno delay
    const delayedImages = imagesToPreload.slice(4);
    if (delayedImages.length > 0) {
      const timer = setTimeout(() => {
        delayedImages.forEach(src => preloadImage(src));
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [images, priority, preloadCount, preloadImage]);

  return { preloadCache, isImagePreloaded: (src: string) => preloadCache.has(src) };
};
