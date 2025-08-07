
import React, { useState, memo, useCallback } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

const LazyImage: React.FC<LazyImageProps> = memo(({ 
  src, 
  alt, 
  className = "", 
  aspectRatio = "aspect-square" 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div className={`${aspectRatio} overflow-hidden relative ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-sircell-lightgray animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-sircell-green border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {!hasError && (
        <img 
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
        />
      )}
      
      {hasError && (
        <div className="absolute inset-0 bg-sircell-lightgray flex items-center justify-center">
          <span className="text-sircell-gray text-sm">Erro ao carregar imagem</span>
        </div>
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;
