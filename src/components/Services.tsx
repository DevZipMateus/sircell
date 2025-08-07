
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Smartphone, Monitor, Laptop, Zap, Wrench, CheckCircle } from 'lucide-react';

const Services = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              elementsRef.current.forEach((el, index) => {
                if (el) {
                  setTimeout(() => {
                    el.classList.add('animate-slide-up');
                  }, index * 150);
                }
              });
            }
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Monitor className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "Reparo de TVs",
      subtitle: "Todas as marcas e modelos",
      description: "Especialistas em TVs LED, OLED, LCD e Smart TV. Consertamos problemas de imagem, som, tela quebrada, placa-mãe e muito mais.",
      features: ["Diagnóstico gratuito", "Garantia de 90 dias", "Atendimento em 24h", "Peças originais"],
      popular: false
    },
    {
      icon: <Smartphone className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "Conserto de Celulares",
      subtitle: "iPhone e Android",
      description: "Troca de tela, bateria, conector de carga, câmera, alto-falante. Especialistas em todas as marcas.",
      features: ["Reparo em 2h", "Peças AAA+", "Garantia de 60 dias", "Teste completo"],
      popular: true
    },
    {
      icon: <Laptop className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "Manutenção de Computadores",
      subtitle: "Notebooks e Desktops",
      description: "Limpeza completa, formatação, upgrade de hardware, reparo de placas, troca de HD/SSD e memória RAM.",
      features: ["Backup incluído", "Formatação completa", "Antivírus premium", "Suporte técnico"],
      popular: false
    },
    {
      icon: <Zap className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "Eletrodomésticos",
      subtitle: "Atendimento domiciliar",
      description: "Reparo de máquinas de lavar, micro-ondas, geladeiras, fogões, ar-condicionado e outros eletrodomésticos.",
      features: ["Visita gratuita", "Orçamento sem compromisso", "Peças de qualidade", "Garantia estendida"],
      popular: false
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-red-100 text-red-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 opacity-0"
          >
            NOSSOS SERVIÇOS
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black mb-4 sm:mb-6 opacity-0 leading-tight"
          >
            Soluções Completas para
            <br />
            <span className="text-red-600">Todos os Seus Equipamentos</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto opacity-0 px-4 sm:px-0"
          >
            Mais de 15 anos de experiência cuidando dos equipamentos eletrônicos 
            de milhares de clientes satisfeitos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[3 + index] = el}
              className={cn(
                "relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 border-2",
                service.popular 
                  ? "border-red-600 ring-2 sm:ring-4 ring-red-100" 
                  : "border-gray-100 hover:border-red-200"
              )}
            >
              {service.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                  MAIS PROCURADO
                </div>
              )}

              <div className={cn(
                "w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto",
                service.popular 
                  ? "bg-red-600 text-white" 
                  : "bg-gray-100 text-gray-700"
              )}>
                {service.icon}
              </div>
              
              <h3 className="text-black font-bold text-lg sm:text-xl mb-1 sm:mb-2 text-center">
                {service.title}
              </h3>
              
              <p className="text-red-600 font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-center">
                {service.subtitle}
              </p>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-center text-sm sm:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={cn(
                  "w-full py-2.5 sm:py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base",
                  service.popular
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-black hover:bg-gray-800 text-white"
                )}
                onClick={() => {
                  window.open('https://wa.me/5555999887766?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20' + service.title, '_blank');
                }}
              >
                SOLICITAR ORÇAMENTO
              </button>
            </div>
          ))}
        </div>

        {/* Seção de garantia */}
        <div 
          ref={el => elementsRef.current[7] = el}
          className="bg-black rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center opacity-0"
        >
          <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Garantia e Qualidade Assegurada
          </h3>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-4xl mx-auto">
            Todos os nossos serviços incluem garantia e utilizamos apenas peças de alta qualidade. 
            Sua satisfação é nossa prioridade.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-1 sm:mb-2">90 dias</div>
              <div className="text-white font-semibold text-sm sm:text-base">Garantia em reparos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-1 sm:mb-2">24h</div>
              <div className="text-white font-semibold text-sm sm:text-base">Diagnóstico rápido</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-1 sm:mb-2">100%</div>
              <div className="text-white font-semibold text-sm sm:text-base">Peças originais</div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <button 
              onClick={() => {
                window.open('https://wa.me/5555999887766?text=Olá!%20Gostaria%20de%20um%20orçamento%20personalizado%20para%20meus%20equipamentos.', '_blank');
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105"
            >
              SOLICITAR ORÇAMENTO PERSONALIZADO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
