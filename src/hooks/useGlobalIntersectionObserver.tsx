
import { useEffect, useRef, useState, useCallback } from 'react';

interface ObserverEntry {
  id: string;
  element: Element;
  callback: (isIntersecting: boolean) => void;
  options?: IntersectionObserverInit;
}

class GlobalIntersectionObserver {
  private static instance: GlobalIntersectionObserver;
  private observers: Map<string, IntersectionObserver> = new Map();
  private entries: Map<string, ObserverEntry> = new Map();

  static getInstance(): GlobalIntersectionObserver {
    if (!GlobalIntersectionObserver.instance) {
      GlobalIntersectionObserver.instance = new GlobalIntersectionObserver();
    }
    return GlobalIntersectionObserver.instance;
  }

  private getObserverKey(options?: IntersectionObserverInit): string {
    return JSON.stringify({
      threshold: options?.threshold ?? 0.1,
      rootMargin: options?.rootMargin ?? '0px',
    });
  }

  observe(
    id: string,
    element: Element,
    callback: (isIntersecting: boolean) => void,
    options?: IntersectionObserverInit
  ) {
    const observerKey = this.getObserverKey(options);
    
    if (!this.observers.has(observerKey)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const entryId = entry.target.getAttribute('data-observer-id');
            if (entryId) {
              const entryData = this.entries.get(entryId);
              if (entryData) {
                entryData.callback(entry.isIntersecting);
              }
            }
          });
        },
        {
          threshold: options?.threshold ?? 0.1,
          rootMargin: options?.rootMargin ?? '0px',
          ...options,
        }
      );
      this.observers.set(observerKey, observer);
    }

    const observer = this.observers.get(observerKey)!;
    element.setAttribute('data-observer-id', id);
    
    this.entries.set(id, { id, element, callback, options });
    observer.observe(element);
  }

  unobserve(id: string) {
    const entry = this.entries.get(id);
    if (entry) {
      const observerKey = this.getObserverKey(entry.options);
      const observer = this.observers.get(observerKey);
      if (observer) {
        observer.unobserve(entry.element);
      }
      this.entries.delete(id);
    }
  }

  disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.entries.clear();
  }
}

interface UseGlobalIntersectionObserverOptions extends IntersectionObserverInit {}

export const useGlobalIntersectionObserver = <T extends HTMLElement = HTMLElement>(
  options: UseGlobalIntersectionObserverOptions = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<T>(null);
  const idRef = useRef<string>();

  const handleIntersection = useCallback((intersecting: boolean) => {
    setIsIntersecting(intersecting);
  }, []);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const globalObserver = GlobalIntersectionObserver.getInstance();
    const id = `observer-${Date.now()}-${Math.random()}`;
    idRef.current = id;

    globalObserver.observe(id, element, handleIntersection, options);

    return () => {
      if (idRef.current) {
        globalObserver.unobserve(idRef.current);
      }
    };
  }, [handleIntersection, options.threshold, options.rootMargin]);

  return { targetRef, isIntersecting };
};
