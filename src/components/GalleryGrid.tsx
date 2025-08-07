
import React, { memo } from 'react';
import ProductCard from './ProductCard';
import ImageSkeleton from './ImageSkeleton';
import { useGlobalIntersectionObserver } from '@/hooks/useGlobalIntersectionObserver';

interface GalleryGridProps {
  images: Array<{ src: string; alt: string }>;
  onImageClick: (image: { src: string; alt: string }) => void;
  maxImages?: number;
  showSkeletons?: boolean;
}

const GalleryGrid: React.FC<GalleryGridProps> = memo(({ 
  images, 
  onImageClick, 
  maxImages,
  showSkeletons = false
}) => {
  const { targetRef, isIntersecting } = useGlobalIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '200px'
  });

  const displayImages = maxImages ? images.slice(0, maxImages) : images;

  return (
    <div 
      ref={targetRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 opacity-0 animate-slide-up"
    >
      {showSkeletons && !isIntersecting ? (
        // Mostrar skeletons enquanto não intersecta
        Array.from({ length: 12 }).map((_, index) => (
          <ImageSkeleton key={`skeleton-${index}`} />
        ))
      ) : (
        isIntersecting && displayImages.map((image, index) => (
          <ProductCard
            key={`${image.src}-${index}`}
            product={image}
            onClick={() => onImageClick(image)}
            priority={index < 4} // Prioridade para as primeiras 4 imagens
          />
        ))
      )}
    </div>
  );
});

GalleryGrid.displayName = 'GalleryGrid';

export default GalleryGrid;
