
import { useEffect } from 'react';

interface UseImagePreloaderProps {
  images: string[];
  priority?: boolean;
}

// Cache global para evitar recarregamentos
const preloadCache = new Set<string>();

export const useImagePreloader = ({ images, priority = false }: UseImagePreloaderProps) => {
  useEffect(() => {
    if (!priority) return;

    // Preload apenas as 2 primeiras imagens para performance
    const preloadImages = images.slice(0, 2).filter(src => !preloadCache.has(src));
    
    if (preloadImages.length === 0) return;

    const imageElements = preloadImages.map(src => {
      preloadCache.add(src);
      const img = new Image();
      img.src = src;
      return img;
    });

    return () => {
      imageElements.forEach(img => {
        img.src = '';
      });
    };
  }, [images, priority]);
};
