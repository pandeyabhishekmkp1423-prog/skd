import React from 'react';
import { motion } from 'framer-motion'; // Ensure you are using framer-motion or motion/react
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { COMPANY_NAME } from '../../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 overflow-hidden relative border-t border-accent/20">
      {/* Immersive Architectural Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000" 
          alt="Architectural Blueprint" 
          className="w-full h-full object-cover opacity-5 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
      </div>

      {/* Background Silhouette Label */}
      <div className="absolute bottom-[-5%] left-0 w-full opacity-[0.03] select-none pointer-events-none">
         <h2 className="text-[25vw] font-black leading-none uppercase tracking-tighter text-center">ESTATES</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Upper Brand Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-12 border-b border-white/5 pb-16">
            <div className="max-w-3xl">
               <div className="mb-10 inline-block transform scale-110 md:scale-125 origin-left">
                  <Logo variant="gold" />
               </div>
               <h3 className="text-4xl md:text-7xl font-extrabold tracking-tighter uppercase leading-[0.85] mb-8">
                  Defining the <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-ivory to-accent">
                    New Indian Horizon
                  </span>
               </h3>
               <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] leading-loose max-w-md">
                  Architectural legacy meets futuristic engineering. We build the foundations of a rising nation through precision and luxury.
               </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 w-full lg:w-auto pt-10">
               {[
                 { label: 'Completed Projects', value: '45+' },
                 { label: 'Total Landbank', value: '800A' },
                 { label: 'Satisfied Elite', value: '12K' },
                 { label: 'Market Capital', value: '₹950C' }
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col border-l border-accent/20 pl-6">
                    <span className="text-accent text-3xl md:text-4xl font-black tracking-tighter">{stat.value}</span>
                    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30">{stat.label}</span>
                 </div>
               ))}
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Section 1: Heritage */}
          <div className="bg-white/[0.02] backdrop-blur-md p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between group hover:border-accent/30 transition-all duration-500">
              <div>
                <div className="flex items-center gap-3 mb-8">
                   <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      <Sparkles size={16} />
                   </div>
                   <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Corporate Heritage</h4>
                </div>
                <p className="text-white/50 text-xs font-medium leading-relaxed mb-8">
                   A multi-generational institution of excellence in civil engineering and high-end residential development.
                </p>
              </div>
              <div className="flex gap-4">
                {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                      <Icon size={16} />
                  </a>
                ))}
              </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="lg:pl-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8 pb-4 border-b border-white/5">Portfolio</h4>
              <ul className="space-y-4">
                {['Premium Townships', 'Commercial Hubs', 'Signature Villas', 'Heritage Plots'].map((item, i) => (
                  <li key={i}>
                      <Link to="/projects" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all flex items-center group">
                        <ArrowUpRight size={12} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                        {item}
                      </Link>
                  </li>
                ))}
              </ul>
          </div>

          {/* Section 3: Contact */}
          <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8 pb-4 border-b border-white/5">Headquarters</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                   <MapPin className="text-accent shrink-0" size={18} />
                   <div className="flex flex-col">
                      <span className="text-[10px] text-white/60 font-bold uppercase tracking-wider mb-1">Lucknow Office</span>
                      <span className="text-[11px] text-white/30 leading-snug uppercase font-medium">
                         Suite 808, Signature Hub, Gomti Nagar
                      </span>
                   </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                   <Phone className="text-accent shrink-0" size={18} />
                   <span className="text-xs text-white font-bold tracking-[0.15em] group-hover:text-accent transition-colors">+91 9990001111</span>
                </div>
              </div>
          </div>

          {/* Section 4: Newsletter */}
          <div className="bg-accent/5 p-8 rounded-[2rem] border border-accent/10 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4">Newsletter</h4>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed mb-6">
                   Receive pre-launch protocols for upcoming townships.
                </p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="email" 
                      placeholder="EMAIL ADDRESS" 
                      className="w-full bg-primary/40 border border-white/10 rounded-xl px-5 py-4 focus:border-accent text-white placeholder:text-white/20 text-[10px] font-bold tracking-widest outline-none transition-all"
                    />
                    <button className="w-full bg-accent text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all duration-500">
                       Subscribe
                    </button>
                </form>
              </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex flex-col items-center md:items-start gap-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
                 © {currentYear} {COMPANY_NAME}. All Rights Reserved.
              </span>
           </div>
           
           <div className="flex flex-wrap justify-center gap-8">
             {['Terms', 'Privacy', 'Engineering'].map((item, i) => (
               <Link key={i} to="/" className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-accent transition-colors">
                  {item}
               </Link>
             ))}
           </div>
        </div>
      </div>
    </footer>
  );
}