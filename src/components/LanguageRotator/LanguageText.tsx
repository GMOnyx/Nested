import React from 'react';
import type { languages } from './data';

type Language = typeof languages[number];

interface LanguageTextProps {
  language: Language;
  isVisible: boolean;
  direction: 'up' | 'down';
}

export function LanguageText({ language, isVisible, direction }: LanguageTextProps) {
  const translateY = direction === 'up' ? '100%' : '-100%';
  
  return (
    <span
      className={`absolute left-0 w-full transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600`}
      style={{
        transform: `translateY(${isVisible ? '0' : translateY})`,
        opacity: isVisible ? 1 : 0
      }}
      aria-label={language.lang}
    >
      {language.text}
    </span>
  );
}