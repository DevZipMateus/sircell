
import React, { useState, memo, useCallback } from 'react';
import ImageSkeleton from './ImageSkeleton';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = memo(({ 
  src, 
  alt, 
  className = "", 
  aspectRatio = "aspect-square",
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
  }, []);

  const handleLoadStart = useCallback(() => {
    setIsLoading(true);
  }, []);

  if (hasError) {
    return (
      <div className={`${aspectRatio} overflow-hidden relative ${className}`}>
        <div className="absolute inset-0 bg-sircell-lightgray flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
            <span className="text-sircell-gray text-sm">Erro ao carregar</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${aspectRatio} overflow-hidden relative ${className}`}>
      {isLoading && <ImageSkeleton />}
      
      <img 
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? "eager" : "lazy"}
        onLoadStart={handleLoadStart}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
        style={{
          position: isLoaded ? 'relative' : 'absolute',
          top: isLoaded ? 'auto' : 0,
          left: isLoaded ? 'auto' : 0,
        }}
      />
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;
