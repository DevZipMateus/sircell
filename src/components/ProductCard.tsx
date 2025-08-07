
import React from 'react';
import LazyImage from './LazyImage';

interface ProductCardProps {
  product: {
    src: string;
    alt: string;
  };
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <LazyImage 
        src={product.src}
        alt={product.alt}
        className="group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white text-sm font-medium line-clamp-2">
            {product.alt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
