
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Phone, Mail, MessageCircle, MapPin, Clock, CheckCircle } from 'lucide-react';
import ContactInfo from './contact/ContactInfo';

const Contact = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
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

  const contactOptions = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "WhatsApp",
      subtitle: "Resposta rápida",
      info: "(54) 98101-4238",
      description: "Atendimento instantâneo pelo WhatsApp. Envie fotos do problema e receba diagnóstico preliminar.",
      action: "Solicitar Orçamento",
      link: "https://wa.me/5554981014238?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20reparo%20do%20meu%20equipamento.",
      bgColor: "bg-sircell-green hover:bg-sircell-darkgreen",
      popular: true
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Telefone",
      subtitle: "Atendimento direto",
      info: "(54) 98101-4238",
      description: "Ligue diretamente para nossa central de atendimento. Horário comercial de segunda a sábado.",
      action: "Ligar para Orçamento",
      link: "tel:+5554981014238",
      bgColor: "bg-sircell-black hover:bg-sircell-black/80",
      popular: false
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "E-mail",
      subtitle: "Suporte técnico",
      info: "sircell27@gmail.com",
      description: "Envie detalhes do problema por e-mail. Resposta em até 2 horas no horário comercial.",
      action: "Solicitar Orçamento",
      link: "mailto:sircell27@gmail.com?subject=Solicitação de Orçamento",
      bgColor: "bg-sircell-gray hover:bg-sircell-gray/80",
      popular: false
    }
  ];

  return (
    <section id="contato" className="py-20 bg-sircell-lightgreen/20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 
            className="section-title text-sircell-black"
            ref={el => elementsRef.current[0] = el}
          >
            Entre em Contato
          </h2>
          <p 
            className="section-subtitle text-sircell-gray"
            ref={el => elementsRef.current[1] = el}
          >
            Estamos prontos para atender você da melhor forma possível. 
            Escolha a opção de contato que preferir.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              ref={el => elementsRef.current[2 + index] = el}
              className={cn(
                "relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 border border-sircell-lightgray group",
                "transform hover:-translate-y-2"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sircell-green text-white text-sm font-medium py-1 px-4 rounded-full shadow-lg">
                  Mais Popular
                </div>
              )}

              <div className="text-center">
                <div className={cn(
                  "w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white transition-all duration-300",
                  option.bgColor,
                  "group-hover:scale-110"
                )}>
                  {option.icon}
                </div>

                <h3 className="text-sircell-black font-bold text-2xl mb-2">
                  {option.title}
                </h3>
                <p className="text-sircell-green font-semibold text-lg mb-4">
                  {option.subtitle}
                </p>
                <p className="text-sircell-black font-bold text-xl mb-6">
                  {option.info}
                </p>
                <p className="text-sircell-gray mb-8 leading-relaxed">
                  {option.description}
                </p>

                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "block text-center text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg",
                    option.bgColor
                  )}
                >
                  {option.action}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div 
            ref={el => elementsRef.current[5] = el}
            className="opacity-0 bg-white rounded-2xl p-8 shadow-lg border border-sircell-lightgray"
          >
            <div className="mb-6">
              <MapPin className="h-8 w-8 text-sircell-green mb-4" />
              <div>
                <h4 className="font-bold text-sircell-black text-xl mb-2">Endereço</h4>
                <p className="text-sircell-gray">
                  Marechal Floriano, 1001 - Centro<br />
                  Rio Grande do Sul - RS
                </p>
                <a 
                  href="https://maps.google.com/?q=Marechal+Floriano+1001+Centro+RS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sircell-green hover:text-sircell-darkgreen font-semibold text-sm mt-2 inline-block transition-colors duration-300"
                >
                  Ver no Google Maps →
                </a>
              </div>
            </div>

            <div className="border-t border-sircell-lightgray pt-6">
              <Clock className="h-8 w-8 text-sircell-green mb-4" />
              <div>
                <h4 className="font-bold text-sircell-black text-xl mb-4">
                  Horário de Funcionamento
                </h4>
                <div className="space-y-3 text-sircell-gray">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Segunda a Sexta:</span>
                    <span className="text-sircell-black font-semibold">9h às 18h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sábados:</span>
                    <span className="text-sircell-black font-semibold">9h às 13h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Domingos:</span>
                    <span className="text-sircell-gray">Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactInfo setRef={(el) => elementsRef.current[6] = el} />
        </div>

        <div className="text-center mt-16">
          <div 
            ref={el => elementsRef.current[7] = el}
            className="bg-gradient-to-r from-sircell-green to-sircell-darkgreen rounded-2xl p-8 text-white opacity-0 shadow-xl"
          >
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="h-12 w-12 text-white mr-4" />
              <div className="text-left">
                <h3 className="text-2xl font-bold">Orçamento Gratuito</h3>
                <p className="text-white/90">Sem compromisso, sem pegadinhas</p>
              </div>
            </div>
            <p className="text-lg mb-6 text-white/95">
              Receba um orçamento personalizado para o reparo do seu equipamento. 
              Nossa equipe está pronta para atender você!
            </p>
            <a 
              href="https://wa.me/5554981014238?text=Olá!%20Gostaria%20de%20um%20orçamento%20personalizado%20para%20meus%20equipamentos." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-sircell-green hover:bg-sircell-lightgray px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
            >
              Solicitar Orçamento Gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
