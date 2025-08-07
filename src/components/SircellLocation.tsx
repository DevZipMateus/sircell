
import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const SircellLocation = () => {
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

  return (
    <section id="localizacao" ref={sectionRef} className="py-20 bg-gradient-to-br from-sircell-lightgray to-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-sircell-green text-white px-6 py-3 rounded-full text-sm font-bold mb-6 opacity-0"
          >
            NOSSA LOCALIZAÇÃO
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-4xl md:text-5xl font-bold text-sircell-black mb-6 opacity-0"
          >
            Venha nos Visitar
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-xl text-sircell-gray max-w-3xl mx-auto opacity-0"
          >
            Estamos localizados em um ponto estratégico para melhor atendê-lo. 
            Confira nossos horários e informações de contato.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mapa incorporado */}
          <div 
            ref={el => elementsRef.current[3] = el}
            className="opacity-0"
          >
            <div className="bg-white rounded-2xl p-2 shadow-xl">
              <iframe
                src="https://maps.google.com/maps?q=Marechal+Floriano+1001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                className="rounded-xl border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Sircell Assistência Técnica"
              ></iframe>
            </div>
            <div className="text-center mt-4">
              <a 
                href="https://maps.app.goo.gl/ozdcieJQWvuu8W7K7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sircell-green hover:text-sircell-darkgreen font-semibold transition-colors"
              >
                📍 Abrir no Google Maps
              </a>
            </div>
          </div>

          {/* Informações de contato */}
          <div 
            ref={el => elementsRef.current[4] = el}
            className="opacity-0"
          >
            <div className="space-y-8">
              {/* Endereço */}
              <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg border-l-4 border-sircell-green">
                <MapPin className="h-8 w-8 text-sircell-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-sircell-black text-xl mb-2">Endereço</h3>
                  <p className="text-sircell-gray text-lg">
                    Marechal Floriano 1001<br />
                    Centro - RS
                  </p>
                </div>
              </div>

              {/* Horário de funcionamento */}
              <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg border-l-4 border-sircell-green">
                <Clock className="h-8 w-8 text-sircell-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-sircell-black text-xl mb-2">Horário de Funcionamento</h3>
                  <div className="text-sircell-gray">
                    <p className="mb-1"><strong>Segunda a Sexta:</strong> 08:00 - 18:00</p>
                    <p className="mb-1"><strong>Sábado:</strong> 08:00 - 12:00</p>
                    <p><strong>Domingo:</strong> Fechado</p>
                  </div>
                </div>
              </div>

              {/* Contato */}
              <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg border-l-4 border-sircell-green">
                <Phone className="h-8 w-8 text-sircell-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-sircell-black text-xl mb-2">Contato</h3>
                  <div className="text-sircell-gray space-y-1">
                    <p className="flex items-center">
                      <span className="font-semibold mr-2">Telefone/WhatsApp:</span>
                      <a href="tel:5554981014238" className="text-sircell-green hover:text-sircell-darkgreen">
                        (54) 98101-4238
                      </a>
                    </p>
                    <p className="flex items-center">
                      <span className="font-semibold mr-2">E-mail:</span>
                      <a href="mailto:sircell27@gmail.com" className="text-sircell-green hover:text-sircell-darkgreen">
                        sircell27@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão de ação */}
            <div className="mt-8 text-center">
              <a 
                href="https://wa.me/5554981014238?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20ou%20esclarecer%20dúvidas." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sircell-green hover:bg-sircell-darkgreen text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                ENTRE EM CONTATO AGORA
              </a>
            </div>
          </div>
        </div>

        {/* Informações adicionais */}
        <div 
          ref={el => elementsRef.current[5] = el}
          className="bg-sircell-black rounded-3xl p-12 text-center text-white mt-16 opacity-0"
        >
          <h3 className="text-3xl font-bold mb-6">Por que nos escolher?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-sircell-green mb-3">✓</div>
              <h4 className="font-semibold text-lg mb-2">Laboratório Próprio</h4>
              <p className="text-gray-300">Equipamentos profissionais e ambiente controlado</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-sircell-green mb-3">⚡</div>
              <h4 className="font-semibold text-lg mb-2">Reparo Rápido</h4>
              <p className="text-gray-300">Seu aparelho pronto antes de você sentir falta</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-sircell-green mb-3">🛡️</div>
              <h4 className="font-semibold text-lg mb-2">Garantia</h4>
              <p className="text-gray-300">Todos os serviços com garantia assegurada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SircellLocation;
