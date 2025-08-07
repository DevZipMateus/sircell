
import React, { useEffect, useRef } from 'react';
import { MessageCircle, Search, Wrench, CheckCircle, Clock, Shield } from 'lucide-react';

const HowItWorks = () => {
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
                  }, index * 200);
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

  const steps = [
    {
      number: "01",
      icon: <MessageCircle className="h-12 w-12" />,
      title: "CONTATO INICIAL",
      description: "Entre em contato conosco pelo WhatsApp ou formulário. Conte-nos sobre o problema do seu equipamento.",
      time: "Resposta em minutos"
    },
    {
      number: "02",
      icon: <Search className="h-12 w-12" />,
      title: "DIAGNÓSTICO GRATUITO",
      description: "Nossa equipe técnica fará uma avaliação completa e identificará o problema com precisão.",
      time: "Diagnóstico em 24h"
    },
    {
      number: "03",
      icon: <Wrench className="h-12 w-12" />,
      title: "REPARO PROFISSIONAL",
      description: "Executamos o conserto com peças originais e técnicos especializados em cada tipo de equipamento.",
      time: "Prazo informado"
    },
    {
      number: "04",
      icon: <CheckCircle className="h-12 w-12" />,
      title: "ENTREGA COM GARANTIA",
      description: "Seu equipamento é devolvido funcionando perfeitamente com garantia de até 90 dias.",
      time: "Satisfação garantida"
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-gray-50 relative">
      <div className="section-container">
        <div className="text-center mb-20">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 opacity-0"
          >
            COMO FUNCIONA
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-4xl md:text-5xl font-black text-black mb-6 opacity-0"
          >
            Processo Simples e
            <br />
            <span className="text-red-600">100% Transparente</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-xl text-gray-600 max-w-3xl mx-auto opacity-0"
          >
            Do primeiro contato até a entrega final, mantemos você informado sobre cada etapa do processo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[3 + index] = el}
              className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group"
            >
              {/* Linha conectora (exceto no último) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-red-200 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-red-400 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}

              {/* Número do passo */}
              <div className="absolute -top-4 left-4 bg-red-600 text-white w-12 h-8 rounded-lg flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>
              
              {/* Ícone */}
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>
              
              <h3 className="text-black font-bold text-lg mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {step.description}
              </p>

              <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {step.time}
              </div>
            </div>
          ))}
        </div>

        {/* Seção de benefícios */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={el => elementsRef.current[7] = el}
            className="opacity-0"
          >
            <h3 className="text-3xl font-bold text-black mb-6">
              Por Que Escolher a TechHelp?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 rounded-full p-2 flex-shrink-0">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Agilidade no Atendimento</h4>
                  <p className="text-gray-600">Resposta rápida e diagnóstico em até 24 horas para a maioria dos equipamentos.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 rounded-full p-2 flex-shrink-0">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Garantia Estendida</h4>
                  <p className="text-gray-600">Todos os serviços incluem garantia de até 90 dias para sua total tranquilidade.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Técnicos Especializados</h4>
                  <p className="text-gray-600">Equipe certificada com mais de 15 anos de experiência no mercado.</p>
                </div>
              </div>
            </div>
          </div>

          <div 
            ref={el => elementsRef.current[8] = el}
            className="bg-black rounded-2xl p-8 text-center opacity-0"
          >
            <h3 className="text-white text-2xl font-bold mb-6">
              Pronto Para Começar?
            </h3>
            <p className="text-gray-300 mb-8">
              Entre em contato agora mesmo e resolva o problema do seu equipamento com quem realmente entende do assunto.
            </p>
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/5555999887766?text=Olá!%20Preciso%20de%20um%20diagnóstico%20para%20meu%20equipamento." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
              >
                FALAR NO WHATSAPP
              </a>
              <button 
                className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                PREENCHER FORMULÁRIO
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Diagnóstico gratuito • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
