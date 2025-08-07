
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
  initialLoadCount = 12,
  loadMoreCount = 8
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
    // Simular delay para melhor UX
    setTimeout(() => {
      setLoadedCount(prev => Math.min(prev + loadMoreCount, images.length));
      setIsLoading(false);
    }, 300);
  };

  return (
    <>
      <GalleryGrid
        images={displayImages}
        onImageClick={onImageClick}
      />
      
      {hasMore && (
        <div className="text-center mt-12">
          <Button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="bg-sircell-green hover:bg-sircell-darkgreen text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Carregando...
              </>
            ) : (
              `Carregar Mais (${images.length - loadedCount} restantes)`
            )}
          </Button>
        </div>
      )}
    </>
  );
};

export default ProgressiveImageLoader;
