import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  const handleCreateWalletClick = () => {
    window.open('https://discord.gg/RUYBxxkmmk', '_blank');
  };

  const handleContactSalesClick = () => {
    window.open('https://wa.me/971589040047', '_blank');
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
         Be part of a growing community, experiencing full self-custody right within their social platforms.
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleCreateWalletClick}
            className="bg-white text-black px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 127.14 96.36">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
            </svg>
            <span>Chat on Discord</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={handleContactSalesClick}
            className="border border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            Talk to the Founders
          </button>
        </div>
      </div>
    </section>
  );
}