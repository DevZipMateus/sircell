
export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
}

export const getOptimizedImageUrl = (
  originalSrc: string, 
  options: ImageOptimizationOptions = {}
): string => {
  const { width = 400, height = 400, quality = 80, format = 'webp' } = options;
  
  // For local images, we'll add query parameters that can be used by a future image optimization service
  // For now, we'll return the original URL but with optimization hints in the URL
  const url = new URL(originalSrc, window.location.origin);
  url.searchParams.set('w', width.toString());
  url.searchParams.set('h', height.toString());
  url.searchParams.set('q', quality.toString());
  url.searchParams.set('f', format);
  
  return url.toString();
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

export const createImageCache = () => {
  const cache = new Map<string, HTMLImageElement>();
  
  return {
    get: (src: string) => cache.get(src),
    set: (src: string, img: HTMLImageElement) => cache.set(src, img),
    has: (src: string) => cache.has(src),
    clear: () => cache.clear(),
    size: () => cache.size
  };
};

// Global cache for carousel images
export const carouselImageCache = createImageCache();
