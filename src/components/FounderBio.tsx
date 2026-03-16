'use client';

import Image from 'next/image';
import content from '../../content.json';

export default function FounderBio() {
  return (
    <section className="py-24 bg-primary text-background-light px-6" id="vision">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-5/12 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative group border-4 border-background-light/10">
            <Image 
              src={content.images.portrait} 
              alt="Julian Sterling, Founder &amp; Principal" 
              fill
              className="object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60"></div>
          </div>

          <div className="w-full lg:w-7/12">
            <span className="text-background-light/60 font-black tracking-widest uppercase text-xs border-b border-background-light/20 pb-2 mb-6 inline-block">{content.founder.subheading}</span>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">{content.founder.name}</h2>
            
            <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed text-background-light/90">
              {content.founder.quote && (
                <p className="italic text-2xl md:text-3xl font-bold mb-8 text-white leading-snug">
                  {content.founder.quote}
                </p>
              )}
              <p>
                {content.founder.paragraph1}
              </p>
              <p>
                {content.founder.paragraph2}
              </p>
            </div>

            <div className="mt-12 flex gap-4">
              <div className="h-px flex-1 bg-background-light/20 self-center"></div>
              <div className="flex gap-6">
                <a href="#" className="text-background-light/60 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">share</span>
                </a>
                <a href="#" className="text-background-light/60 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
