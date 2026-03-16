'use client';

import { motion } from 'framer-motion';
import content from '../../content.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Expertise() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="expertise">
      <div className="mb-16">
        <span className="text-primary font-black tracking-widest text-xs uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/10">Core Pillars</span>
        <h2 className="text-4xl md:text-5xl font-black text-primary mt-6 tracking-tight">Our Expertise</h2>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 gap-8"
      >
        
        {content.expertise.map((item) => (
          <motion.div 
            key={item.id}
            variants={itemVariants}
            className="group bg-white p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all shadow-sm hover:shadow-xl"
            whileHover={{ y: -5 }}
          >
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-background-light mb-8 group-hover:rotate-3 transition-transform">
              <span className="material-symbols-outlined text-4xl">{item.icon}</span>
            </div>
            <h3 className="text-2xl font-black text-primary mb-4">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">{item.description}</p>
          </motion.div>
        ))}

      </motion.div>
    </section>
  );
}
