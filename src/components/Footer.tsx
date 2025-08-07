
import React from 'react';
import { cn } from "@/lib/utils";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-blue/95 backdrop-blur-md text-white pt-14 pb-8 relative z-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">
              Tech<span className="text-accent">Help</span>
            </h3>
            <p className="text-white/80 mb-4 max-w-sm">
              Transformamos problemas técnicos em soluções eficazes. Deixe-nos cuidar dos seus eletrônicos enquanto você foca no que realmente importa.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('how-it-works');
                  }}
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Contato
            </h3>
            <address className="not-italic text-white/80 space-y-2">
              <p>Rua da Tecnologia, 123 - Centro</p>
              <p>São Paulo - SP, 01234-567</p>
              <p>+55 (11) 99988-7766</p>
              <p>contato@techhelp.com.br</p>
            </address>
          </div>
        </div>
        
        <hr className="border-white/20 mb-8" />
        
        <div className="text-center text-white/80 text-sm">
          <p>&copy; {currentYear} TechHelp Soluções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
