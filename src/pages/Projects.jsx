import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Filter, Sparkles, Navigation } from 'lucide-react';
import { cn } from '../utils/utils';

const projects = [
  { id: 'signature-towers', title: 'Signature Towers', loc: 'Gomti Nagar Ext.', tag: 'Flagship', category: 'Residential', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200' },
  { id: 'vindhyavashini-villas', title: 'Vindhyavashini Villas', loc: 'Shaheed Path', tag: 'Elite Villas', category: 'Residential', img: 'https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&q=80&w=1200' },
  { id: 'royal-plaza', title: 'Royal Plaza', loc: 'Sultanpur Rd', tag: 'Trade Center', category: 'Commercial', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200' },
  { id: 'aura-sky', title: 'Aura Sky Suites', loc: 'Hazratganj', tag: 'Boutique', category: 'Ongoing', img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200' },
  { id: 'emerald-smart-township', title: 'Emerald Township', loc: 'Faizabad Rd', tag: 'Themed', category: 'Plots', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200' },
  { id: 'skd-tech-hub', title: 'SKD Tech Hub', loc: 'Amar Shaheed Path', tag: 'Next-Gen', category: 'Commercial', img: 'https://images.unsplash.com/photo-1503387762-592e5999e724?auto=format&fit=crop&q=80&w=1200' },
];

const categories = ['All', 'Residential', 'Commercial', 'Plots', 'Ongoing'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-luxury-white min-h-screen pt-40 pb-40">
      {/* Background Architectural Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ivory/20 pointer-events-none -z-10 skew-x-[-15deg] translate-x-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mb-32 group">
           <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-6 mb-10"
              >
                <div className="w-16 h-px bg-accent" />
                <div className="flex items-center gap-2">
                   <Sparkles size={14} className="text-accent" />
                   <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em]">The master collection</span>
                </div>
              </motion.div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-primary uppercase leading-[0.8] mb-4">
                 CURATED <br /> <span className="text-gradient-gold">VENTURES</span>
              </h1>
              <p className="text-primary/30 text-[10px] font-black uppercase tracking-[0.4em] ml-2">Displaying architectural milestones across Luckno's horizon</p>
           </div>
           
           {/* Filters */}
           <div className="flex flex-wrap items-center gap-4 bg-white/40 backdrop-blur-xl p-3 rounded-[2.5rem] border border-primary/5 shadow-2xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-10 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-700",
                    activeCategory === cat 
                      ? "bg-primary text-white shadow-2xl shadow-primary/30 scale-105" 
                      : "bg-transparent text-primary/40 hover:text-primary hover:bg-white/50"
                  )}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
           <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, i) => (
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <Link to={`/projects/${p.id}`} className="block">
                     <div className="relative aspect-[3/4.2] rounded-[4rem] overflow-hidden mb-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-[0.75rem] border-white group-hover:-translate-y-4 transition-all duration-1000 bg-ivory">
                        <img 
                          src={p.img} 
                          alt={p.title} 
                          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-all duration-1000" />
                        
                        <div className="absolute top-10 left-10 flex flex-col gap-4">
                           <span className="px-8 py-2.5 bg-primary/90 text-white rounded-full text-[8px] font-black uppercase tracking-widest backdrop-blur-md border border-white/10 shadow-2xl">
                              {p.tag}
                           </span>
                        </div>

                        {/* Hover Overlay Content */}
                        <div className="absolute inset-x-8 bottom-8 p-10 glass-ivory opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700 rounded-[2.5rem] border border-white/20">
                           <div className="flex flex-col gap-2">
                              <span className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">{p.category} Development</span>
                              <h3 className="text-3xl font-black text-primary uppercase tracking-tighter leading-none mb-4">{p.title}</h3>
                              <div className="flex items-center gap-3">
                                 <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center hover:bg-accent transition-all duration-500">
                                    <ArrowRight size={24} />
                                 </div>
                                 <span className="text-[8px] font-black uppercase tracking-widest text-primary/40 leading-relaxed">Vantage Coordinates <br /> {p.loc}</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     
                     {/* Static Meta Info */}
                     <div className="flex justify-between items-center px-6">
                        <div className="space-y-1">
                           <h3 className="text-2xl font-black text-primary uppercase tracking-tighter group-hover:text-accent transition-colors leading-none">
                             {p.title}
                           </h3>
                           <div className="flex items-center space-x-3 text-primary/30 text-[9px] font-bold uppercase tracking-[0.3em]">
                              <Navigation size={12} className="text-accent" />
                              <span>{p.loc}</span>
                           </div>
                        </div>
                        <div className="w-px h-10 bg-primary/5 mx-6" />
                        <div className="flex flex-col items-end">
                           <span className="text-accent font-black text-xl tracking-tighter uppercase whitespace-nowrap">Explore Unit</span>
                           <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                        </div>
                     </div>
                  </Link>
                </motion.div>
              ))}
           </AnimatePresence>
        </motion.div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-40 text-center flex flex-col items-center">
             <div className="w-24 h-24 rounded-full bg-ivory flex items-center justify-center text-primary/10 mb-12 border border-primary/5">
                <Filter className="w-10 h-10" />
             </div>
             <p className="text-primary/20 text-xs uppercase font-black tracking-[0.5em]">No signature ventures found in this classification.</p>
          </div>
        )}
      </div>
    </div>
  );
}
