
import React, { memo } from 'react';
import LazyImage from './LazyImage';

interface ProductCardProps {
  product: {
    src: string;
    alt: string;
  };
  onClick?: () => void;
  priority?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ 
  product, 
  onClick, 
  priority = false 
}) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer transform-gpu"
      onClick={onClick}
    >
      <LazyImage 
        src={product.src}
        alt={product.alt}
        className="group-hover:scale-105 transition-transform duration-200 will-change-transform"
        priority={priority}
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

ProductCard.displayName = 'ProductCard';

export default ProductCard;
