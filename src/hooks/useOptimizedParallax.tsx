
import { useEffect, useState, useCallback, useRef } from 'react';

export const useOptimizedParallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const rafId = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  const updateScrollY = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Only update if there's a significant change (reduces unnecessary re-renders)
    if (Math.abs(currentScrollY - lastScrollY.current) > 2) {
      setScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;
    }
    
    rafId.current = null;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Use RAF to throttle scroll updates aggressively
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(updateScrollY);
      }
    };

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { 
      passive: true,
      capture: false 
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [updateScrollY]);

  // Memoized function to reduce re-creation
  const getParallaxStyle = useCallback((speed: number = 0.5) => ({
    transform: `translate3d(0, ${scrollY * speed}px, 0)`,
  }), [scrollY]);

  return {
    scrollY,
    getParallaxStyle,
  };
};
