import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Maximize, Key, Shield, Wifi, Zap, ArrowLeft, Download, Sparkles, Navigation, Calendar } from 'lucide-react';

export default function ProjectDetails() {
  const { id } = useParams();
  
  // Static content for any project id
  const project = {
    title: id?.split('-')?.map(w => w.charAt(0).toUpperCase() + w.slice(1))?.join(' ') || 'VANTAGE ESTATE',
    location: 'Gomti Nagar Extension, Lucknow',
    area: '2500 - 4500 Sq. Ft.',
    price: 'Starting ₹ 4.5 Cr onwards',
    status: 'Ongoing - 75% Sold',
    desc: 'An architectural masterpiece featuring a smart-grid infrastructure, automated home ecosystem, and breathtaking 360-degree views of the Lucknow skyline. Designed for those who demand more than just luxury—those who demand the future of living.',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1448630360428-65ff2c191c79?auto=format&fit=crop&q=80&w=800',
    ]
  };

  return (
    <div className="bg-luxury-white pt-40 pb-40 min-h-screen">
      <div className="container mx-auto px-6">
        <Link to="/projects" className="group inline-flex items-center space-x-4 text-primary/40 hover:text-accent mb-16 transition-all">
          <div className="w-10 h-10 rounded-full border border-primary/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
             <ArrowLeft size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back to Portfolio</span>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center space-x-6 mb-10">
               <div className="w-16 h-px bg-accent" />
               <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-accent" />
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em]">Exclusive Briefing</span>
               </div>
            </div>

            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-primary uppercase leading-[0.85] mb-12">
               {project.title.split(' ')[0]} <br /> 
               <span className="text-gradient-gold">{project.title.split(' ')[1] || 'ESTATE'}</span>
            </h1>

            <div className="flex flex-wrap items-center gap-8 mb-16 border-y border-primary/5 py-10">
               <div className="flex items-center gap-3">
                  <Navigation size={18} className="text-accent" />
                  <span className="text-xs font-black uppercase tracking-widest text-primary/60">{project.location}</span>
               </div>
               <div className="flex items-center gap-3">
                  <Maximize size={18} className="text-accent" />
                  <span className="text-xs font-black uppercase tracking-widest text-primary/60">{project.area}</span>
               </div>
               <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-accent" />
                  <span className="text-xs font-black uppercase tracking-widest text-primary/60">Q4 2026 Possession</span>
               </div>
            </div>

            <p className="text-primary/60 text-xl font-light leading-relaxed mb-20 max-w-xl">
              {project.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-20">
               <div className="p-10 bg-white shadow-2xl rounded-[3rem] border border-primary/5 flex flex-col gap-2">
                  <span className="text-[10px] text-primary/30 font-black uppercase tracking-[0.3em]">Master Configuration</span>
                  <span className="text-2xl font-black text-primary uppercase tracking-tighter">4 & 5 BHK SOVEREIGN</span>
               </div>
               <div className="p-10 bg-ivory shadow-2xl rounded-[3rem] border border-primary/10 flex flex-col gap-2">
                  <span className="text-[10px] text-primary/40 font-black uppercase tracking-[0.3em]">Market Value</span>
                  <span className="text-2xl font-black text-accent uppercase tracking-tighter">FROM ₹ 4.5 CR*</span>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
               <button className="px-16 py-8 bg-primary text-white rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:bg-accent transition-all duration-700 shadow-2xl shadow-primary/30">
                  <Key size={20} />
                  <span>Secure Pricing</span>
               </button>
               <button className="px-16 py-8 bg-white border-2 border-primary/5 text-primary rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:bg-primary hover:text-white transition-all duration-700 shadow-xl">
                  <Download size={20} />
                  <span>Legacy Brochure</span>
               </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 gap-8 h-full group"
          >
             <div className="col-span-2 aspect-[16/10] rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[1rem] border-white ring-1 ring-primary/5">
                <img src={project.images[0]} alt="Hero" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105" />
             </div>
             <div className="aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl border-[0.75rem] border-white ring-1 ring-primary/5 transform group-hover:-rotate-3 transition-transform duration-1000">
                <img src={project.images[1]} alt="Interior" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl border-[0.75rem] border-white ring-1 ring-primary/5 transform group-hover:rotate-3 transition-transform duration-1000">
                <img src={project.images[2]} alt="Exterior" className="w-full h-full object-cover" />
             </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="bg-primary p-20 md:p-32 rounded-[6rem] relative overflow-hidden">
           <div className="absolute inset-0 architectural-grid opacity-5 pointer-events-none" />
           <div className="relative z-10">
              <div className="text-center mb-24">
                 <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">ARCHITECTURAL <span className="text-gradient-gold">UTILITIES</span></h2>
                 <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mt-6">Next-generation development standards</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                 {[
                   { icon: <Maximize size={40} />, title: 'Space Mastery', desc: 'Double height atriums with 14ft floor-to-ceiling glass systems.' },
                   { icon: <Shield size={40} />, title: 'Biometric Shield', desc: 'Six-tier security grid with AI-monitored perimeter controls.' },
                   { icon: <Wifi size={40} />, title: 'Nodal Synergy', desc: 'Fiber-optic core with pre-integrated smart-home neural network.' },
                   { icon: <Zap size={40} />, title: 'Eco-Dynamics', desc: 'Self-sufficient power infrastructure with solar-harvesting facades.' }
                 ].map((feat, i) => (
                   <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }}
                    className="flex flex-col items-center text-center group"
                   >
                      <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/5 flex items-center justify-center text-accent mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-700">
                         {feat.icon}
                      </div>
                      <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-4 leading-none">{feat.title}</h4>
                      <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] leading-loose">{feat.desc}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
