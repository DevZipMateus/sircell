
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Award, Users, Wrench, Shield, Clock, Star } from 'lucide-react';

const AboutUs = () => {
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

  const stats = [
    {
      icon: <Award className="h-8 w-8" />,
      number: "15+",
      label: "Anos de Experiência",
      description: "Atendendo clientes com excelência"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "5.000+",
      label: "Clientes Satisfeitos",
      description: "Equipamentos reparados com sucesso"
    },
    {
      icon: <Star className="h-8 w-8" />,
      number: "98%",
      label: "Taxa de Sucesso",
      description: "Problemas resolvidos efetivamente"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      number: "90",
      label: "Dias de Garantia",
      description: "Em todos os nossos serviços"
    }
  ];

  const values = [
    {
      icon: <Wrench className="h-10 w-10 text-red-600" />,
      title: "Expertise Técnica",
      description: "Equipe altamente qualificada com certificações e treinamentos constantes nas principais marcas do mercado."
    },
    {
      icon: <Shield className="h-10 w-10 text-red-600" />,
      title: "Confiabilidade",
      description: "Transparência total no processo, desde o diagnóstico até a entrega, com garantia assegurada em todos os serviços."
    },
    {
      icon: <Clock className="h-10 w-10 text-red-600" />,
      title: "Agilidade",
      description: "Processos otimizados para entregar seu equipamento funcionando no menor tempo possível, sem comprometer a qualidade."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white relative">
      <div className="section-container">
        <div className="text-center mb-20">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 opacity-0"
          >
            SOBRE NÓS
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-4xl md:text-5xl font-black text-black mb-6 opacity-0"
          >
            Líderes em Assistência Técnica
            <br />
            <span className="text-red-600">Há Mais de 15 Anos</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-xl text-gray-600 max-w-4xl mx-auto opacity-0"
          >
            Somos a TechHelp Soluções, referência em assistência técnica especializada. 
            Nossa missão é devolver a vida aos seus equipamentos eletrônicos com qualidade, 
            agilidade e total transparência.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[3 + index] = el}
              className="text-center bg-gray-50 rounded-2xl p-8 opacity-0 hover:bg-red-50 transition-all duration-300"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-red-600 shadow-lg">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-black mb-2">{stat.number}</div>
              <div className="font-bold text-black mb-2">{stat.label}</div>
              <div className="text-gray-600 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* História e valores */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={el => elementsRef.current[7] = el}
            className="opacity-0"
          >
            <h3 className="text-3xl font-bold text-black mb-6">Nossa História</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Fundada em <span className="font-semibold text-black">2008</span>, a TechHelp Soluções nasceu do sonho de transformar a relação entre pessoas e tecnologia. Começamos como uma pequena oficina especializada em televisões e hoje somos referência em assistência técnica multimarcas.
              </p>
              <p>
                Nossa trajetória é marcada pela <span className="font-semibold text-red-600">inovação constante</span> e pelo compromisso inabalável com a satisfação dos nossos clientes. Investimos continuamente em capacitação técnica, equipamentos de última geração e processos que garantem a máxima qualidade.
              </p>
              <p>
                Hoje, com mais de <span className="font-semibold text-black">5.000 equipamentos reparados</span> e uma taxa de sucesso de 98%, somos a escolha preferida de famílias e empresas que buscam excelência em assistência técnica.
              </p>
            </div>
          </div>

          <div 
            ref={el => elementsRef.current[8] = el}
            className="space-y-8 opacity-0"
          >
            <h3 className="text-3xl font-bold text-black mb-8">Nossos Valores</h3>
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-all duration-300">
                <div className="flex-shrink-0 mt-1">
                  {value.icon}
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div 
          ref={el => elementsRef.current[9] = el}
          className="bg-black rounded-2xl p-12 text-center mt-20 opacity-0"
        >
          <h3 className="text-white text-3xl font-bold mb-4">
            Pronto Para Conhecer a Diferença?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se aos milhares de clientes que já experimentaram nossa excelência em assistência técnica. 
            Seu equipamento em boas mãos, sempre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a 
              href="https://wa.me/5555999887766?text=Olá!%20Gostaria%20de%20conhecer%20melhor%20os%20serviços%20da%20TechHelp." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              FALAR CONOSCO
            </a>
            <button 
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              VER SERVIÇOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
