import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Home, Map } from 'lucide-react';
import { BlueprintOverlay, ConstructionParticles } from '../common/ArchitecturalEffects';

const stats = [
  { 
    label: 'Legacy of Trust', 
    value: '22', 
    suffix: '+',
    icon: <Award className="w-10 h-10" />,
    description: 'Decades of architectural supremacy in Uttar Pradesh.'
  },
  { 
    label: 'Luxury Residences', 
    value: '8500', 
    suffix: '',
    icon: <Home className="w-10 h-10" />,
    description: 'Bespoke homes delivered with absolute precision.'
  },
  { 
    label: 'Happy Families', 
    value: '15', 
    suffix: 'k',
    icon: <Users className="w-10 h-10" />,
    description: 'A growing community of elite homeowners.'
  },
  { 
    label: 'Landmark Acres', 
    value: '450', 
    suffix: '+',
    icon: <Map className="w-10 h-10" />,
    description: 'Strategic developments across Lucknow.'
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20 bg-primary relative overflow-hidden">
      {/* Immersive Background Architecture */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
         <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Tall Scraper" 
            className="w-full h-full object-cover grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary" />
      </div>
      <BlueprintOverlay />
      <ConstructionParticles color="white" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0 divide-white/5 border border-white/5 rounded-3xl md:rounded-[4rem] overflow-hidden lux-glass shadow-2xl">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1 }}
              className="group p-8 md:p-16 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              
              <div className="relative z-10">
                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent mb-6 md:mb-12 group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                 </div>
                 
                 <div className="flex items-end mb-4 md:mb-6">
                    <span className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none group-hover:text-accent transition-colors duration-500">{stat.value}</span>
                    <span className="text-xl md:text-3xl font-black text-accent ml-1 md:ml-2 mb-1">{stat.suffix}</span>
                 </div>
                 
                 <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
                    <div className="w-6 md:w-8 h-px bg-accent/30" />
                    <h4 className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-accent">{stat.label}</h4>
                 </div>
                 
                 <p className="text-white/30 text-[8px] md:text-[10px] font-bold uppercase tracking-widest leading-loose max-w-[200px]">
                   {stat.description}
                 </p>
              </div>
              
              {/* Dynamic Number Silhouette */}
              <div className="absolute -right-4 -bottom-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                 <span className="text-6xl md:text-[10rem] font-black leading-none">{stat.value}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
