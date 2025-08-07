
import React, { useEffect, useRef } from 'react';
import { Instagram, Heart, MessageCircle, Share2 } from 'lucide-react';

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

  const mockPosts = [
    {
      id: 1,
      caption: "Mais um celular Samsung Galaxy restaurado com sucesso! ✨ #SircellAssistecia #RepairPro",
      likes: 127,
      comments: 18
    },
    {
      id: 2,
      caption: "iPhone com tela quebrada? Não se preocupe! Nossa equipe resolve rapidinho 📱⚡",
      likes: 203,
      comments: 31
    },
    {
      id: 3,
      caption: "Laboratório em pleno funcionamento! Tecnologia de ponta para seus equipamentos 🔧💚",
      likes: 89,
      comments: 12
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sircell-lightgreen/10 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-sircell-green/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-sircell-green/5 rounded-full blur-xl"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <div 
            className="flex items-center justify-center mb-6"
            ref={el => elementsRef.current[0] = el}
          >
            <Instagram className="h-12 w-12 text-sircell-green mr-4 opacity-0" />
            <h2 className="section-title text-sircell-black opacity-0">
              Siga-nos no Instagram
            </h2>
          </div>
          
          <p 
            className="section-subtitle text-sircell-gray opacity-0"
            ref={el => elementsRef.current[1] = el}
          >
            Acompanhe nosso trabalho diário, dicas de cuidados com seus equipamentos 
            e muito mais conteúdo exclusivo!
          </p>

          <div 
            className="mt-8 opacity-0"
            ref={el => elementsRef.current[2] = el}
          >
            <a
              href="https://www.instagram.com/sircell.assistech?igsh=MXFjNTg2eWoyandmNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
            >
              <Instagram className="h-6 w-6 mr-3" />
              @sircell.assistech
            </a>
          </div>
        </div>

        {/* Instagram Posts Grid - Now without images */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mockPosts.map((post, index) => (
            <div
              key={post.id}
              ref={el => elementsRef.current[3 + index] = el}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 overflow-hidden group cursor-pointer border border-sircell-lightgray"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Instagram className="h-8 w-8 text-sircell-green" />
                </div>
                
                <p className="text-sircell-gray text-sm mb-4 leading-relaxed min-h-[60px]">
                  {post.caption}
                </p>
                
                <div className="flex items-center justify-between text-sircell-gray">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 mr-1 hover:text-red-500 transition-colors cursor-pointer" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-1 hover:text-sircell-green transition-colors cursor-pointer" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </div>
                  </div>
                  <Share2 className="h-5 w-5 hover:text-sircell-green transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className="text-center opacity-0"
          ref={el => elementsRef.current[6] = el}
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

        {/* Statistics */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 opacity-0"
          ref={el => elementsRef.current[7] = el}
        >
          {[
            { number: '2.5K+', label: 'Seguidores' },
            { number: '500+', label: 'Posts' },
            { number: '1K+', label: 'Equipamentos Reparados' },
            { number: '98%', label: 'Satisfação' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-sircell-lightgray">
              <div className="text-3xl font-bold text-sircell-green mb-2">
                {stat.number}
              </div>
              <div className="text-sircell-gray font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SircellInstagram;
