
import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import ProductCard from './ProductCard';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface OptimizedCarouselProps {
  products: Array<{ src: string; alt: string }>;
  autoplay?: boolean;
  autoplayInterval?: number;
}

const OptimizedCarousel: React.FC<OptimizedCarouselProps> = ({ 
  products, 
  autoplay = false,
  autoplayInterval = 3000 
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const { targetRef, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '100px'
  });

  useEffect(() => {
    if (!api || !autoplay || !isIntersecting) {
      return;
    }

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, autoplayInterval);

    return () => clearInterval(intervalId);
  }, [api, autoplay, autoplayInterval, isIntersecting]);

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
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/90 hover:bg-white border-sircell-green/20 text-sircell-green hover:text-sircell-darkgreen" />
          <CarouselNext className="bg-white/90 hover:bg-white border-sircell-green/20 text-sircell-green hover:text-sircell-darkgreen" />
        </Carousel>
      )}
    </div>
  );
};

export default OptimizedCarousel;
