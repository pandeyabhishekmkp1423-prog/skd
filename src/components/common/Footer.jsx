import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { COMPANY_NAME, COMPANY_SUBTITLE } from '../../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 md:pt-28 pb-8 md:pb-12 overflow-hidden relative border-t-2 border-accent/10">
      {/* Immersive Architectural Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000" 
          alt="Architectural Blueprint" 
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
        <div className="absolute inset-0 architectural-grid-light opacity-5" />
      </div>

      {/* Floating Animated Silhouette */}
      <div className="absolute bottom-0 left-0 w-full opacity-5 select-none pointer-events-none translate-y-10 md:translate-y-20">
         <h2 className="text-[30vw] font-black leading-none uppercase tracking-tighter text-center">SKYLINE</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Upper Brand Reveal */}
        <div className="flex flex-col lg:flex-row items-start md:items-end justify-between mb-16 md:mb-32 gap-12 md:gap-16 border-b border-white/5 pb-16 md:pb-24">
           <div className="max-w-2xl">
              <div className="mb-8 md:mb-12">
                 <Logo variant="gold" scale={window.innerWidth < 768 ? 0.8 : 1.2} />
              </div>
              <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8 md:mb-12">
                 TRANSFORMING THE <br /> <span className="text-gradient-gold">INDIAN HORIZON</span>
              </h3>
              <p className="text-white/30 text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] leading-loose max-w-sm">
                 Architectural legacy meets futuristic engineering. We build the foundations of a rising nation.
              </p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full lg:w-auto">
              {[
                { label: 'Completed Projects', value: '45+' },
                { label: 'Total Landbank', value: '800A' },
                { label: 'Satisfied Elite', value: '12K' },
                { label: 'Market Capital', value: '₹950C' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 md:gap-2">
                   <span className="text-accent text-[1.5rem] md:text-[2rem] font-black tracking-tighter leading-none">{stat.value}</span>
                   <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.3em] text-white/20 whitespace-nowrap">{stat.label}</span>
                </div>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 mb-16 md:mb-32">
          {/* Section 1: Heritage */}
          <div className="lux-glass-light p-8 md:p-10 rounded-3xl md:rounded-[3rem] border border-white/5 group hover:border-accent/40 transition-all duration-700">
             <div className="flex items-center gap-4 mb-8 md:mb-12">
                <div className="w-8 md:w-10 h-8 md:h-10 rounded-xl md:rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                   <Sparkles size={14} />
                </div>
                <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-accent">Legacy Heritage</h4>
             </div>
             <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] leading-relaxed mb-8 md:mb-12">
                A multi-generational institution of excellence in civil engineering and high-end residential development.
             </p>
             <div className="flex gap-3 md:gap-4">
                {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 md:w-12 h-10 md:h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-accent transition-all duration-700 bg-white/5">
                     <Icon size={16} />
                  </a>
                ))}
             </div>
          </div>

          {/* Section 2: Links */}
          <div>
             <div className="flex items-center gap-3 mb-10 pb-6 border-b border-accent/10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Portfolio Links</h4>
             </div>
             <ul className="space-y-6">
                {['Premium Townships', 'Commercial Hubs', 'Signature Villas', 'Heritage Plots', 'Advisory Gateway'].map((item, i) => (
                  <li key={i}>
                     <Link to="/projects" className="text-xs font-black uppercase tracking-[0.25em] text-white/50 hover:text-white transition-all flex items-center group overflow-hidden">
                        <span className="w-0 group-hover:w-8 h-px bg-accent mr-0 group-hover:mr-4 transition-all duration-500" />
                        {item}
                     </Link>
                  </li>
                ))}
             </ul>
          </div>

          {/* Section 3: Contact */}
          <div>
             <div className="flex items-center gap-3 mb-10 pb-6 border-b border-accent/10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Headquarters</h4>
             </div>
             <ul className="space-y-10">
                <li className="flex items-start gap-6 group">
                   <div className="w-12 h-12 rounded-[1.25rem] bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-accent transition-all duration-700">
                      <MapPin className="text-accent group-hover:text-white transition-colors" size={18} />
                   </div>
                   <div className="flex flex-col gap-2">
                      <span className="text-[10px] text-accent font-black uppercase tracking-widest">Main Office</span>
                      <span className="text-xs text-white/40 leading-loose font-bold uppercase tracking-widest">
                         Suite 808, Signature Hub, Gomti Nagar, Lucknow
                      </span>
                   </div>
                </li>
                <li className="flex items-center gap-6 group">
                   <div className="w-12 h-12 rounded-[1.25rem] bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-accent transition-all duration-700">
                      <Phone className="text-accent group-hover:text-white transition-colors" size={18} />
                   </div>
                   <span className="text-sm text-white font-black tracking-widest uppercase transition-colors group-hover:text-accent">+91 9990001111</span>
                </li>
             </ul>
          </div>

          {/* Section 4: Newsletter */}
          <div className="bg-ivory/5 p-10 rounded-[3.5rem] border border-white/5 relative overflow-hidden backdrop-blur-xl">
             <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-3xl" />
             <div className="relative z-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6">Dispatch List</h4>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.1em] leading-loose mb-10">
                   Enter the inner circle. Receive pre-launch protocols for upcoming townships.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                   <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Authorized Email" 
                        className="w-full bg-primary/20 border border-white/10 rounded-2xl px-8 py-6 focus:border-accent text-white placeholder:text-white/20 text-xs font-bold uppercase tracking-widest transition-all"
                      />
                   </div>
                   <button className="w-full bg-accent text-white py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-primary transition-all duration-700 shadow-2xl shadow-accent/20 shine-effect">
                      Join The Elite
                   </button>
                </form>
             </div>
          </div>
        </div>

        {/* Lower Legal Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
           <div className="flex flex-col items-center lg:items-start gap-2">
              <Logo variant="light" scale={0.6} showText={false} />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">
                 © {currentYear} MAA VINDHYAVASHINI S.K.D PVT. LTD. & DEVELOPERS. INC.
              </span>
           </div>
           
           <div className="flex flex-wrap justify-center gap-12">
              {['Institutional Terms', 'Confidentiality Protocol', 'Engineering Standards', 'Accessibility Desk'].map((item, i) => (
                <Link key={i} to="/contact" className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-accent transition-all duration-500">
                   {item}
                </Link>
              ))}
           </div>
        </div>
      </div>
    </footer>
  );
}
