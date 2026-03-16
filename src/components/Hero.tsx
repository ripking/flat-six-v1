'use client';

import Image from 'next/image';
import content from '../../content.json';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[850px] w-full flex items-end justify-center pb-24 md:pb-32 pt-12">
      <div className="absolute inset-0 px-6 py-8">
        <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-2xl">
          <Image 
            src={content.images.hero} 
            alt="Cinematic, high-end automotive behind-the-scenes brochure photography."
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"></div>
        </div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-white/80 text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
          {content.hero.heading}
        </h1>
        <p className="text-white/95 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          {content.hero.subheading}
        </p>
        <button className="bg-background-light text-primary px-8 py-4 rounded-xl text-lg font-extrabold hover:bg-white transition-all shadow-xl hover:-translate-y-0.5">
          {content.hero.cta_button}
        </button>
      </div>
    </section>
  );
}
