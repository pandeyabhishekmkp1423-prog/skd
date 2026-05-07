import { motion } from 'motion/react';
import { Target, Users, Shield, Award, Sparkles, ArrowRight } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const values = [
  { icon: <Target className="text-accent" />, title: 'Visionary Design', desc: 'Architecture that doesn’t just house people—it inspires them to achieve more.' },
  { icon: <Shield className="text-accent" />, title: 'Absolute Integrity', desc: 'A legacy built on RERA compliance, transparency, and the highest civil ethics.' },
  { icon: <Users className="text-accent" />, title: 'Bespoke Care', desc: 'Our relationship begins After the key handover. We curate your life with concierge services.' },
  { icon: <Award className="text-accent" />, title: 'North Indian Awardee', desc: 'Voted "Luxury Developer of the Year" twice for our impactful Lucknow skyline contributions.' },
];

export default function About() {
  return (
    <div className="bg-luxury-white pt-24 min-h-screen">
      {/* Hero Header */}
      <section className="py-40 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-ivory/30 -z-10 skew-x-[-15deg] translate-x-32" />
        
        <div className="container mx-auto px-6 relative z-10">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
             className="max-w-5xl"
           >
              <div className="flex items-center space-x-6 mb-12">
                <div className="w-16 h-px bg-accent" />
                <div className="flex items-center gap-2">
                   <Sparkles size={14} className="text-accent" />
                   <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em]">The legacy narrative</span>
                </div>
              </div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-primary uppercase leading-[0.8] mb-16">
                 DEFINITION <br /> OF <span className="text-gradient-gold">MASTERY</span>
              </h1>
              <div className="flex flex-col md:flex-row gap-12 items-start max-w-4xl">
                 <p className="text-2xl text-primary/70 font-light leading-relaxed border-l-[0.5rem] border-accent pl-12 py-4">
                   Since our inception, {COMPANY_NAME} has remained the uncompromising standard-bearer for civil engineering and luxury lifestyle in Lucknow.
                 </p>
                 <div className="flex flex-col gap-6 pt-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">Established in Lucknow</span>
                    <span className="text-4xl font-black text-primary">1998</span>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Philosophy / Pillars */}
      <section className="py-40 bg-primary relative overflow-hidden">
         {/* Background Grid */}
         <div className="absolute inset-0 architectural-grid opacity-5 pointer-events-none" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
               <div className="max-w-2xl">
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none mb-4">OUR GUIDING <span className="text-gradient-gold">AXIOMS</span></h2>
                  <p className="text-white/30 text-lg font-light uppercase tracking-widest border-t border-white/5 pt-8">The four pillars of the SKD development philosophy.</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[4rem] overflow-hidden">
               {values.map((item, idx) => (
                 <motion.div 
                    key={idx} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-primary/20 p-16 hover:bg-accent transition-all duration-1000 group cursor-default"
                 >
                    <div className="mb-12 text-accent group-hover:text-white transition-all duration-500 scale-150 transform origin-left">
                       {item.icon}
                    </div>
                    <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 leading-none">{item.title}</h4>
                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest leading-loose group-hover:text-white/70 transition-colors">
                       {item.desc}
                    </p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative group"
              >
                 <div className="aspect-[4/5.5] rounded-[4.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-[1rem] border-ivory/30 transform group-hover:-rotate-1 transition-transform duration-1000">
                    <img 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                      alt="Corporate HQ" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]"
                    />
                 </div>
                 {/* Floating Data Card */}
                 <div className="absolute -bottom-10 -right-10 bg-primary p-12 rounded-[3.5rem] text-white shadow-2xl z-20 border-[0.5rem] border-white group-hover:translate-x-4 transition-transform duration-700">
                    <div className="flex flex-col">
                       <span className="text-7xl font-black tracking-tighter text-accent">25+</span>
                       <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Years of Development Legacy</span>
                    </div>
                 </div>
              </motion.div>
              
              <div className="text-left">
                 <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-primary uppercase mb-16 leading-[0.9]">
                    CIVIL <span className="text-gradient-gold">ENGINEERING</span> <br /> AS BOLD ARTISTRY
                 </h2>
                 <div className="space-y-12 text-primary/60 text-xl font-light leading-relaxed">
                    <p>
                       For over two decades, our firm has served as the vanguard of high-end real estate in Uttar Pradesh. We believe that architecture should be more than stone and glass; it should be a manifestation of one's aspirations.
                    </p>
                    <p>
                       Every SKD development is a symphony of technology and luxury—fusing world-class engineering standards with the aesthetic sensitivities of international architecture studios.
                    </p>
                    <div className="pt-12 flex items-center gap-10">
                       <button className="bg-primary text-white px-16 py-7 rounded-[2.25rem] font-black uppercase tracking-[0.3em] text-[10px] hover:bg-accent transition-all duration-700 shadow-2xl shadow-primary/20">
                          Review Our Legacy
                       </button>
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">HQ Location</span>
                          <span className="text-sm font-black text-primary">LUCKNOW, UP</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-40 bg-ivory/20 overflow-hidden relative">
         <div className="container mx-auto px-6 text-left relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
               <div className="max-w-4xl">
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-primary uppercase leading-[0.85] mb-12">
                     THE MINDS <br /> <span className="text-gradient-gold">BEHIND THE SKYLINE</span>
                  </h2>
                  <p className="text-primary/40 text-xl font-light uppercase tracking-widest border-l border-primary/10 pl-12 pr-4">
                     Redefining the urban landscape requires a collective of master builders, visionary designers, and relentless innovators.
                  </p>
               </div>
               
               <div className="flex flex-col items-center">
                  <div className="flex -space-x-8 mb-6">
                     {[1, 2, 3, 4, 5, 6].map((i) => (
                       <motion.div 
                         key={i} 
                         whileHover={{ y: -10, zIndex: 50 }}
                         className="w-24 h-24 rounded-full border-[0.4rem] border-white overflow-hidden shadow-2xl relative"
                       >
                          <img src={`https://i.pravatar.cc/300?u=${i + 10}`} alt="Leader" className="grayscale hover:grayscale-0 transition-all duration-700 h-full w-full object-cover" />
                       </motion.div>
                     ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">500+ Development Professionals</span>
               </div>
            </div>
            
            {/* CTA to connect */}
            <div className="flex justify-center">
               <Link to="/contact" className="group flex items-center gap-10 px-20 py-10 rounded-[3rem] bg-white shadow-2xl border border-primary/5 hover:bg-primary transition-all duration-700">
                  <span className="text-xs font-black uppercase tracking-[0.5em] text-primary group-hover:text-white transition-colors">Partner With Us</span>
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                     <ArrowRight size={32} />
                  </div>
               </Link>
            </div>
         </div>
         
         {/* Artistic background text */}
         <div className="absolute bottom-0 right-0 opacity-[0.03] select-none translate-y-1/2">
            <span className="text-[40vw] font-black text-primary leading-none uppercase">SKD</span>
         </div>
      </section>
    </div>
  );
}

// Helper Link component
function Link({ to, children, className }) {
   return (
      <a href={to} className={className}>
         {children}
      </a>
   )
}
