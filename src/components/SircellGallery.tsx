
import React, { useState } from 'react';
import GalleryGrid from './GalleryGrid';
import GalleryModal from './GalleryModal';

const SircellGallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  // Lista reduzida das imagens mais importantes para carregar primeiro
  const galleryImages = [
    {
      src: '/lovable-uploads/galeria/cabos_de_carregamento_rapido_.jpg',
      alt: 'Cabos de carregamento rápido'
    },
    {
      src: '/lovable-uploads/galeria/carregador_iphone_.jpg',
      alt: 'Carregador iPhone'
    },
    {
      src: '/lovable-uploads/galeria/luminaria_decorativa_tres_em_um_tres_modelos_de_usar_e_quando_carregada_serve_de_power_banck_tbm_.jpg',
      alt: 'Luminária decorativa três em um'
    },
    {
      src: '/lovable-uploads/galeria/kit_teclado_mouse_sem_fio_.jpg',
      alt: 'Kit teclado mouse sem fio'
    },
    {
      src: '/lovable-uploads/galeria/carregador_de_carro_com_duas_entradas_usb_.jpg',
      alt: 'Carregador de carro com duas entradas USB'
    },
    {
      src: '/lovable-uploads/galeria/fonte_de_carregamento_rapido_com_duas_entradas_.jpg',
      alt: 'Fonte de carregamento rápido com duas entradas'
    },
    {
      src: '/lovable-uploads/galeria/lanterna_ultra_potente_.jpg',
      alt: 'Lanterna ultra potente'
    },
    {
      src: '/lovable-uploads/galeria/microfone_com_entrada_lightning_.jpg',
      alt: 'Microfone com entrada Lightning'
    },
    {
      src: '/lovable-uploads/galeria/balanca_digital_de_ate_500mg_.jpg',
      alt: 'Balança digital de até 500mg'
    },
    {
      src: '/lovable-uploads/galeria/teclado_sem_fio_.jpg',
      alt: 'Teclado sem fio'
    },
    {
      src: '/lovable-uploads/galeria/mini_lanterna_de_bolso_.jpg',
      alt: 'Mini lanterna de bolso'
    },
    {
      src: '/lovable-uploads/galeria/umidificador_de_ar_com_luz_de_lede_.jpg',
      alt: 'Umidificador de ar com luz de LED'
    }
  ];

  const openModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = galleryImages.findIndex(img => img.src === selectedImage.src);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <>
      <section id="galeria" className="py-20 bg-gradient-to-br from-sircell-lightgray to-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-24 h-24 border-4 border-sircell-green/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-sircell-green/10 rounded-full"></div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-sircell-green text-white px-6 py-3 rounded-full text-sm font-bold mb-6 animate-fade-in">
              GALERIA DE PRODUTOS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-sircell-black mb-6 animate-slide-up">
              Nossos
              <br />
              <span className="text-sircell-green">Produtos</span>
            </h2>
            <p className="text-xl text-sircell-gray max-w-4xl mx-auto animate-fade-in">
              Confira nossa variedade de produtos e acessórios para seus dispositivos eletrônicos.
            </p>
          </div>

          <GalleryGrid
            images={galleryImages}
            onImageClick={openModal}
          />

          <div className="text-center mt-16 animate-fade-in">
            <a 
              href="https://wa.me/5554981014238?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20disponíveis." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sircell-green hover:bg-sircell-darkgreen text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center space-x-2"
            >
              <span>CONSULTE DISPONIBILIDADE</span>
              <span>📱</span>
            </a>
          </div>
        </div>
      </section>

      <GalleryModal
        selectedImage={selectedImage}
        galleryImages={galleryImages}
        onClose={closeModal}
        onNavigate={navigateImage}
      />
    </>
  );
};

export default SircellGallery;
