import React from 'react';
import { Key, Fingerprint, Shield, Github } from 'lucide-react';

export function Testimonials() {
  const securityFeatures = [
    {
      icon: <Key className="w-8 h-8" />,
      title: "Non-Custodial Control",
      description: "Your keys, your crypto. We never hold or have access to your private keys, ensuring you maintain complete control of your assets at all times."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "ERC-4337 Standard",
      description: "Built on the latest account abstraction standard, providing enhanced security and flexibility for managing your digital assets."
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Biometric Authentication",
      description: "Secure your wallet with cutting-edge biometric verification, and use it as a recovery method if you ever lose access to your account."
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "Open Source Security",
      description: "Our entire codebase is open source and auditable. We believe in transparency and community-driven security improvements."
    }
  ];

  return (
    <section id="security" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Enterprise-Grade Security</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your security is our top priority. We've implemented multiple layers of protection while keeping you in complete control.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}