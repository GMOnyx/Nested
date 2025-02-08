import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PlatformRotator } from './PlatformRotator';

export function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            The World's First Non-Custodial AI Wallet Nested in
            <div className="inline-block translate-y-[0.2em]">
              <PlatformRotator />
            </div>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A crypto wallet with an AI assistant that guides you through everything, seamlessly nested within your favorite social platforms. Send securely to anyone with just their handle—no custody, no complexity.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://discord.gg/RUYBxxkmmk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-10 py-4 text-lg rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 127.14 96.36">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
              </svg>
              <span>Chat on Discord</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://insigh.to/b/nested-wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 px-8 py-4 text-lg rounded-lg hover:border-gray-400 transition-colors"
            >
              Give Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}