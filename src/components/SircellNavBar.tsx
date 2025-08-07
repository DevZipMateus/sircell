
import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SircellNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio', route: '/' },
    { label: 'Sobre', href: '#sobre', route: '/' },
    { label: 'Serviços', href: '#services', route: '/' },
    { label: 'Produtos', href: '/produtos', route: '/produtos', isRoute: true },
    { label: 'Instagram', href: '#instagram', route: '/' },
    { label: 'Localização', href: '#localizacao', route: '/' },
    { label: 'Contato', href: '#contato', route: '/' },
  ];

  const scrollToSection = (href: string, route: string, isRoute?: boolean) => {
    if (isRoute) {
      // Se é uma rota, não precisa fazer scroll, o React Router cuida da navegação
      setIsMenuOpen(false);
      return;
    }

    if (location.pathname !== route) {
      // Se não estamos na rota correta, navegue para ela primeiro
      window.location.href = route + href;
    } else {
      // Se já estamos na rota correta, faça o scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-sircell-green/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link 
              to="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/b5b6b1a3-79c2-49f0-83c4-fca215c4a8d7.png" 
                alt="Sircell Logo" 
                className="h-10 sm:h-12 w-auto"
              />
              <span className={`font-bold text-xl sm:text-2xl transition-colors ${
                isScrolled ? 'text-sircell-black' : 'text-sircell-black'
              }`}>
                Sircell
              </span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-sircell-green ${
                    isScrolled ? 'text-sircell-black' : 'text-sircell-black'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href, item.route)}
                  className={`font-medium transition-colors hover:text-sircell-green ${
                    isScrolled ? 'text-sircell-black' : 'text-sircell-black'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
            <a 
              href="https://wa.me/5554981014238?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20reparo%20do%20meu%20equipamento." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sircell-green hover:bg-sircell-darkgreen text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp
            </a>
          </div>

          {/* Menu Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden transition-colors ${
              isScrolled ? 'text-sircell-black' : 'text-sircell-black'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-sircell-green/10 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block w-full text-left text-sircell-black hover:text-sircell-green font-medium py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href, item.route)}
                    className="block w-full text-left text-sircell-black hover:text-sircell-green font-medium py-2 transition-colors"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <a 
                href="https://wa.me/5554981014238?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20reparo%20do%20meu%20equipamento." 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-sircell-green hover:bg-sircell-darkgreen text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SircellNavBar;
