
import React, { useState, useMemo } from 'react';
import GalleryGrid from './GalleryGrid';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

interface ProgressiveImageLoaderProps {
  images: Array<{ src: string; alt: string }>;
  onImageClick: (image: { src: string; alt: string }) => void;
  initialLoadCount?: number;
  loadMoreCount?: number;
}

const ProgressiveImageLoader: React.FC<ProgressiveImageLoaderProps> = ({
  images,
  onImageClick,
  initialLoadCount = 6, // Reduzido drasticamente
  loadMoreCount = 6
}) => {
  const [loadedCount, setLoadedCount] = useState(initialLoadCount);
  const [isLoading, setIsLoading] = useState(false);

  const displayImages = useMemo(() => 
    images.slice(0, loadedCount), 
    [images, loadedCount]
  );

  const hasMore = loadedCount < images.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    // Loading mais rápido
    setTimeout(() => {
      setLoadedCount(prev => Math.min(prev + loadMoreCount, images.length));
      setIsLoading(false);
    }, 100);
  };

  return (
    <>
      <GalleryGrid
        images={displayImages}
        onImageClick={onImageClick}
      />
      
      {hasMore && (
        <div className="text-center mt-8">
          <Button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="bg-sircell-green hover:bg-sircell-darkgreen text-white px-6 py-3 rounded-lg font-medium text-base transition-colors duration-200"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Carregando...
              </>
            ) : (
              `Carregar Mais (${images.length - loadedCount})`
            )}
          </Button>
        </div>
      )}
    </>
  );
};

export default ProgressiveImageLoader;
