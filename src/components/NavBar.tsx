
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Settings } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const NavBar = () => {
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
    { name: 'Início', id: 'home' },
    { name: 'Serviços', id: 'services' },
    { name: 'Como Funciona', id: 'how-it-works' },
    { name: 'Sobre Nós', id: 'about' },
    { name: 'Avaliações', id: 'reviews' },
    { name: 'Contato', id: 'contact' },
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
            href="#home" 
            className="flex items-center space-x-2 text-tech-blue font-display font-bold text-lg sm:text-xl lg:text-2xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <Settings className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-red-600" />
            <span className="hidden sm:inline">TechHelp <span className="text-red-600">Soluções</span></span>
            <span className="sm:hidden">TechHelp</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-tech-blue hover:text-red-600 transition-colors duration-300 text-sm xl:text-base font-medium relative group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Navigation with Sheet component */}
        <Sheet>
          <SheetTrigger asChild>
            <button 
              className="lg:hidden text-tech-blue p-2 rounded-md hover:bg-tech-lightgray/50 transition-colors" 
              aria-label="Open menu"
            >
              <Menu size={20} className="sm:w-6 sm:h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[90%] sm:w-[85%] p-0 bg-gradient-to-br from-white to-tech-lightgray border-l-4 border-red-600">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-tech-lightgray">
                <div className="flex items-center space-x-2 font-display font-bold text-lg sm:text-xl text-tech-blue">
                  <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                  <span>TechHelp <span className="text-red-600">Soluções</span></span>
                </div>
                <SheetClose className="p-2 rounded-full hover:bg-tech-lightgray/70 transition-all">
                  <X className="text-tech-blue" size={18} />
                </SheetClose>
              </div>
              <nav className="flex flex-col items-stretch justify-start flex-1 mt-4 sm:mt-8">
                {navLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={cn(
                      "text-tech-blue text-base sm:text-lg font-medium hover:bg-tech-lightgray/70 transition-all w-full text-center py-4 sm:py-6 px-4 flex items-center justify-center",
                      "relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-1/3"
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
              </nav>
              <div className="p-4 sm:p-6 border-t border-tech-lightgray mt-auto">
                <div className="text-tech-gray text-xs sm:text-sm text-center">
                  © 2024 TechHelp Soluções - Todos os direitos reservados
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavBar;
