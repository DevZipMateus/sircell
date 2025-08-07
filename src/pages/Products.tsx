
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProgressiveImageLoader from '../components/ProgressiveImageLoader';
import GalleryModal from '../components/GalleryModal';
import { useImagePreloader } from '../hooks/useImagePreloader';

const Products = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  // Lista completa das imagens da galeria
  const galleryImages = [
    {
      src: '/lovable-uploads/galeria/balanca_digital_de_ate_500mg_.jpg',
      alt: 'Balança digital de até 500mg'
    },
    {
      src: '/lovable-uploads/galeria/cabo_de_carregamento_rapido_com_cordinha_mais_resistente_entrada_v8_micro_cabo_.jpg',
      alt: 'Cabo de carregamento rápido com cordinha mais resistente entrada V8 micro cabo'
    },
    {
      src: '/lovable-uploads/galeria/cabo_de_carregando_com_entrada_tipo_c_e_saida_usb.jpg',
      alt: 'Cabo de carregamento com entrada tipo C e saída USB'
    },
    {
      src: '/lovable-uploads/galeria/cabo_de_carremento_rapido_que_mede_a_velocidade_de_w_que_esta_passando_para_o_celular_.jpg',
      alt: 'Cabo de carregamento rápido que mede a velocidade de W'
    },
    {
      src: '/lovable-uploads/galeria/cabo_de_um_metro_com_entrada_e_saida_tipo_c_tipo_c.jpg',
      alt: 'Cabo de um metro com entrada e saída tipo C'
    },
    {
      src: '/lovable-uploads/galeria/cabo_de_um_metro_de_carregamento_rapido_entrada_e_saida_tipo_c_.jpg',
      alt: 'Cabo de um metro de carregamento rápido entrada e saída tipo C'
    },
    {
      src: '/lovable-uploads/galeria/cabo_turbo_de_uma_metro_entrada_v8_micro_cabo_.jpg',
      alt: 'Cabo turbo de um metro entrada V8 micro cabo'
    },
    {
      src: '/lovable-uploads/galeria/cabos_de_carregamento_rapido_.jpg',
      alt: 'Cabos de carregamento rápido'
    },
    {
      src: '/lovable-uploads/galeria/carregador_com_fonte_de_duas_entrada_para_iphone_.jpg',
      alt: 'Carregador com fonte de duas entradas para iPhone'
    },
    {
      src: '/lovable-uploads/galeria/carregador_de_carro_com_duas_entradas_para_conectar_.jpg',
      alt: 'Carregador de carro com duas entradas para conectar'
    },
    {
      src: '/lovable-uploads/galeria/carregador_de_carro_com_duas_entradas_usb_.jpg',
      alt: 'Carregador de carro com duas entradas USB'
    },
    {
      src: '/lovable-uploads/galeria/carregador_iphone_.jpg',
      alt: 'Carregador iPhone'
    },
    {
      src: '/lovable-uploads/galeria/carregador_tipo_c_com_entrada_usb_.jpg',
      alt: 'Carregador tipo C com entrada USB'
    },
    {
      src: '/lovable-uploads/galeria/decoracao_com_luminaria_.jpg',
      alt: 'Decoração com luminária'
    },
    {
      src: '/lovable-uploads/galeria/fonte_de_carregamento_rapido_com_duas_entradas_.jpg',
      alt: 'Fonte de carregamento rápido com duas entradas'
    },
    {
      src: '/lovable-uploads/galeria/fonte_de_carregamento_rapido_entrada_tipo_c_.jpg',
      alt: 'Fonte de carregamento rápido entrada tipo C'
    },
    {
      src: '/lovable-uploads/galeria/kit_teclado_mouse_sem_fio_.jpg',
      alt: 'Kit teclado mouse sem fio'
    },
    {
      src: '/lovable-uploads/galeria/lanterna_ultra_potente_.jpg',
      alt: 'Lanterna ultra potente'
    },
    {
      src: '/lovable-uploads/galeria/luminaria_decorativa_tres_em_um_tres_modelos_de_usar_e_quando_carregada_serve_de_power_banck_tbm_.jpg',
      alt: 'Luminária decorativa três em um - três modelos de usar e quando carregada serve de power bank também'
    },
    {
      src: '/lovable-uploads/galeria/microfone_com_entrada_lightning_.jpg',
      alt: 'Microfone com entrada Lightning'
    },
    {
      src: '/lovable-uploads/galeria/microfones_com_fio_com_entradas_p2_ou_entrada_tipo_c_adaptavel_para_cada_modelo_de_celular_.jpg',
      alt: 'Microfones com fio com entradas P2 ou entrada tipo C adaptável para cada modelo de celular'
    },
    {
      src: '/lovable-uploads/galeria/mini_lanterna_de_bolso_.jpg',
      alt: 'Mini lanterna de bolso'
    },
    {
      src: '/lovable-uploads/galeria/mini_teclado_sem_fio_para_tablet_.jpg',
      alt: 'Mini teclado sem fio para tablet'
    },
    {
      src: '/lovable-uploads/galeria/mix_eletrico_.jpg',
      alt: 'Mix elétrico'
    },
    {
      src: '/lovable-uploads/galeria/sue_pote_giratorio_360_para_tabela_.jpg',
      alt: 'Suporte giratorio 360 para tablet'
    },
    {
      src: '/lovable-uploads/galeria/teclado_sem_fio_.jpg',
      alt: 'Teclado sem fio'
    },
    {
      src: '/lovable-uploads/galeria/umidificador_de_ar_com_luz_de_lede_.jpg',
      alt: 'Umidificador de ar com luz de LED'
    },
    {
      src: '/lovable-uploads/galeria/umidificador_em_formato_de_astronauta_.jpg',
      alt: 'Umidificador em formato de astronauta'
    }
  ];

  // Preload das imagens críticas (primeiras da lista)
  useImagePreloader({
    images: galleryImages.map(img => img.src),
    priority: true
  });

  useEffect(() => {
    // Meta tags para SEO da página de produtos
    document.title = "Produtos - Sircell Assistência Técnica | Acessórios e Eletrônicos";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Confira nossa linha completa de produtos e acessórios para celulares, tablets e computadores. Cabos, carregadores, capas e muito mais na Sircell.');
    }
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-sircell-lightgray to-white">
      {/* Header da página */}
      <div className="bg-white shadow-sm border-b border-sircell-green/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-sircell-green hover:text-sircell-darkgreen transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Voltar</span>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-sircell-black">Nossos Produtos</h1>
              <p className="text-sircell-gray">Acessórios e eletrônicos de qualidade</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <section className="py-20 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-24 h-24 border-4 border-sircell-green/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-sircell-green/10 rounded-full"></div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-sircell-green text-white px-6 py-3 rounded-full text-sm font-bold mb-6 animate-fade-in">
              GALERIA DE PRODUTOS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-sircell-black mb-6 animate-slide-up">
              Nossa Linha
              <br />
              <span className="text-sircell-green">Completa</span>
            </h2>
            <p className="text-xl text-sircell-gray max-w-4xl mx-auto animate-fade-in">
              Confira nossa variedade de produtos e acessórios para seus dispositivos eletrônicos.
            </p>
          </div>

          {/* Carregamento progressivo de imagens */}
          <ProgressiveImageLoader
            images={galleryImages}
            onImageClick={openModal}
            initialLoadCount={12}
            loadMoreCount={8}
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

      {/* Modal para visualizar imagem */}
      <GalleryModal
        selectedImage={selectedImage}
        galleryImages={galleryImages}
        onClose={closeModal}
        onNavigate={navigateImage}
      />
    </div>
  );
};

export default Products;
