import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Train, Plane, Building2, ShoppingBag, School, Navigation } from 'lucide-react';
import { BlueprintOverlay, ArchitecturalSilhouette } from '../common/ArchitecturalEffects';

const locations = [
  { icon: <MapPin />, name: 'Hazratganj Square', dist: '15 Mins', category: 'City Center' },
  { icon: <Train />, name: 'Charbagh Station', dist: '20 Mins', category: 'Connectivity' },
  { icon: <Plane />, name: 'CS Airport', dist: '25 Mins', category: 'International' },
  { icon: <Building2 />, name: 'IT City (HCL)', dist: '05 Mins', category: 'Tech District' },
  { icon: <ShoppingBag />, name: 'Phoenix Palassio', dist: '08 Mins', category: 'Entertainment' },
  { icon: <School />, name: 'GD Goenka School', dist: '10 Mins', category: 'Premium Edu' },
];

export default function LocationSection() {
  return (
    <section className="py-16 md:py-28 bg-white relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-5 pointer-events-none" />
      <BlueprintOverlay />
      <ArchitecturalSilhouette />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-32">
          <div className="w-full lg:w-1/2 mb-12 md:mb-0">
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center space-x-6 mb-8 md:mb-10">
                  <div className="w-12 md:w-16 h-px bg-accent" />
                  <span className="text-accent text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em]">The Strategic Edge</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-primary leading-[0.85] mb-12 md:mb-16 uppercase">
                   PRESTIGIOUS <br /> <span className="text-gradient-gold">LOCATION</span> <br /> 
                   <span className="font-serif italic font-light text-accent lowercase text-3xl md:text-6xl">coordinates</span>
                </h2>
                
                <div className="grid grid-cols-2 gap-6 md:gap-10">
                   {locations.map((loc, idx) => (
                     <motion.div
                       key={idx}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: idx * 0.1 }}
                       className="group p-6 md:p-10 rounded-3xl md:rounded-[3rem] bg-ivory/40 border border-primary/5 hover:bg-primary hover:border-primary transition-all duration-700"
                     >
                        <div className="text-accent mb-4 md:mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block">
                           {loc.icon}
                        </div>
                        <h4 className="text-[10px] md:text-sm font-black text-primary group-hover:text-white uppercase tracking-widest mb-2 leading-none transition-colors">{loc.name}</h4>
                        <div className="flex items-center gap-2 mb-4 md:mb-6">
                           <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-accent">{loc.category}</span>
                        </div>
                        <div className="flex items-center space-x-2 md:space-x-3 text-primary/40 group-hover:text-white/40 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] transition-colors">
                           <Navigation size={12} className="text-accent" />
                           <span>EST. {loc.dist}</span>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
             <div className="relative group">
                {/* Visual Map Mockup */}
                <div className="relative aspect-square rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] bg-ivory border-[0.5rem] md:border-[1rem] border-white ring-1 ring-primary/5">
                   <div className="w-full h-full bg-[#f4f2ee] relative">
                      {/* Stylized Routes */}
                      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
                         <path d="M0,200 Q100,50 400,200" fill="none" stroke="black" strokeWidth="20" strokeLinecap="round" />
                         <path d="M200,0 Q350,100 200,400" fill="none" stroke="black" strokeWidth="20" strokeLinecap="round" />
                      </svg>
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          animate={{ scale: [1, 1.1, 1] }} 
                          transition={{ duration: 3, repeat: Infinity }}
                          className="relative"
                        >
                           <div className="w-16 md:w-24 h-16 md:h-24 bg-accent/20 rounded-full blur-2xl absolute -inset-6" />
                           <div className="w-12 md:w-16 h-12 md:h-16 bg-primary rounded-xl md:rounded-[1.5rem] border-2 md:border-4 border-white shadow-2xl flex items-center justify-center text-accent relative z-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                              <MapPin size={window.innerWidth < 768 ? 20 : 32} />
                           </div>
                        </motion.div>
                      </div>
                   </div>
                </div>

                {/* Distance Experience Badge */}
                <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 bg-primary p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] text-white shadow-2xl z-20 border-[3px] md:border-4 border-ivory">
                   <div className="flex flex-col items-center">
                      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-2 md:mb-4">Location Prime</span>
                      <span className="text-4xl md:text-7xl font-black tracking-tighter">005</span>
                      <span className="text-[7px] md:text-[10px] font-black uppercase tracking-widest opacity-50">MINS FROM IT CITY</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
