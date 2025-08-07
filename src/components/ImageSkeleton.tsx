
import React from 'react';

const ImageSkeleton: React.FC = () => {
  return (
    <div className="aspect-square bg-sircell-lightgray animate-pulse rounded-xl overflow-hidden">
      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
        <div className="w-12 h-12 bg-gray-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default ImageSkeleton;
