import React from 'react';
import type { platforms } from './data';

type Platform = typeof platforms[number];

interface PlatformTextProps {
  platform: Platform;
  isVisible: boolean;
}

export function PlatformText({ platform, isVisible }: PlatformTextProps) {
  return (
    <span
      className={`
        /* Absolutely position each word inside the container */
        absolute left-0 top-0

        /* Transition classes for fade + slide */
        transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}

        /* Example gradient text (optional) */
        text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600
      `}
      style={{
        // Make sure line-height matches measurement
        lineHeight: 'normal',
      }}
      aria-label={platform.platform}
    >
      {platform.text}
    </span>
  );
}
