
import React from 'react';
import ProductCard from './ProductCard';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface GalleryGridProps {
  images: Array<{ src: string; alt: string }>;
  onImageClick: (image: { src: string; alt: string }) => void;
  maxImages?: number;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ 
  images, 
  onImageClick, 
  maxImages 
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '200px'
  });

  const displayImages = maxImages ? images.slice(0, maxImages) : images;

  return (
    <div 
      ref={targetRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 opacity-0 animate-slide-up"
    >
      {isIntersecting && displayImages.map((image, index) => (
        <ProductCard
          key={index}
          product={image}
          onClick={() => onImageClick(image)}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
