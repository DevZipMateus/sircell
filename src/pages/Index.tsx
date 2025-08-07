
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import AboutUs from '@/components/AboutUs';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ClickSpark from '@/components/ClickSpark';
import { useParallax } from '@/hooks/useParallax';

const Index = () => {
  const { getParallaxStyle } = useParallax();

  useEffect(() => {
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
      sparkColor="#f97316"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={6}
      duration={500}
      easing="ease-out"
      extraScale={1.2}
    >
      <main className="min-h-screen flex flex-col antialiased overflow-x-hidden relative">
        {/* Floating elements with JavaScript parallax */}
        <div 
          className="fixed top-20 left-10 w-3 h-3 bg-white/20 rounded-full animate-float -z-10"
          style={getParallaxStyle(0.1)}
        ></div>
        <div 
          className="fixed top-32 right-16 w-2 h-2 bg-accent/30 rounded-full animate-float animation-delay-500 -z-10"
          style={getParallaxStyle(0.15)}
        ></div>
        <div 
          className="fixed bottom-32 left-20 w-4 h-4 bg-tech-green/20 rounded-full animate-float animation-delay-300 -z-10"
          style={getParallaxStyle(0.25)}
        ></div>
        <div 
          className="fixed bottom-20 right-12 w-2 h-2 bg-white/30 rounded-full animate-float animation-delay-700 -z-10"
          style={getParallaxStyle(0.2)}
        ></div>
        
        <NavBar />
        <Hero />
        <div className="space-y-0 relative z-10">
          <div className="section-bg-semi">
            <Services />
          </div>
          <div className="section-bg-alt">
            <HowItWorks />
          </div>
          <div className="section-bg-semi">
            <AboutUs />
          </div>
          <div className="section-bg-alt">
            <Reviews />
          </div>
          <div className="section-bg-semi">
            <FAQ />
          </div>
          <div className="section-bg-alt">
            <Contact />
          </div>
        </div>
        <Footer />
        <WhatsAppButton />
      </main>
    </ClickSpark>
  );
};

export default Index;
