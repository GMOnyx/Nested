import React, { useEffect, useState, useRef } from 'react';
import { platforms } from './data';
import { PlatformText } from './PlatformText';

export function PlatformRotator() {
  // Index of the currently displayed platform
  const [currentIndex, setCurrentIndex] = useState(0);
  // Visibility state for transitions
  const [isVisible, setIsVisible] = useState(true);

  // A hidden ref to measure the current word
  const measureRef = useRef<HTMLSpanElement>(null);
  // The container where we apply dynamic width
  const containerRef = useRef<HTMLDivElement>(null);

  // Every time currentIndex changes, measure that word and size the container
  useEffect(() => {
    if (!measureRef.current || !containerRef.current) return;

    // Temporarily set hidden span to the current text
    const currentPlatform = platforms[currentIndex];
    measureRef.current.textContent = currentPlatform.text;

    const rect = measureRef.current.getBoundingClientRect();
    const textWidth = rect.width;
    const textHeight = rect.height;

    // Clear it out again
    measureRef.current.textContent = '';

    // Example: add 15% of the text width as “dynamic spacing”
    const extraPaddingFactor = 0.15;
    const newWidth = textWidth + textWidth * extraPaddingFactor;

    // Apply the new container size
    containerRef.current.style.width = `${newWidth}px`;
    containerRef.current.style.height = `${textHeight}px`;
  }, [currentIndex]);

  // Rotate every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);

      // Wait for the fade-out transition
      setTimeout(() => {
        // Move to next platform
        setCurrentIndex((prev) => (prev + 1) % platforms.length);
        setIsVisible(true);
      }, 300); // matches .duration-300
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // The platform text to display
  const currentPlatform = platforms[currentIndex];

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      {/* 
        Hidden measurement span; must match the 
        same font/line-height as the displayed text 
      */}
      <span
        ref={measureRef}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          whiteSpace: 'nowrap',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          lineHeight: 'normal',
        }}
      />

      {/* 
        Our container that gets resized each time 
        a new word appears
      */}
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        style={{
          // inline-block or inline-flex so it fits in a sentence
          display: 'inline-block',

          // Start with minimal width/height
          width: 'auto',
          height: 'auto',
        }}
      >
        <PlatformText platform={currentPlatform} isVisible={isVisible} />
      </div>
    </span>
  );
}
