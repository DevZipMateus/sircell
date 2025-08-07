
import React, { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  
  useEffect(() => {
    // Slight delay to show button with animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    // Set up pulsing animation interval
    const pulseInterval = setInterval(() => {
      setIsPulsing(prev => !prev);
    }, 4000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(pulseInterval);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5555999887766?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20TechHelp%20Soluções.', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-xl transition-all duration-500 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isPulsing ? 'animate-bounce shadow-tech-green/50 shadow-2xl scale-110' : ''}
        hover:scale-110 hover:shadow-2xl bg-tech-green hover:bg-tech-green/90`}
      style={{
        boxShadow: isPulsing ? '0 0 30px rgba(72, 187, 120, 0.7)' : '0 10px 25px rgba(0,0,0,0.2)',
      }}
      aria-label="Contate-nos pelo WhatsApp"
    >
      <div className={`absolute -inset-3 bg-tech-green/30 rounded-full ${isPulsing ? 'animate-ping' : 'opacity-0'}`}></div>
      <img 
        src="/lovable-uploads/90d99fc5-2fe3-4a3b-a15c-64bc0c7f8cef.png" 
        alt="WhatsApp" 
        className="w-10 h-10 relative z-10"
      />
      <span className="sr-only">WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
