
import React, { useState, memo, useCallback } from 'react';
import ImageSkeleton from './ImageSkeleton';

interface EagerImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  isPreloaded?: boolean;
}

const EagerImage: React.FC<EagerImageProps> = memo(({ 
  src, 
  alt, 
  className = "", 
  aspectRatio = "aspect-square",
  priority = false,
  isPreloaded = false
}) => {
  const [isLoaded, setIsLoaded] = useState(isPreloaded);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(!isPreloaded);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
  }, []);

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
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-200 ${
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

EagerImage.displayName = 'EagerImage';

export default EagerImage;
