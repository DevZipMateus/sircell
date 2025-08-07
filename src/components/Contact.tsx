
import React, { useEffect, useRef } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Mail, Award } from 'lucide-react';
import ContactInfo from './contact/ContactInfo';

const Contact = () => {
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

  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "WhatsApp",
      subtitle: "Resposta rápida",
      info: "(11) 99988-7766",
      description: "Atendimento instantâneo pelo WhatsApp. Envie fotos do problema e receba diagnóstico preliminar.",
      action: "Solicitar Orçamento",
      link: "https://wa.me/5555999887766?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20reparo%20do%20meu%20equipamento.",
      bgColor: "bg-green-600 hover:bg-green-700",
      popular: true
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Telefone",
      subtitle: "Atendimento direto",
      info: "(11) 3333-4444",
      description: "Ligue diretamente para nossa central de atendimento. Horário comercial de segunda a sábado.",
      action: "Ligar para Orçamento",
      link: "tel:+551133334444",
      bgColor: "bg-red-600 hover:bg-red-700",
      popular: false
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "E-mail",
      subtitle: "Suporte técnico",
      info: "contato@techhelp.com.br",
      description: "Envie detalhes do problema por e-mail. Resposta em até 2 horas no horário comercial.",
      action: "Solicitar Orçamento",
      link: "mailto:contato@techhelp.com.br?subject=Solicitação de Orçamento",
      bgColor: "bg-black hover:bg-gray-800",
      popular: false
    }
  ];

  const businessHours = [
    { day: "Segunda a Sexta", hours: "08:00 - 18:00" },
    { day: "Sábado", hours: "08:00 - 12:00" },
    { day: "Domingo", hours: "Fechado" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-white relative">
      <div className="section-container">
        <div className="text-center mb-20">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 opacity-0"
          >
            CONTATO
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-4xl md:text-5xl font-black text-black mb-6 opacity-0"
          >
            Solicite Seu Orçamento
            <br />
            <span className="text-red-600">Sem Compromisso</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-xl text-gray-600 max-w-3xl mx-auto opacity-0"
          >
            Entre em contato conosco através de diversos canais e receba um orçamento personalizado 
            para o reparo do seu equipamento.
          </p>
        </div>

        {/* Métodos de contato */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[3 + index] = el}
              className="relative bg-gray-50 rounded-2xl p-8 text-center opacity-0 hover:bg-white hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-red-100"
            >
              {method.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MAIS RÁPIDO
                </div>
              )}

              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-red-600 shadow-lg">
                {method.icon}
              </div>
              
              <h3 className="text-black font-bold text-xl mb-2">
                {method.title}
              </h3>
              
              <p className="text-red-600 font-semibold text-sm mb-4">
                {method.subtitle}
              </p>

              <div className="text-2xl font-bold text-black mb-4">
                {method.info}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {method.description}
              </p>
              
              <a 
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`inline-block w-full py-3 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 ${method.bgColor}`}
              >
                {method.action}
              </a>
            </div>
          ))}
        </div>

        {/* Informações adicionais */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Localização e horários */}
          <div 
            ref={el => elementsRef.current[6] = el}
            className="opacity-0"
          >
            <h3 className="text-3xl font-bold text-black mb-8">Localização & Horários</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                <MapPin className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-black mb-2">Endereço</h4>
                  <p className="text-gray-600">
                    Rua da Tecnologia, 123 - Centro<br />
                    São Paulo - SP, 01234-567
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Rua+da+Tecnologia+123+Centro+São+Paulo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 font-semibold text-sm mt-2 inline-block"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="h-6 w-6 text-red-600" />
                  <h4 className="font-bold text-black">Horário de Funcionamento</h4>
                </div>
                <div className="space-y-2">
                  {businessHours.map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="font-semibold text-black">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                  <p className="text-red-800 text-sm font-medium">
                    ⚡ Orçamentos via WhatsApp disponíveis 24h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de contato */}
          <div 
            ref={el => elementsRef.current[7] = el}
            className="opacity-0"
          >
            <ContactInfo setRef={() => {}} />
          </div>
        </div>

        {/* Garantias e benefícios */}
        <div 
          ref={el => elementsRef.current[8] = el}
          className="bg-black rounded-2xl p-12 text-center mt-20 opacity-0"
        >
          <Award className="h-12 w-12 text-red-500 mx-auto mb-6" />
          <h3 className="text-white text-3xl font-bold mb-4">
            Por Que Nos Escolher?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">24h</div>
              <div className="text-white font-semibold mb-2">Diagnóstico Rápido</div>
              <div className="text-gray-300 text-sm">Identificamos o problema em até 24 horas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">90</div>
              <div className="text-white font-semibold mb-2">Dias de Garantia</div>
              <div className="text-gray-300 text-sm">Todos os serviços com garantia estendida</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">15+</div>
              <div className="text-white font-semibold mb-2">Anos de Experiência</div>
              <div className="text-gray-300 text-sm">Especialistas em todas as marcas</div>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href="https://wa.me/5555999887766?text=Olá!%20Gostaria%20de%20um%20orçamento%20personalizado%20para%20meus%20equipamentos." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              SOLICITAR ORÇAMENTO PERSONALIZADO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
