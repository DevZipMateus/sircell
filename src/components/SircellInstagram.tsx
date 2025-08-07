
import React, { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';

const SircellInstagram = () => {
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

  return (
    <section className="py-20 bg-gradient-to-br from-sircell-lightgreen/10 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-sircell-green/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-sircell-green/5 rounded-full blur-xl"></div>
      
      <div className="section-container">
        {/* Call to Action */}
        <div 
          className="text-center opacity-0"
          ref={el => elementsRef.current[0] = el}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-sircell-lightgray max-w-2xl mx-auto">
            <Instagram className="h-16 w-16 text-sircell-green mx-auto mb-6" />
            
            <h3 className="text-2xl font-bold text-sircell-black mb-4">
              Não Perca Nenhuma Novidade!
            </h3>
            
            <p className="text-sircell-gray mb-6 leading-relaxed">
              Siga nosso Instagram para ver os bastidores do laboratório, 
              dicas de manutenção e os equipamentos que restauramos diariamente.
            </p>
            
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/sircell.assistech?igsh=MXFjNTg2eWoyandmNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
              >
                <Instagram className="h-6 w-6 inline mr-3" />
                Seguir no Instagram
              </a>
              
              <p className="text-sm text-sircell-gray">
                🔔 Ative as notificações para não perder nossas stories!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SircellInstagram;
