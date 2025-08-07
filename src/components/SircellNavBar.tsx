
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Smartphone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const SircellNavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', id: 'inicio' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Localização', id: 'localizacao' },
    { name: 'Contato', id: 'contato' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "py-2 sm:py-3 bg-white/95 backdrop-blur-md shadow-lg" 
          : "py-3 sm:py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="#inicio" 
            className="flex items-center space-x-3"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('inicio');
            }}
          >
            <img 
              src="/lovable-uploads/b5b6b1a3-79c2-49f0-83c4-fca215c4a8d7.png" 
              alt="Sircell" 
              className="h-10 w-auto sm:h-12"
            />
            <div className="hidden sm:block">
              <div className="text-sircell-black font-bold text-lg">Sircell</div>
              <div className="text-sircell-green text-xs font-medium">Assistência Técnica</div>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sircell-black hover:text-sircell-green transition-colors duration-300 text-sm xl:text-base font-medium relative group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sircell-green transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Contact Button Desktop */}
        <div className="hidden lg:block">
          <a 
            href="https://wa.me/5554981014238?text=Olá!%20Gostaria%20de%20mais%20informações." 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sircell-green hover:bg-sircell-darkgreen text-white px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <button 
              className="lg:hidden text-sircell-black p-2 rounded-md hover:bg-sircell-lightgray/50 transition-colors" 
              aria-label="Open menu"
            >
              <Menu size={20} className="sm:w-6 sm:h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[90%] sm:w-[85%] p-0 bg-gradient-to-br from-white to-sircell-lightgreen border-l-4 border-sircell-green">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-sircell-lightgreen">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/b5b6b1a3-79c2-49f0-83c4-fca215c4a8d7.png" 
                    alt="Sircell" 
                    className="h-8 w-auto"
                  />
                  <div>
                    <div className="text-sircell-black font-bold">Sircell</div>
                    <div className="text-sircell-green text-xs font-medium">Assistência Técnica</div>
                  </div>
                </div>
                <SheetClose className="p-2 rounded-full hover:bg-sircell-lightgreen/70 transition-all">
                  <X className="text-sircell-black" size={18} />
                </SheetClose>
              </div>
              <nav className="flex flex-col items-stretch justify-start flex-1 mt-4 sm:mt-8">
                {navLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={cn(
                      "text-sircell-black text-base sm:text-lg font-medium hover:bg-sircell-lightgreen/70 transition-all w-full text-center py-4 sm:py-6 px-4 flex items-center justify-center",
                      "relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-sircell-green after:transition-all after:duration-300 hover:after:w-1/3"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                      setTimeout(() => scrollToSection(link.id), 100);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* WhatsApp Button Mobile */}
                <div className="p-4 mt-4">
                  <a 
                    href="https://wa.me/5554981014238?text=Olá!%20Gostaria%20de%20mais%20informações." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sircell-green hover:bg-sircell-darkgreen text-white w-full py-3 rounded-lg font-medium text-center block transition-all duration-300"
                  >
                    Contato via WhatsApp
                  </a>
                </div>
              </nav>
              <div className="p-4 sm:p-6 border-t border-sircell-lightgreen mt-auto">
                <div className="text-sircell-gray text-xs sm:text-sm text-center">
                  © 2024 Sircell Assistência Técnica - Todos os direitos reservados
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default SircellNavBar;
