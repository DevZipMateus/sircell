
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductsPreview = () => {
  const featuredProducts = [
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
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sircell-lightgray to-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-sircell-green/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-sircell-green/10 rounded-full"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-sircell-green text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            NOSSOS PRODUTOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-sircell-black mb-6">
            Acessórios e
            <br />
            <span className="text-sircell-green">Eletrônicos</span>
          </h2>
          <p className="text-xl text-sircell-gray max-w-3xl mx-auto mb-8">
            Confira alguns dos nossos principais produtos e acessórios para seus dispositivos eletrônicos.
          </p>
        </div>

        {/* Carrossel dos produtos */}
        <div className="mb-12 px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProducts.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.src}
                        alt={product.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-medium line-clamp-2">
                          {product.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/90 hover:bg-white border-sircell-green/20 text-sircell-green hover:text-sircell-darkgreen" />
            <CarouselNext className="bg-white/90 hover:bg-white border-sircell-green/20 text-sircell-green hover:text-sircell-darkgreen" />
          </Carousel>
        </div>

        {/* CTA para ver todos os produtos */}
        <div className="text-center">
          <Link 
            to="/produtos"
            className="bg-sircell-green hover:bg-sircell-darkgreen text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center space-x-3"
          >
            <Package size={24} />
            <span>VER TODOS OS PRODUTOS</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
