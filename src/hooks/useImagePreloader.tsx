
import { useEffect } from 'react';

interface UseImagePreloaderProps {
  images: string[];
  priority?: boolean;
}

export const useImagePreloader = ({ images, priority = false }: UseImagePreloaderProps) => {
  useEffect(() => {
    if (!priority) return;

    const preloadImages = images.slice(0, 4); // Preload apenas as primeiras 4 imagens

    const imageElements = preloadImages.map(src => {
      const img = new Image();
      img.src = src;
      return img;
    });

    // Cleanup function
    return () => {
      imageElements.forEach(img => {
        img.src = '';
      });
    };
  }, [images, priority]);
};
