'use client';

import Image from 'next/image';
import content from '../../content.json';

export default function About() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="about">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tight">{content.about.heading}</h2>
          <p className="text-slate-700 text-lg mb-10 leading-relaxed font-medium whitespace-pre-wrap">
            {content.about.description}
          </p>
          
          <div className="grid grid-cols-2 gap-10">
            {content.about.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-black text-primary mb-2 tracking-tight">{stat.value}</div>
                <div className="text-xs font-black text-primary/60 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 w-full aspect-square relative rounded-2xl overflow-hidden shadow-xl border border-primary/10">
          <Image 
            src={content.images.feature} 
            alt="Feature image"
            fill
            className="w-full h-full object-cover rounded-xl shadow-lg border border-primary/10"
          />
        </div>

      </div>
    </section>
  );
}
