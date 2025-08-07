
import React from 'react';

const ImageSkeleton: React.FC = () => {
  return (
    <div className="aspect-square bg-gray-100 animate-pulse rounded-lg overflow-hidden">
      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
        <div className="w-8 h-8 bg-gray-400 rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default ImageSkeleton;
