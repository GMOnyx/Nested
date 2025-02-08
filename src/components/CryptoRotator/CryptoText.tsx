import React from 'react';
import type { cryptocurrencies } from './data';

type Cryptocurrency = typeof cryptocurrencies[number];

interface CryptoTextProps {
  crypto: Cryptocurrency;
  isVisible: boolean;
  direction: 'up' | 'down';
}

export function CryptoText({ crypto, isVisible, direction }: CryptoTextProps) {
  const translateY = direction === 'up' ? '100%' : '-100%';
  
  return (
    <span
      className={`absolute left-0 w-max transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500`}
      style={{
        transform: `translateY(${isVisible ? '0' : translateY})`,
        opacity: isVisible ? 1 : 0
      }}
      aria-label={crypto.symbol}
    >
      {crypto.text}
    </span>
  );
}