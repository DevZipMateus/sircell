
import React, { useState, memo, useCallback, useRef, useEffect } from 'react';
import ImageSkeleton from './ImageSkeleton';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

// Cache simples de imagens carregadas
const imageCache = new Set<string>();

const LazyImage: React.FC<LazyImageProps> = memo(({ 
  src, 
  alt, 
  className = "", 
  aspectRatio = "aspect-square",
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(() => imageCache.has(src));
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(() => !imageCache.has(src));
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = useCallback(() => {
    imageCache.add(src);
    setIsLoaded(true);
    setIsLoading(false);
  }, [src]);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
  }, []);

  // Preload crítico para imagens priority
  useEffect(() => {
    if (priority && !imageCache.has(src)) {
      const img = new Image();
      img.onload = handleLoad;
      img.onerror = handleError;
      img.src = src;
    }
  }, [src, priority, handleLoad, handleError]);

  if (hasError) {
    return (
      <div className={`${aspectRatio} overflow-hidden relative ${className}`}>
        <div className="absolute inset-0 bg-sircell-lightgray flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-1"></div>
            <span className="text-sircell-gray text-xs">Erro</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${aspectRatio} overflow-hidden relative ${className}`}>
      {isLoading && <ImageSkeleton />}
      
      <img 
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
        style={{
          position: isLoaded ? 'relative' : 'absolute',
          top: isLoaded ? 'auto' : 0,
          left: isLoaded ? 'auto' : 0,
          imageRendering: 'auto',
          transform: 'translateZ(0)', // GPU acceleration
        }}
      />
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;
