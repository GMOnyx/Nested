import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Video } from './components/Video';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Video />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default App;