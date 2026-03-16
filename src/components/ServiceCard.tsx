'use client';

import { motion } from 'framer-motion';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white p-8 rounded-xl flex items-start gap-5 border border-primary/10 shadow-sm hover:shadow-md transition-shadow h-full"
    >
      <span className="material-symbols-outlined text-primary text-3xl font-bold">{icon}</span>
      <div>
        <h4 className="font-extrabold text-primary mb-2 text-lg">{title}</h4>
        <p className="text-sm text-slate-600 font-medium">{description}</p>
      </div>
    </motion.div>
  );
}
