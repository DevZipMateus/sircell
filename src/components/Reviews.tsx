
import React, { useEffect, useRef } from 'react';
import { Star, Quote, CheckCircle, Users } from 'lucide-react';

const Reviews = () => {
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

  const reviews = [
    {
      name: "Maria Silva",
      service: "Reparo de TV Samsung 55\"",
      rating: 5,
      comment: "Excelente atendimento! Minha TV estava com problema na tela e foi consertada em 2 dias. Preço justo e garantia de 90 dias. Super recomendo a TechHelp!",
      source: "Google",
      verified: true,
      date: "Há 2 semanas"
    },
    {
      name: "João Santos",
      service: "Troca de tela iPhone 13",
      rating: 5,
      comment: "Quebrei a tela do meu iPhone e em menos de 3 horas estava pronto! Peça original, preço honesto e atendimento nota 10. Já indiquei para vários amigos.",
      source: "WhatsApp",
      verified: true,
      date: "Há 1 mês"
    },
    {
      name: "Ana Costa",
      service: "Formatação de Notebook Dell",
      rating: 5,
      comment: "Meu notebook estava travando muito. Fizeram formatação completa, limpeza e ainda instalaram antivírus. Ficou voando! Atendimento muito profissional.",
      source: "Facebook",
      verified: true,
      date: "Há 3 semanas"
    },
    {
      name: "Pedro Oliveira",
      service: "Conserto de Máquina de Lavar",
      rating: 5,
      comment: "Atendimento domiciliar impecável. Técnico pontual, educado e resolveu o problema na primeira visita. Preço transparente e sem surpresas. Parabéns!",
      source: "Indicação",
      verified: true,
      date: "Há 1 semana"
    },
    {
      name: "Carla Mendes",
      service: "Reparo de Micro-ondas",
      rating: 5,
      comment: "Micro-ondas parou de funcionar de repente. Vieram em casa, identificaram o problema e consertaram no mesmo dia. Excelente custo-benefício!",
      source: "Google",
      verified: true,
      date: "Há 5 dias"
    },
    {
      name: "Roberto Lima",
      service: "Upgrade de Computador",
      rating: 5,
      comment: "Precisava de mais velocidade no PC. Fizeram upgrade de memória e SSD. Explicaram tudo detalhadamente e o resultado foi incrível. Muito satisfeito!",
      source: "WhatsApp",
      verified: true,
      date: "Há 2 meses"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="reviews" ref={sectionRef} className="py-24 bg-gray-50 relative">
      <div className="section-container">
        <div className="text-center mb-20">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 opacity-0"
          >
            DEPOIMENTOS
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-4xl md:text-5xl font-black text-black mb-6 opacity-0"
          >
            O Que Nossos Clientes
            <br />
            <span className="text-red-600">Dizem Sobre Nós</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-xl text-gray-600 max-w-3xl mx-auto opacity-0"
          >
            Milhares de clientes satisfeitos confiam na TechHelp Soluções. 
            Veja alguns depoimentos reais de quem já experimentou nossos serviços.
          </p>
        </div>

        {/* Estatísticas de avaliações */}
        <div 
          ref={el => elementsRef.current[3] = el}
          className="bg-white rounded-2xl p-8 mb-16 shadow-lg opacity-0"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <div className="text-3xl font-bold text-black mb-1">4.9/5</div>
              <div className="text-gray-600 text-sm">Avaliação Média</div>
            </div>
            <div>
              <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-black mb-1">1.200+</div>
              <div className="text-gray-600 text-sm">Avaliações Verificadas</div>
            </div>
            <div>
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-black mb-1">98%</div>
              <div className="text-gray-600 text-sm">Recomendariam</div>
            </div>
            <div>
              <Quote className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-black mb-1">95%</div>
              <div className="text-gray-600 text-sm">Voltariam a Usar</div>
            </div>
          </div>
        </div>

        {/* Grade de depoimentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[4 + index] = el}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 relative"
            >
              {/* Badge verificado */}
              {review.verified && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                  <CheckCircle className="h-4 w-4" />
                </div>
              )}

              <Quote className="h-8 w-8 text-red-600 mb-4" />
              
              <div className="flex items-center mb-3">
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
                <span className="ml-2 text-gray-500 text-sm">{review.date}</span>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                "{review.comment}"
              </p>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-black font-bold">{review.name}</h4>
                    <p className="text-gray-600 text-sm">{review.service}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                      Via {review.source}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action final */}
        <div 
          ref={el => elementsRef.current[10] = el}
          className="bg-black rounded-2xl p-12 text-center opacity-0"
        >
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
            ))}
          </div>
          <h3 className="text-white text-3xl font-bold mb-4">
            Seja o Próximo Cliente Satisfeito!
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se aos milhares de clientes que já experimentaram a excelência da TechHelp Soluções. 
            Qualidade, agilidade e garantia em todos os nossos serviços.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a 
              href="https://wa.me/5555999887766?text=Olá!%20Vi%20os%20depoimentos%20e%20gostaria%20de%20um%20orçamento." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              QUERO MEU ORÇAMENTO
            </a>
            <button 
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              FALAR CONOSCO
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            ⭐ Mais de 1.200 avaliações 5 estrelas • Diagnóstico gratuito • Garantia assegurada
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
