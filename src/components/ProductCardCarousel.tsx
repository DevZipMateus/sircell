
import React, { memo } from 'react';
import CarouselImage from './CarouselImage';

interface ProductCardCarouselProps {
  product: {
    src: string;
    alt: string;
  };
  onClick?: () => void;
  priority?: boolean;
  onImageLoad?: () => void;
}

const ProductCardCarousel: React.FC<ProductCardCarouselProps> = memo(({ 
  product, 
  onClick, 
  priority = false,
  onImageLoad
}) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer transform-gpu"
      onClick={onClick}
    >
      <CarouselImage 
        src={product.src}
        alt={product.alt}
        className="group-hover:scale-105 transition-transform duration-200 will-change-transform"
        priority={priority}
        onLoad={onImageLoad}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="absolute bottom-2 left-2 right-2">
          <p className="text-white text-xs font-medium line-clamp-2">
            {product.alt}
          </p>
        </div>
      </div>
    </div>
  );
});

ProductCardCarousel.displayName = 'ProductCardCarousel';

export default ProductCardCarousel;
