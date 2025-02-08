import React, { useState, useEffect } from 'react';
import { languages } from './data';
import { LanguageText } from './LanguageText';

export function LanguageRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setDirection(prev => prev === 'up' ? 'down' : 'up');
      
      setTimeout(() => {
        setCurrentIndex(current => (current + 1) % languages.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[1.2em] min-w-[120px] overflow-hidden inline-block">
      <LanguageText
        language={languages[currentIndex]}
        isVisible={isVisible}
        direction={direction}
      />
    </div>
  );
}