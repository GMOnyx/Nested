import React, { useState, useEffect, useRef } from 'react';
import { cryptocurrencies } from './data';
import { CryptoText } from './CryptoText';

export function CryptoRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [isVisible, setIsVisible] = useState(true);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const maxWidth = Math.max(
        ...cryptocurrencies.map(crypto => {
          const span = document.createElement('span');
          span.style.visibility = 'hidden';
          span.style.position = 'absolute';
          span.style.fontSize = window.getComputedStyle(containerRef.current!).fontSize;
          span.style.fontWeight = window.getComputedStyle(containerRef.current!).fontWeight;
          span.innerText = crypto.text;
          document.body.appendChild(span);
          const width = span.getBoundingClientRect().width;
          document.body.removeChild(span);
          return width;
        })
      );
      setWidth(maxWidth);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setDirection(prev => prev === 'up' ? 'down' : 'up');
      
      setTimeout(() => {
        setCurrentIndex(current => (current + 1) % cryptocurrencies.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-[1.2em] overflow-hidden inline-block"
      style={{ width: width ? `${width}px` : 'auto' }}
    >
      <CryptoText
        crypto={cryptocurrencies[currentIndex]}
        isVisible={isVisible}
        direction={direction}
      />
    </div>
  );
}