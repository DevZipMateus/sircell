
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';

const SircellFooter = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-sircell-black to-sircell-gray text-white pt-16 pb-8 relative">
      {/* Elemento decorativo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-sircell-green"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/b5b6b1a3-79c2-49f0-83c4-fca215c4a8d7.png" 
                alt="Sircell" 
                className="h-12 w-auto filter brightness-0 invert"
              />
              <div>
                <h3 className="font-bold text-xl text-white">Sircell</h3>
                <p className="text-sircell-green text-sm">Assistência Técnica</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm leading-relaxed">
              Empresa nova no mercado trabalhando com seriedade, qualidade e agilidade. 
              Temos laboratório próprio e oferecemos soluções para todos os bolsos.
            </p>
            <div className="bg-sircell-green/20 rounded-lg p-4 border-l-4 border-sircell-green">
              <p className="text-sircell-green font-semibold text-lg">
                "Teu celular pronto antes de você sentir falta dele!"
              </p>
            </div>
          </div>
          
          {/* Links de navegação */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-sircell-green">
              Navegação
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#inicio" 
                  className="text-gray-300 hover:text-sircell-green transition-colors duration-300 cursor-pointer"
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
                  className="text-gray-300 hover:text-sircell-green transition-colors duration-300 cursor-pointer"
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
                  className="text-gray-300 hover:text-sircell-green transition-colors duration-300 cursor-pointer"
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
                  className="text-gray-300 hover:text-sircell-green transition-colors duration-300 cursor-pointer"
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
                  className="text-gray-300 hover:text-sircell-green transition-colors duration-300 cursor-pointer"
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
          
          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-sircell-green">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sircell-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Marechal Floriano 1001</p>
                  <p className="text-gray-300 text-sm">Centro - RS</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sircell-green" />
                <a href="tel:5554981014238" className="text-gray-300 hover:text-sircell-green transition-colors">
                  (54) 98101-4238
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sircell-green" />
                <a href="mailto:sircell27@gmail.com" className="text-gray-300 hover:text-sircell-green transition-colors">
                  sircell27@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-sircell-green flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>Seg-Sex: 08:00-18:00</p>
                  <p>Sáb: 08:00-12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redes sociais e direitos autorais */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Sircell Assistência Técnica. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Siga-nos:</span>
              <a 
                href="https://www.instagram.com/sircell.assistech?igsh=MXFjNTg2eWoyandmNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sircell-green transition-colors duration-300"
                aria-label="Instagram da Sircell"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/5554981014238"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sircell-green hover:bg-sircell-darkgreen text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SircellFooter;
