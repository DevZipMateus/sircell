
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Check } from 'lucide-react';

const Plans = () => {
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

  const plans = [
    {
      name: "Básico",
      description: "Ideal para reparos simples e manutenção básica de equipamentos eletrônicos.",
      features: [
        "Diagnóstico gratuito",
        "Garantia de 30 dias",
        "Reparo de problemas básicos",
        "Suporte técnico por e-mail",
        "Peças de qualidade"
      ],
      isPopular: false,
      ctaText: "Solicitar Orçamento"
    },
    {
      name: "Completo",
      description: "Perfeito para reparos avançados e manutenção completa com garantia estendida.",
      features: [
        "Tudo do plano Básico",
        "Garantia de 90 dias",
        "Reparo de problemas complexos",
        "Suporte prioritário",
        "Peças originais premium"
      ],
      isPopular: true,
      ctaText: "Solicitar Orçamento"
    },
    {
      name: "Premium",
      description: "Solução completa para empresas e clientes que precisam de atendimento VIP.",
      features: [
        "Tudo do plano Completo",
        "Atendimento domiciliar",
        "Garantia estendida de 120 dias",
        "Técnico dedicado",
        "Suporte 24/7 via WhatsApp"
      ],
      isPopular: false,
      ctaText: "Solicitar Orçamento"
    }
  ];

  return (
    <section 
      id="plans" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
            Nossos Planos de Atendimento
          </h2>
          <p className="section-subtitle" ref={el => elementsRef.current[1] = el}>
            Escolha o plano que melhor atende às suas necessidades e receba um orçamento personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[2 + index] = el}
              className={cn(
                "rounded-lg p-8 opacity-0 relative shadow-sm hover:shadow-md transition-all duration-300",
                plan.isPopular ? "border-2 border-red-600" : "border border-gray-200 bg-white"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-sm font-medium py-1 px-4 rounded-full">
                  Mais Popular
                </div>
              )}

              <h3 className="text-black font-display font-bold text-2xl mb-2">
                {plan.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-6">
                {plan.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mr-2 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={cn(
                  "block text-center py-3 px-6 rounded-md font-medium transition-colors duration-300 w-full",
                  plan.isPopular 
                    ? "bg-red-600 hover:bg-red-700 text-white" 
                    : "bg-white hover:bg-gray-50 text-black border border-gray-300"
                )}
                onClick={() => {
                  window.open('https://wa.me/5555999887766?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20o%20plano%20' + plan.name, '_blank');
                }}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
