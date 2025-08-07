
import React, { useEffect, useRef } from 'react';
import { Award, Users, Wrench, Heart, Target, Zap } from 'lucide-react';

const SircellAbout = () => {
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

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Empatia",
      description: "Olhamos sempre o lado do cliente, pois sabemos como é estar do outro lado da moeda."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Qualidade",
      description: "Trabalhamos com seriedade e qualidade em todos os nossos serviços."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Agilidade",
      description: "Seu celular pronto antes de você sentir falta dele!"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Inovação",
      description: "Procuramos sempre trazer melhorias e novidades para engajar nossa loja."
    }
  ];

  return (
    <section id="sobre" ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-sircell-lightgreen/30 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-sircell-green/20 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-sircell-green/10 rounded-full"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-sircell-green text-white px-6 py-3 rounded-full text-sm font-bold mb-6 opacity-0"
          >
            SOBRE A SIRCELL
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-4xl md:text-5xl font-bold text-sircell-black mb-6 opacity-0"
          >
            Uma Nova Era na
            <br />
            <span className="text-sircell-green">Assistência Técnica</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-xl text-sircell-gray max-w-4xl mx-auto opacity-0"
          >
            Somos uma empresa nova no mercado, mas com muito conhecimento e dedicação. 
            Nossa missão é oferecer o melhor e mais diferenciado serviço para nossos clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Texto sobre a empresa */}
          <div 
            ref={el => elementsRef.current[3] = el}
            className="opacity-0"
          >
            <h3 className="text-3xl font-bold text-sircell-black mb-6">
              Nossa História e Missão
            </h3>
            <div className="space-y-4 text-sircell-gray text-lg leading-relaxed">
              <p>
                A <strong className="text-sircell-green">Sircell Assistência Técnica</strong> nasceu com o propósito 
                de revolucionar o mercado de reparo de eletrônicos, trazendo seriedade, 
                qualidade e agilidade em cada atendimento.
              </p>
              <p>
                Temos nosso próprio <strong className="text-sircell-green">laboratório de assistência técnica</strong>, 
                equipado com tecnologia moderna e ferramentas especializadas para garantir 
                a excelência em todos os serviços prestados.
              </p>
              <p>
                Oferecemos opções para todos os bolsos, desde serviços mais econômicos até 
                soluções premium, sempre mantendo nossa <strong className="text-sircell-green">empatia</strong> e 
                compreensão com as necessidades de cada cliente.
              </p>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-sircell-lightgreen px-4 py-2 rounded-full">
                <Wrench className="h-5 w-5 text-sircell-green" />
                <span className="font-semibold text-sircell-black">Laboratório Próprio</span>
              </div>
              <div className="flex items-center space-x-2 bg-sircell-lightgreen px-4 py-2 rounded-full">
                <Users className="h-5 w-5 text-sircell-green" />
                <span className="font-semibold text-sircell-black">Atendimento Personalizado</span>
              </div>
            </div>
          </div>

          {/* Imagem/Logo */}
          <div 
            ref={el => elementsRef.current[4] = el}
            className="text-center opacity-0"
          >
            <div className="bg-gradient-to-br from-sircell-green to-sircell-darkgreen rounded-3xl p-12 text-white">
              <img 
                src="/lovable-uploads/b5b6b1a3-79c2-49f0-83c4-fca215c4a8d7.png" 
                alt="Sircell Logo" 
                className="mx-auto h-32 w-auto mb-6 filter brightness-0 invert"
              />
              <h4 className="text-2xl font-bold mb-4">Nossa Promessa</h4>
              <p className="text-lg opacity-90">
                "Teu celular pronto antes de você sentir falta dele!"
              </p>
            </div>
          </div>
        </div>

        {/* Nossos valores */}
        <div 
          ref={el => elementsRef.current[5] = el}
          className="opacity-0"
        >
          <h3 className="text-3xl font-bold text-sircell-black text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-sircell-green"
              >
                <div className="text-sircell-green mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="font-bold text-sircell-black text-xl mb-3">
                  {value.title}
                </h4>
                <p className="text-sircell-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Diferenciais */}
        <div 
          ref={el => elementsRef.current[6] = el}
          className="bg-sircell-black rounded-3xl p-12 text-center text-white mt-20 opacity-0"
        >
          <h3 className="text-3xl font-bold mb-8">
            O que nos diferencia no mercado?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-sircell-green mb-3">🔬</div>
              <h4 className="font-semibold text-lg mb-2">Laboratório Próprio</h4>
              <p className="text-gray-300">
                Equipamentos modernos e ambiente controlado para diagnósticos precisos
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-sircell-green mb-3">💰</div>
              <h4 className="font-semibold text-lg mb-2">Preços Justos</h4>
              <p className="text-gray-300">
                Opções para todos os bolsos, desde econômicas até premium
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-sircell-green mb-3">🚀</div>
              <h4 className="font-semibold text-lg mb-2">Sempre Inovando</h4>
              <p className="text-gray-300">
                Constantemente buscamos melhorias e novidades para nossos clientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SircellAbout;
