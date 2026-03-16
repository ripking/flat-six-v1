'use client';

import Image from 'next/image';
import content from '../../content.json';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="max-w-6xl mx-auto glass-nav border border-primary/15 rounded-xl px-6 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3 text-primary">
          <Image 
            src={content.images.logo} 
            alt="Flat Six Media Logo" 
            width={48} 
            height={48} 
            className="h-12 w-auto object-contain"
          />
          <h2 className="text-xl font-black tracking-tight">FLAT SIX MEDIA</h2>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {content.navigation.map((nav) => (
            <a 
              key={nav.label}
              className="text-sm font-bold text-primary hover:opacity-70 transition-opacity" 
              href={nav.href}
            >
              {nav.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="bg-primary text-background-light px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all shadow-md">
          Contact Us
        </a>
      </div>
    </nav>
  );
}
