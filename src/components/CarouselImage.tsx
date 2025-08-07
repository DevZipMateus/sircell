
import React, { useState, memo, useCallback, useEffect } from 'react';
import { getOptimizedImageUrl, carouselImageCache } from '@/utils/imageUtils';
import ImageSkeleton from './ImageSkeleton';

interface CarouselImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
}

const CarouselImage: React.FC<CarouselImageProps> = memo(({ 
  src, 
  alt, 
  className = "",
  priority = false,
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get optimized image URL for carousel display
  const optimizedSrc = getOptimizedImageUrl(src, {
    width: 400,
    height: 400,
    quality: 85,
    format: 'webp'
  });

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
  }, []);

  // Check cache first
  useEffect(() => {
    if (carouselImageCache.has(optimizedSrc)) {
      setIsLoaded(true);
      setIsLoading(false);
      onLoad?.();
    }
  }, [optimizedSrc, onLoad]);

  if (hasError) {
    return (
      <div className={`aspect-square overflow-hidden relative ${className}`}>
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
    <div className={`aspect-square overflow-hidden relative ${className}`}>
      {isLoading && <ImageSkeleton />}
      
      <img 
        src={optimizedSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
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
          transform: 'translateZ(0)',
        }}
      />
    </div>
  );
});

CarouselImage.displayName = 'CarouselImage';

export default CarouselImage;
