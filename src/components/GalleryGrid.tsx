
import React, { memo } from 'react';
import ProductCard from './ProductCard';
import ImageSkeleton from './ImageSkeleton';
import { useGlobalIntersectionObserver } from '@/hooks/useGlobalIntersectionObserver';

interface GalleryGridProps {
  images: Array<{ src: string; alt: string }>;
  onImageClick: (image: { src: string; alt: string }) => void;
  maxImages?: number;
  showSkeletons?: boolean;
  preloadCache?: Set<string>;
  isImagePreloaded?: (src: string) => boolean;
}

const GalleryGrid: React.FC<GalleryGridProps> = memo(({ 
  images, 
  onImageClick, 
  maxImages,
  showSkeletons = false,
  preloadCache,
  isImagePreloaded
}) => {
  const { targetRef, isIntersecting } = useGlobalIntersectionObserver<HTMLDivElement>({
    threshold: 0.01,
    rootMargin: '200px'
  });

  const displayImages = maxImages ? images.slice(0, maxImages) : images;

  return (
    <div 
      ref={targetRef}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4"
    >
      {showSkeletons && !isIntersecting ? (
        Array.from({ length: 6 }).map((_, index) => (
          <ImageSkeleton key={`skeleton-${index}`} />
        ))
      ) : (
        displayImages.map((image, index) => (
          <ProductCard
            key={`${image.src}-${index}`}
            product={image}
            onClick={() => onImageClick(image)}
            priority={index < 4}
            isPreloaded={isImagePreloaded ? isImagePreloaded(image.src) : false}
          />
        ))
      )}
    </div>
  );
});

GalleryGrid.displayName = 'GalleryGrid';

export default GalleryGrid;
