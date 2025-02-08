import React, { useState, useEffect } from 'react';

const languages = [
  { text: 'English', lang: 'English' },
  { text: 'Español', lang: 'Spanish' },
  { text: '中文', lang: 'Chinese' },
  { text: 'Français', lang: 'French' },
  { text: 'Deutsch', lang: 'German' },
  { text: '日本語', lang: 'Japanese' },
  { text: 'Русский', lang: 'Russian' },
  { text: 'عربي', lang: 'Arabic' },
  { text: 'हिन्दी', lang: 'Hindi' },
  { text: '한국어', lang: 'Korean' },
  { text: 'Português', lang: 'Portuguese' },
  { text: 'Italiano', lang: 'Italian' }
];

export function LanguageRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setSlideDirection(prev => prev === 'up' ? 'down' : 'up');
      
      setTimeout(() => {
        setCurrentIndex(current => (current + 1) % languages.length);
        // setCurrentIndex(8);
        setIsSliding(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slideClass = isSliding
    ? slideDirection === 'up'
      ? '-translate-y-full opacity-0'
      : 'translate-y-full opacity-0'
    : 'translate-y-0 opacity-100';

  return (
    <span className="inline-block min-w-[120px] h-[1.2em] relative overflow-hidden mt-[5px] w-full">
      <span
        className={`
          absolute inset-0
          transition-all duration-300 ease-in-out
          ${slideClass}
          flex justify-center items-center
          text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600
        `}
        aria-label={languages[currentIndex].lang}
      >
        {languages[currentIndex].text}
      </span>
    </span>
  );
}