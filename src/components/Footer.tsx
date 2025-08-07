
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
    <footer className="bg-sircell-black/95 backdrop-blur-md text-white pt-14 pb-8 relative z-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/b5b6b1a3-79c2-49f0-83c4-fca215c4a8d7.png" 
                alt="Sircell" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="font-bold text-xl text-white">
                  Sircell
                </h3>
                <p className="text-sircell-green text-sm font-medium">Assistência Técnica</p>
              </div>
            </div>
            <p className="text-white/80 mb-4 max-w-sm">
              Especialistas em celulares, tablets e computadores. Laboratório próprio, qualidade garantida e atendimento ágil.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#inicio" 
                  className="text-white/80 hover:text-sircell-green transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('inicio');
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="text-white/80 hover:text-sircell-green transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('sobre');
                  }}
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="text-white/80 hover:text-sircell-green transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('servicos');
                  }}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#localizacao" 
                  className="text-white/80 hover:text-sircell-green transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('localizacao');
                  }}
                >
                  Localização
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-white/80 hover:text-sircell-green transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contato');
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">
              Contato
            </h3>
            <address className="not-italic text-white/80 space-y-2">
              <p>Marechal Floriano, 1001 - Centro</p>
              <p>Rio Grande do Sul - RS</p>
              <p>(54) 98101-4238</p>
              <p>sircell27@gmail.com</p>
            </address>
          </div>
        </div>
        
        <hr className="border-white/20 mb-8" />
        
        <div className="text-center text-white/80 text-sm">
          <p>&copy; {currentYear} Sircell Assistência Técnica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
