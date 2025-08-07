
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const SircellWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  
  useEffect(() => {
    // Delay para mostrar o botão com animação
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    // Configurar animação de pulsação
    const pulseInterval = setInterval(() => {
      setIsPulsing(prev => !prev);
    }, 4000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(pulseInterval);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5554981014238?text=Olá! Gostaria de mais informações sobre os serviços da Sircell Assistência Técnica.', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className={`flex items-center justify-center w-16 h-16 rounded-full shadow-xl transition-all duration-500 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          ${isPulsing ? 'animate-bounce shadow-sircell-green/50 shadow-2xl scale-110' : ''}
          hover:scale-110 hover:shadow-2xl bg-sircell-green hover:bg-sircell-darkgreen group`}
        style={{
          boxShadow: isPulsing ? '0 0 30px rgba(0, 128, 0, 0.7)' : '0 10px 25px rgba(0,0,0,0.2)',
        }}
        aria-label="Contate-nos pelo WhatsApp"
      >
        {/* Efeito de onda */}
        <div className={`absolute -inset-3 bg-sircell-green/30 rounded-full ${isPulsing ? 'animate-ping' : 'opacity-0'}`}></div>
        
        {/* Ícone do WhatsApp */}
        <MessageCircle 
          className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" 
        />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-sircell-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Fale conosco!
          <div className="absolute top-1/2 -right-1 w-2 h-2 bg-sircell-black rotate-45 transform -translate-y-1/2"></div>
        </div>
      </button>
    </div>
  );
};

export default SircellWhatsApp;
