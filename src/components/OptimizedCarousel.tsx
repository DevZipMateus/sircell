
import React, { useEffect, useState, memo, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import ProductCardCarousel from './ProductCardCarousel';
import { useGlobalIntersectionObserver } from '@/hooks/useGlobalIntersectionObserver';
import { getOptimizedImageUrl, preloadImage } from '@/utils/imageUtils';

interface OptimizedCarouselProps {
  products: Array<{ src: string; alt: string }>;
  autoplay?: boolean;
  autoplayInterval?: number;
}

const OptimizedCarousel: React.FC<OptimizedCarouselProps> = memo(({ 
  products, 
  autoplay = false,
  autoplayInterval = 3000 
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  
  const { targetRef, isIntersecting } = useGlobalIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '100px'
  });

  // Preload next 2 images when current image loads
  const handleImageLoad = useCallback((productIndex: number) => {
    const nextIndices = [productIndex + 1, productIndex + 2].filter(i => i < products.length);
    
    nextIndices.forEach(index => {
      const product = products[index];
      if (product && !loadedImages.has(product.src)) {
        const optimizedSrc = getOptimizedImageUrl(product.src, {
          width: 400,
          height: 400,
          quality: 85,
          format: 'webp'
        });
        
        preloadImage(optimizedSrc).then(() => {
          setLoadedImages(prev => new Set([...prev, product.src]));
        }).catch(() => {
          console.log(`Failed to preload image: ${product.src}`);
        });
      }
    });
  }, [products, loadedImages]);

  // Track current slide for preloading
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  // Autoplay functionality
  useEffect(() => {
    if (!api || !autoplay || !isIntersecting) {
      return;
    }

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, autoplayInterval);

    return () => clearInterval(intervalId);
  }, [api, autoplay, autoplayInterval, isIntersecting]);

  // Preload first few images when carousel becomes visible
  useEffect(() => {
    if (!isIntersecting) return;

    // Preload first 3 images immediately
    const initialImages = products.slice(0, 3);
    initialImages.forEach((product, index) => {
      const optimizedSrc = getOptimizedImageUrl(product.src, {
        width: 400,
        height: 400,
        quality: 85,
        format: 'webp'
      });
      
      preloadImage(optimizedSrc).then(() => {
        setLoadedImages(prev => new Set([...prev, product.src]));
      }).catch(() => {
        console.log(`Failed to preload initial image: ${product.src}`);
      });
    });
  }, [isIntersecting, products]);

  return (
    <div ref={targetRef} className="w-full">
      {isIntersecting && (
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <ProductCardCarousel 
                  product={product} 
                  priority={index < 3}
                  onImageLoad={() => handleImageLoad(index)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/90 hover:bg-white border-sircell-green/20 text-sircell-green hover:text-sircell-darkgreen" />
          <CarouselNext className="bg-white/90 hover:bg-white border-sircell-green/20 text-sircell-green hover:text-sircell-darkgreen" />
        </Carousel>
      )}
    </div>
  );
});

OptimizedCarousel.displayName = 'OptimizedCarousel';

export default OptimizedCarousel;
