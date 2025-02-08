import React from 'react';

export function Logo() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a 
      href="#" 
      onClick={scrollToTop}
      className="flex items-center space-x-2 cursor-pointer"
    >
      <div className="w-8 h-8 bg-black flex items-center justify-center">
        <div className="w-4 h-4 bg-white flex items-center justify-center">
          <div className="w-2 h-2 bg-black"></div>
        </div>
      </div>
      <span className="text-xl font-bold">NESTED</span>
    </a>
  );
}