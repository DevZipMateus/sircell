import React, { useEffect } from 'react';
import SircellNavBar from '@/components/SircellNavBar';
import SircellHero from '@/components/SircellHero';
import SircellAbout from '@/components/SircellAbout';
import SircellServices from '@/components/SircellServices';
import SircellInstagram from '@/components/SircellInstagram';
import SircellLocation from '@/components/SircellLocation';
import Contact from '@/components/Contact';
import SircellFooter from '@/components/SircellFooter';
import SircellWhatsApp from '@/components/SircellWhatsApp';
import ClickSpark from '@/components/ClickSpark';
import { useParallax } from '@/hooks/useParallax';

const Index = () => {
  const { getParallaxStyle } = useParallax();

  useEffect(() => {
    // Meta tags para SEO
    document.title = "Sircell Assistência Técnica - Celulares, Tablets e Computadores | RS";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Sircell Assistência Técnica especializada em celulares, tablets e computadores. Laboratório próprio, reparo rápido e preços justos. Marechal Floriano 1001, RS.');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      meta.setAttribute('content', 'Sircell Assistência Técnica especializada em celulares, tablets e computadores. Laboratório próprio, reparo rápido e preços justos. Marechal Floriano 1001, RS.');
      document.head.appendChild(meta);
    }

    // Meta keywords
    const metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'assistência técnica, celular, tablet, computador, reparo, Sircell, RS, Marechal Floriano, laboratório');
    document.head.appendChild(metaKeywords);

    // Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Sircell Assistência Técnica - Especialistas em Eletrônicos');
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Teu celular pronto antes de você sentir falta dele! Assistência técnica com laboratório próprio e garantia.');
    document.head.appendChild(ogDescription);

    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', '/lovable-uploads/b5b6b1a3-79c2-49f0-83c4-fca215c4a8d7.png');
    document.head.appendChild(ogImage);

    // Twitter Card
    const twitterCard = document.createElement('meta');
    twitterCard.setAttribute('name', 'twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');
    document.head.appendChild(twitterCard);

    // Ensure smooth scroll behavior works properly
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Initial scroll if URL has hash
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <ClickSpark
      sparkColor="#00b300"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={6}
      duration={500}
      easing="ease-out"
      extraScale={1.2}
    >
      <main className="min-h-screen flex flex-col antialiased overflow-x-hidden relative bg-white">
        {/* Floating elements with JavaScript parallax */}
        <div 
          className="fixed top-20 left-10 w-3 h-3 bg-sircell-green/20 rounded-full animate-float -z-10"
          style={getParallaxStyle(0.1)}
        ></div>
        <div 
          className="fixed top-32 right-16 w-2 h-2 bg-sircell-black/30 rounded-full animate-float animation-delay-500 -z-10"
          style={getParallaxStyle(0.15)}
        ></div>
        <div 
          className="fixed bottom-32 left-20 w-4 h-4 bg-sircell-green/20 rounded-full animate-float animation-delay-300 -z-10"
          style={getParallaxStyle(0.25)}
        ></div>
        <div 
          className="fixed bottom-20 right-12 w-2 h-2 bg-sircell-black/30 rounded-full animate-float animation-delay-700 -z-10"
          style={getParallaxStyle(0.2)}
        ></div>
        
        <SircellNavBar />
        <SircellHero />
        <div className="space-y-0 relative z-10">
          <SircellAbout />
          <SircellServices />
          <SircellInstagram />
          <SircellLocation />
          <div id="contato">
            <Contact />
          </div>
        </div>
        <SircellFooter />
        <SircellWhatsApp />
      </main>
    </ClickSpark>
  );
};

export default Index;
