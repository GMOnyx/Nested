import React from 'react';
import { Network, ArrowLeftRight, Send } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Cross-Chain Freedom",
      description: "Send and receive across multiple blockchains seamlessly - from Ethereum to Solana, Bitcoin to Polygon, and beyond."
    },
    {
      icon: <ArrowLeftRight className="w-6 h-6" />,
      title: "Instant Token Swaps",
      description: "Swap tokens directly through Discord using Uniswap and 1inch integration, always getting the best rates across DEX aggregators."
    },
    {
      icon: (
    <svg viewBox="0 0 824 618" className="w-16 h-16">  // Increased from w-8 h-8 to w-16 h-16
      <path
        fill="currentColor"
        d="M318.7 250.7c51.5-50.3 135.1-50.3 186.6 0l6.2 6.1c2.6 2.5 2.6 6.6 0 9.1l-21.2 20.7c-1.3 1.3-3.4 1.3-4.7 0l-8.5-8.3c-36-35.1-94.2-35.1-130.2 0l-9.1 8.9c-1.3 1.3-3.4 1.3-4.7 0l-21.2-20.7c-2.6-2.5-2.6-6.6 0-9.1l6.8-6.7zM549.2 293.5l18.9 18.4c2.6 2.5 2.6 6.6 0 9.1l-85.1 83.1c-2.6 2.5-6.8 2.5-9.3 0l-60.4-59c-0.6-0.6-1.7-0.6-2.3 0l-60.4 59c-2.6 2.5-6.8 2.5-9.3 0l-85.4-83.1c-2.6-2.5-2.6-6.6 0-9.1l18.9-18.4c2.6-2.5 6.8-2.5 9.3 0l60.4 59c0.6 0.6 1.7 0.6 2.3 0l60.4-59c2.6-2.5 6.8-2.5 9.3 0l60.4 59c0.6 0.6 1.7 0.6 2.3 0l60.4-59c2.6-2.5 6.8-2.5 9.3 0z"
      />
    </svg>
      ),
      title: "A Universe of Web3",
      description: "From swapping tokens using Uniswap and 1inch to liquid staking with Lido, connect to any Web3 application directly through your chat app using WalletConnect."
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "Username Transfers",
      description: "Send crypto to anyone using just their username - no complicated wallet addresses needed."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why use Nested?</h2>
          <p className="text-xl text-gray-600">The future of social crypto management</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}