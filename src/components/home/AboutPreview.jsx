import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Zap, ChevronRight } from 'lucide-react';
import { COMPANY_NAME } from '../../constants';
import { ArchitecturalSilhouette, BlueprintOverlay } from '../common/ArchitecturalEffects';

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-28 bg-luxury-white relative overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-accent/5 rounded-full blur-[100px] md:blur-[150px] animate-slow-pan" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] animate-slow-pan" />
        <div className="absolute inset-0 architectural-grid-light opacity-5" />
        <ArchitecturalSilhouette />
        <BlueprintOverlay />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-32 lg:gap-40">
          {/* Architectural Layered Imagery */}
          <div className="w-full lg:w-1/2 relative perspective-2000 mb-12 md:mb-0">
             <div className="relative group">
                {/* Main Large Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative z-10 rounded-3xl md:rounded-[4.5rem] overflow-hidden shadow-2xl border-[3px] md:border-4 border-white/40 lux-glass"
                >
                   <img 
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" 
                    alt="Corporate Headquarters" 
                    className="w-full aspect-[4/5] object-cover transition-transform duration-[3s] group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </motion.div>
                
                {/* Secondary Overlapping Piece */}
                <motion.div
                  initial={{ opacity: 0, x: 50, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 z-20 w-3/4 hidden md:block"
                >
                   <div className="p-2 md:p-3 bg-white rounded-3xl md:rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-ivory">
                      <img 
                        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" 
                        alt="Project Site" 
                        className="w-full aspect-video object-cover rounded-2xl md:rounded-[3rem]"
                      />
                   </div>
                </motion.div>

                {/* Legacy Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 md:-top-10 -left-6 md:-left-10 z-30 bg-primary/95 backdrop-blur-xl p-6 md:p-10 rounded-2xl md:rounded-[3rem] border border-white/10 shadow-2xl"
                >
                   <div className="flex flex-col gap-1 md:gap-2">
                      <span className="text-accent text-3xl md:text-5xl font-black tracking-tighter leading-none">22+</span>
                      <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.4em] text-white/40 whitespace-nowrap">Distinguished Years</span>
                   </div>
                </motion.div>
             </div>
          </div>

          {/* Precision Typography & Content */}
          <div className="w-full lg:w-1/2">
             <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
             >
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                  <div className="flex items-center gap-2">
                     <div className="w-8 md:w-12 h-px bg-accent" />
                     <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  </div>
                  <span className="text-accent text-[9px] md:text-[10px] font-black uppercase tracking-[0.6em]">Heritage Foundations</span>
                </div>
                
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-primary leading-[0.85] mb-8 md:mb-12 uppercase perspective-1000">
                   THE LEADER IN <br /> 
                   <span className="text-gradient-gold">URBAN PLANNING</span> <br /> 
                   <span className="font-serif italic font-light text-accent text-3xl md:text-6xl lowercase flex items-center gap-4 md:gap-6">
                      excellence 
                      <div className="h-px flex-1 bg-accent/20 hidden md:block" />
                   </span>
                </h2>
                
                <p className="text-primary/50 text-base md:text-xl font-light leading-relaxed mb-10 md:mb-16 max-w-xl border-l-[1.5px] md:border-l-2 border-accent/20 pl-6 md:pl-10 italic">
                  With a landbank exceeding <span className="font-bold text-primary">800 acres</span>, {COMPANY_NAME} is Lucknow's most formidable developer of integrated townships and luxury high-rises.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-20 text-density-high">
                   {[
                     { icon: <ShieldCheck size={20} />, title: 'Institutional Trust', desc: 'UP-RERA registered projects with 100% compliance record.' },
                     { icon: <Target size={20} />, title: 'Strategic Hubs', desc: 'Focus on Amar Shaheed Path & Lucknow East corridors.' },
                     { icon: <Zap size={20} />, title: 'Smart Engineering', desc: 'Utilizing world-class civil materials & structural logic.' },
                     { icon: <ChevronRight size={20} />, title: 'Elite Community', desc: 'A network of 12,000+ satisfied luxury homeowners.' }
                   ].map((item, idx) => (
                     <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-6 md:gap-8 group"
                     >
                        <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-2xl md:rounded-[1.5rem] bg-ivory flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white group-hover:shadow-2xl transition-all duration-700">
                           {item.icon}
                        </div>
                        <div>
                           <h4 className="text-[10px] md:text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-3 md:mb-4 group-hover:text-accent transition-colors">{item.title}</h4>
                           <p className="text-primary/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest leading-relaxed"> {item.desc}</p>
                        </div>
                     </motion.div>
                   ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12">
                   <Link 
                     to="/about"
                     className="group relative px-10 md:px-14 py-6 md:py-8 bg-primary rounded-2xl md:rounded-[1.75rem] text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-white overflow-hidden shadow-2xl transition-all duration-700 w-full sm:w-auto text-center"
                   >
                      <span className="relative z-10 flex items-center justify-center gap-4">
                         Discover Heritage
                         <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                      </span>
                      <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                   </Link>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
