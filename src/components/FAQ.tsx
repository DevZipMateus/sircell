
import React, { useEffect, useRef } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
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
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);

  const faqs = [
    {
      question: "Qual é o prazo para conserto dos equipamentos?",
      answer: "O prazo varia conforme o tipo de equipamento e problema identificado. Celulares geralmente ficam prontos em 24-48h, TVs em 3-5 dias úteis, e eletrodomésticos podem levar de 5-10 dias úteis, dependendo da disponibilidade de peças."
    },
    {
      question: "Vocês oferecem garantia nos serviços?",
      answer: "Sim! Oferecemos garantia de 90 dias para TVs e eletrodomésticos, 60 dias para celulares e 30 dias para computadores. A garantia cobre defeitos relacionados ao serviço executado."
    },
    {
      question: "Como funciona o orçamento?",
      answer: "O orçamento é completamente gratuito! Nossa equipe faz uma avaliação detalhada do equipamento e apresenta o valor do conserto. Você só paga se aprovar o serviço."
    },
    {
      question: "Vocês usam peças originais?",
      answer: "Sempre que possível, utilizamos peças originais. Quando não disponíveis, usamos peças compatíveis de alta qualidade com a mesma garantia. Sempre informamos sobre o tipo de peça antes do serviço."
    },
    {
      question: "Fazem atendimento em domicílio?",
      answer: "Sim! Para eletrodomésticos de grande porte (geladeiras, máquinas de lavar, etc.) oferecemos atendimento em domicílio. Para outros equipamentos, você pode trazer até nossa loja."
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos dinheiro, cartão de débito/crédito (à vista ou parcelado), PIX e transferência bancária. Para orçamentos acima de R$ 200, oferecemos parcelamento em até 3x sem juros."
    },
    {
      question: "Vocês atendem quais regiões?",
      answer: "Atendemos Santa Maria e região metropolitana. Para atendimento domiciliar, cobrimos um raio de 30km da nossa sede. Entre em contato para confirmar se atendemos sua localidade."
    },
    {
      question: "O que acontece se o equipamento não tiver conserto?",
      answer: "Se após a avaliação concluirmos que o equipamento não tem viabilidade de reparo, não cobramos nada pela análise. Oferecemos orientações sobre descarte adequado ou possibilidade de aproveitamento de peças."
    }
  ];

  return (
    <section 
      id="faq" 
      ref={sectionRef} 
      className="py-20 relative min-h-screen hero-parallax"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1920&q=80")'
      }}
    >
      {/* Tech overlay with red accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-red-600/90"></div>
      
      {/* Circuit pattern overlay */}
      <div className="circuit-overlay"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-white" ref={el => elementsRef.current[0] = el}>
            Perguntas Frequentes
          </h2>
          <p ref={el => elementsRef.current[1] = el} className="section-subtitle text-white/90">
            Tire suas dúvidas sobre nossos serviços e processo de atendimento
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Collapsible 
              key={index} 
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0" 
              ref={el => elementsRef.current[2 + index] = el}
            >
              <CollapsibleTrigger className="w-full p-6 text-left flex items-center justify-between hover:bg-tech-lightgray/50 rounded-xl transition-colors duration-300 group">
                <h3 className="text-tech-blue font-semibold text-lg pr-4 group-hover:text-red-600 transition-colors duration-300">
                  {faq.question}
                </h3>
                <ChevronDown className="h-5 w-5 text-tech-gray group-hover:text-red-600 transition-all duration-300 group-data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6">
                <div className="border-t border-tech-lightgray pt-4">
                  <p className="text-tech-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto opacity-0" ref={el => elementsRef.current[10] = el}>
            <h3 className="text-tech-blue font-display font-bold text-xl mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-tech-gray mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão sobre nossos serviços.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5555999887766?text=Olá!%20Tenho%20algumas%20dúvidas%20sobre%20os%20serviços." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-tech-green hover:bg-tech-green/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Falar no WhatsApp
              </a>
              <button 
                className="bg-tech-blue hover:bg-tech-darkblue text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300" 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
