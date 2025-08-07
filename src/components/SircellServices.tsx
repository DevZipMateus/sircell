import React, { useEffect, useRef } from 'react';
import { Smartphone, Tablet, Monitor, Headphones, Cable, Battery, Shield } from 'lucide-react';

const SircellServices = () => {
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
                  }, index * 100);
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
      icon: <Smartphone className="h-12 w-12" />,
      title: "Celulares",
      description: "Reparo completo de smartphones de todas as marcas. Tela, bateria, placa, carregamento e muito mais.",
      features: ["Troca de tela", "Reparo de placa", "Troca de bateria", "Reparo carregamento"]
    },
    {
      icon: <Tablet className="h-12 w-12" />,
      title: "Tablets",
      description: "Assistência técnica especializada em tablets. Diagnóstico preciso e reparo rápido.",
      features: ["Tela touch", "Sistema operacional", "Hardware", "Conectividade"]
    },
    {
      icon: <Monitor className="h-12 w-12" />,
      title: "Computadores",
      description: "Manutenção completa em desktops e notebooks. Hardware e software com garantia.",
      features: ["Limpeza interna", "Troca de peças", "Instalação sistema", "Otimização"]
    },
    {
      icon: <Headphones className="h-12 w-12" />,
      title: "Acessórios Premium",
      description: "Linha completa de acessórios de qualidade para seus dispositivos.",
      features: ["Caixas de som", "Fones de ouvido", "Microfones", "Teclados"]
    },
    {
      icon: <Cable className="h-12 w-12" />,
      title: "Cabos e Carregadores",
      description: "Cabos de diversos modelos, carregadores originais e fontes de alimentação.",
      features: ["USB-C", "Lightning", "Micro USB", "Carregadores wireless"]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Proteção",
      description: "Capas, películas e proteções para manter seus dispositivos seguros.",
      features: ["Capas resistentes", "Películas 3D", "Protetor câmera", "Cases premium"]
    }
  ];

  return (
    <section id="servicos" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-sircell-lightgreen rounded-full -translate-x-20 -translate-y-20 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-sircell-lightgreen rounded-full translate-x-30 translate-y-30 opacity-20"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-sircell-lightgreen text-sircell-darkgreen px-6 py-3 rounded-full text-sm font-bold mb-6 opacity-0"
          >
            NOSSOS SERVIÇOS
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-4xl md:text-5xl font-bold text-sircell-black mb-6 opacity-0"
          >
            Soluções Completas em
            <br />
            <span className="text-sircell-green">Assistência Técnica</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-xl text-sircell-gray max-w-3xl mx-auto opacity-0"
          >
            Do diagnóstico ao reparo, oferecemos serviços de qualidade com laboratório próprio 
            e técnicos especializados para cuidar dos seus equipamentos eletrônicos.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[3 + index] = el}
              className="bg-gradient-to-br from-white to-sircell-lightgreen/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-sircell-lightgreen/50 opacity-0 group hover:scale-105"
            >
              <div className="text-sircell-green mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-sircell-black mb-4">
                {service.title}
              </h3>
              
              <p className="text-sircell-gray mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sircell-black">
                    <div className="w-2 h-2 bg-sircell-green rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Seção de produtos seminovos */}
        <div 
          ref={el => elementsRef.current[9] = el}
          className="bg-gradient-to-r from-sircell-green to-sircell-darkgreen rounded-3xl p-12 text-center text-white opacity-0"
        >
          <Smartphone className="h-16 w-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Aparelhos Seminovos
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Linha econômica com aparelhos seminovos testados e aprovados. 
            Qualidade garantida com preços acessíveis para todos os bolsos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="font-semibold">✓ Testados</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="font-semibold">✓ Garantia</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="font-semibold">✓ Preço justo</span>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div 
          ref={el => elementsRef.current[10] = el}
          className="text-center mt-16 opacity-0"
        >
          <p className="text-sircell-gray text-lg mb-6">
            Precisa de algum serviço? Entre em contato conosco!
          </p>
          <a 
            href="https://wa.me/5554981014238?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Sircell." 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sircell-green hover:bg-sircell-darkgreen text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </div>
    </section>
  );
};

export default SircellServices;
