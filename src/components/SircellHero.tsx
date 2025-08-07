
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowDown, Shield, Clock, Award, Star, Smartphone } from 'lucide-react';

const SircellHero = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        elementsRef.current.forEach((el) => {
          if (el) observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 overflow-hidden bg-gradient-to-br from-sircell-lightgray via-white to-sircell-lightgreen"
    >
      {/* Padrão decorativo de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-sircell-green rotate-45"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-sircell-green rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-sircell-black rotate-12"></div>
        <div className="absolute bottom-32 right-16 w-8 h-8 bg-sircell-black rounded-full"></div>
        <Smartphone className="absolute top-1/4 left-1/4 w-32 h-32 text-sircell-green opacity-10 animate-float" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Logo da empresa */}
          <div 
            ref={el => elementsRef.current[0] = el}
            className="mb-8 opacity-0"
          >
            <img 
              src="/lovable-uploads/b5b6b1a3-79c2-49f0-83c4-fca215c4a8d7.png" 
              alt="Sircell assistência de eletrônicos" 
              className="mx-auto h-24 sm:h-32 lg:h-40 w-auto"
            />
          </div>
          
          {/* Título principal */}
          <h1 
            ref={el => elementsRef.current[1] = el}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 opacity-0 leading-tight tracking-tight text-sircell-black"
            style={{ animationDelay: '200ms' }}
          >
            ASSISTÊNCIA TÉCNICA
            <br />
            <span className="text-sircell-green">
              DE EXCELÊNCIA
            </span>
          </h1>
          
          {/* Slogan */}
          <div 
            ref={el => elementsRef.current[2] = el}
            className="bg-sircell-green text-white px-6 py-3 rounded-full text-lg sm:text-xl lg:text-2xl font-semibold mb-6 inline-block opacity-0"
            style={{ animationDelay: '400ms' }}
          >
            "Teu celular pronto antes de você sentir falta dele!"
          </div>
          
          {/* Subtítulo */}
          <p 
            ref={el => elementsRef.current[3] = el}
            className="text-sircell-black text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 opacity-0 leading-relaxed px-2 sm:px-4"
            style={{ animationDelay: '600ms' }}
          >
            Especialistas em <span className="text-sircell-green font-semibold">celulares, tablets e computadores</span>
            <br />
            Laboratório próprio • Qualidade garantida • Atendimento ágil
          </p>

          {/* Diferenciais principais */}
          <div 
            ref={el => elementsRef.current[4] = el}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 opacity-0"
            style={{ animationDelay: '800ms' }}
          >
            <div className="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg border border-sircell-lightgreen">
              <Shield className="h-5 w-5 text-sircell-green" />
              <span className="text-sircell-black font-medium">Laboratório Próprio</span>
            </div>
            <div className="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg border border-sircell-lightgreen">
              <Clock className="h-5 w-5 text-sircell-green" />
              <span className="text-sircell-black font-medium">Reparo Rápido</span>
            </div>
            <div className="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg border border-sircell-lightgreen">
              <Award className="h-5 w-5 text-sircell-green" />
              <span className="text-sircell-black font-medium">Qualidade Garantida</span>
            </div>
          </div>
          
          {/* Call to Actions */}
          <div 
            ref={el => elementsRef.current[5] = el}
            className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6 opacity-0 px-4 sm:px-0"
            style={{ animationDelay: '1000ms' }}
          >
            <a 
              href="https://wa.me/5554981014238?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20reparo%20do%20meu%20equipamento." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sircell-green hover:bg-sircell-darkgreen text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              ORÇAMENTO GRATUITO VIA WHATSAPP
            </a>
            <button 
              onClick={scrollToServices}
              className="bg-white hover:bg-sircell-lightgray text-sircell-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-sircell-green"
            >
              CONHEÇA NOSSOS SERVIÇOS
            </button>
          </div>

          {/* Informações de contato */}
          <div 
            ref={el => elementsRef.current[6] = el}
            className="mt-16 opacity-0"
            style={{ animationDelay: '1200ms' }}
          >
            <p className="text-sircell-gray text-lg mb-4">
              Empresa nova no mercado com foco em seriedade, qualidade e agilidade
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sircell-black">
              <span className="flex items-center justify-center">
                📍 Marechal Floriano 1001
              </span>
              <span className="flex items-center justify-center">
                📱 (54) 98101-4238
              </span>
              <span className="flex items-center justify-center">
                ✉️ sircell27@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sircell-green hover:text-sircell-darkgreen transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default SircellHero;
