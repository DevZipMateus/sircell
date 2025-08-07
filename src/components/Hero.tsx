
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowDown, Shield, Clock, Award, Star } from 'lucide-react';

const Hero = () => {
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
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/69a48e2b-d0fd-4b71-a842-abe00864f7fd.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay esmaecido para melhor contraste */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Badge de credibilidade */}
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 opacity-0 shadow-lg"
          >
            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
            <span className="text-black font-medium text-xs sm:text-sm lg:text-base">+15 Anos de Excelência em Assistência Técnica</span>
          </div>
          
          {/* Título principal */}
          <h1 
            ref={el => elementsRef.current[1] = el}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light mb-4 sm:mb-6 opacity-0 leading-tight tracking-tight"
            style={{ 
              animationDelay: '200ms',
              color: '#ffffff',
              textShadow: '0 4px 30px rgba(0,0,0,0.9)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
            }}
          >
            ASSISTÊNCIA TÉCNICA
            <br />
            <span 
              className="font-medium"
              style={{
                color: '#dc2626',
                textShadow: '0 4px 40px rgba(220, 38, 38, 0.8)'
              }}
            >
              PROFISSIONAL
            </span>
          </h1>
          
          {/* Subtítulo */}
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto mb-6 sm:mb-8 font-light opacity-0 leading-relaxed tracking-wide px-2 sm:px-4"
            style={{ 
              animationDelay: '400ms',
              textShadow: '0 2px 15px rgba(0,0,0,0.8)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
            }}
          >
            Especialistas em <span className="text-red-400 font-medium">TVs, Celulares, Computadores e Eletrodomésticos</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> Diagnóstico gratuito • Garantia assegurada • Atendimento rápido</span>
          </p>

          {/* Estatísticas de credibilidade */}
          <div 
            ref={el => elementsRef.current[3] = el}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 opacity-0"
            style={{ animationDelay: '600ms' }}
          >
            <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border border-white/20">
              <div className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-1">+5.000</div>
              <div className="text-xs sm:text-sm text-white/90 font-light tracking-wide">Equipamentos Reparados</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-white/90 font-light tracking-wide">Avaliação 5 Estrelas</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border border-white/20">
              <div className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-1">98%</div>
              <div className="text-xs sm:text-sm text-white/90 font-light tracking-wide">Taxa de Sucesso</div>
            </div>
          </div>

          {/* Diferenciais principais */}
          <div 
            ref={el => elementsRef.current[4] = el}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 opacity-0"
            style={{ animationDelay: '800ms' }}
          >
            <div className="flex items-center space-x-3 bg-black/50 backdrop-blur-md rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border border-white/20">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-red-400" />
              <span className="text-white font-light tracking-wide text-sm sm:text-base">Garantia de 90 Dias</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/50 backdrop-blur-md rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border border-white/20">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-red-400" />
              <span className="text-white font-light tracking-wide text-sm sm:text-base">Diagnóstico em 24h</span>
            </div>
          </div>
          
          {/* Call to Actions */}
          <div 
            ref={el => elementsRef.current[5] = el}
            className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6 opacity-0 px-4 sm:px-0"
            style={{ animationDelay: '1000ms' }}
          >
            <a 
              href="https://wa.me/5555999887766?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20reparo%20do%20meu%20equipamento." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-5 rounded-xl font-medium text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border border-red-500 hover:border-red-400 tracking-wide"
            >
              ORÇAMENTO GRATUITO AGORA
            </a>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-5 rounded-xl font-medium text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/30 tracking-wide"
            >
              CONHEÇA NOSSOS SERVIÇOS
            </button>
          </div>

          {/* Confiança adicional */}
          <div 
            ref={el => elementsRef.current[6] = el}
            className="mt-12 sm:mt-16 lg:mt-20 opacity-0"
            style={{ animationDelay: '1200ms' }}
          >
            <p className="text-white/90 text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 font-light tracking-wide">
              Mais de 15 anos cuidando dos seus equipamentos eletrônicos
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 lg:space-x-12 text-white/80 text-xs sm:text-sm font-light tracking-wide">
              <span>• Técnicos Certificados</span>
              <span>• Peças Originais</span>
              <span>• Atendimento 6 dias/semana</span>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToServices}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300 animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="sm:w-8 sm:h-8" />
      </button>
    </section>
  );
};

export default Hero;
