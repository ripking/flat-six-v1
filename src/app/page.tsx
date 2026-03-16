'use client';

import { motion } from 'framer-motion';
import content from '../../content.json';
import ServiceCard from '@/components/ServiceCard';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import About from '@/components/About';
import FounderBio from '@/components/FounderBio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="font-display bg-background-light text-slate-900 selection:bg-primary/20 overflow-hidden">
      
      <Navbar />

      <Hero />
      
      <Expertise />

      {/* Specialized Services Grid */}
      <section className="py-24 bg-primary/5 px-6 border-y border-primary/5" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-primary mb-4 tracking-tight">Specialized Services</h2>
            <div className="h-2 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {content.services.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <ServiceCard 
                  title={service.title} 
                  description={service.description} 
                  icon={service.icon} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <About />
      
      <FounderBio />

      {/* CTA Footer */}
      <section id="contact" className="py-24 px-6 bg-background-light">
        <div className="max-w-4xl mx-auto bg-primary rounded-[2.5rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-20 -mb-20 blur-3xl"></div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 relative z-10 tracking-tight">{content.footer_cta.heading}</h2>
          <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto relative z-10 font-medium leading-relaxed">
            {content.footer_cta.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <button className="w-full sm:w-auto bg-white text-primary px-12 py-5 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-xl">
              {content.footer_cta.button}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
