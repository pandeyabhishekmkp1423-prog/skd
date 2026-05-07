import React from 'react';
import { motion } from 'motion/react';
import { 
  Waves as Pool, 
  Wind, 
  Shield, 
  Wifi, 
  Trees, 
  Dumbbell, 
  Car, 
  Coffee,
  Sparkles
} from 'lucide-react';
import { ConstructionParticles, BlueprintOverlay } from '../common/ArchitecturalEffects';

const amenities = [
  { icon: <Pool size={32} />, name: 'Azure Pool', desc: 'Temperature controlled olympic-scale aquatic sanctuary.' },
  { icon: <Dumbbell size={32} />, name: 'Summit Fitness', desc: 'Elite high-performance training facility with trainers.' },
  { icon: <Shield size={32} />, name: 'Omni-Guard', desc: 'Military-grade 7-tier AI monitored security network.' },
  { icon: <Trees size={32} />, name: 'Botanical Zen', desc: 'Meditation pavilions surrounded by rare flora.' },
  { icon: <Wifi size={32} />, name: 'Nexus Connect', desc: 'Ultra-low latency private intra-township network.' },
  { icon: <Wind size={32} />, name: 'PureFlow Air', desc: 'Advanced HEPA filtration for all common areas.' },
  { icon: <Car size={32} />, name: 'Eco-Charging', desc: 'Next-gen rapid EV charging stations for residents.' },
  { icon: <Coffee size={32} />, name: 'The Sovereign', desc: 'Private members-only clubhouse and cigar lounge.' },
];

export default function AmenitiesSection() {
  return (
    <section className="py-16 md:py-28 bg-primary relative overflow-hidden border-y border-white/5">
      {/* Dynamic Atmospheric Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] bg-accent/5 rounded-full blur-[100px] md:blur-[200px] mix-blend-screen animate-pulse" />
        <div className="absolute inset-0 architectural-grid opacity-[0.03]" />
        <ConstructionParticles color="white" />
        <BlueprintOverlay />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col xl:flex-row items-end justify-between mb-20 md:mb-32 gap-12">
          <div className="max-w-4xl">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-6 mb-8"
             >
               <div className="flex items-center gap-2">
                  <div className="w-12 h-px bg-accent shadow-[0_0_15px_#C8A45D]" />
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
               </div>
               <span className="text-accent text-[10px] font-black uppercase tracking-[0.6em] drop-shadow-sm">The Curated Experience</span>
             </motion.div>
             <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.8] perspective-1000">
                SOVEREIGN <br /> <span className="text-gradient-gold">LUXURIES</span>
             </h2>
          </div>
          <p className="text-white/30 text-base md:text-xl font-light leading-relaxed max-w-sm border-l-2 border-accent/20 pl-8 mb-4 italic">
            Engineering spaces that transcend utility to become <span className="text-white font-medium">Extraordinary Paradigms</span> of modern existence.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y divide-white/5 border border-white/5 rounded-3xl md:rounded-[4.5rem] overflow-hidden lux-glass shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
           {amenities.map((item, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.05, duration: 1 }}
               className="group relative bg-transparent p-10 md:p-16 hover:bg-accent transition-all duration-1000 cursor-default overflow-hidden"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent group-hover:from-white/20 transition-all duration-1000" />
                
                <div className="relative z-10">
                   <div className="text-accent group-hover:text-white transition-all duration-1000 mb-8 md:mb-12 transform group-hover:scale-125 group-hover:-rotate-6 inline-block drop-shadow-[0_0_20px_#C8A45D]">
                      {item.icon}
                   </div>
                   <h4 className="text-xl md:text-3xl font-black text-white mb-4 uppercase tracking-tighter leading-none transition-all duration-700">{item.name}</h4>
                   <p className="text-white/30 group-hover:text-white/90 text-[8px] md:text-[10px] font-bold uppercase tracking-widest leading-relaxed transition-colors duration-700">
                      {item.desc}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Cinematic Backdrop Text */}
        <div className="mt-20 md:mt-32 flex justify-center opacity-[0.02] select-none">
           <span className="text-white text-[10vw] font-black tracking-tighter uppercase whitespace-nowrap overflow-hidden">VINDHYAVASHINI</span>
        </div>
      </div>
    </section>
  );
}
