
import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryModalProps {
  selectedImage: { src: string; alt: string } | null;
  galleryImages: Array<{ src: string; alt: string }>;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  selectedImage,
  galleryImages,
  onClose,
  onNavigate,
}) => {
  if (!selectedImage) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onNavigate('prev');
    if (e.key === 'ArrowRight') onNavigate('next');
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-sircell-green transition-colors z-10 bg-black/50 rounded-full p-2"
        >
          <X size={24} />
        </button>
        
        <button
          onClick={() => onNavigate('prev')}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-sircell-green transition-colors z-10 bg-black/50 rounded-full p-2"
        >
          <ChevronLeft size={32} />
        </button>
        
        <button
          onClick={() => onNavigate('next')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-sircell-green transition-colors z-10 bg-black/50 rounded-full p-2"
        >
          <ChevronRight size={32} />
        </button>

        <img 
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="max-w-full max-h-full object-contain rounded-lg"
          loading="lazy"
        />
        
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <p className="text-white bg-black/70 px-4 py-2 rounded-lg">
            {selectedImage.alt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
