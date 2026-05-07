import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Sparkles, Navigation } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

export default function Contact() {
  return (
    <div className="bg-luxury-white min-h-screen pt-40 pb-40">
      {/* Background Architectural Patterns */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-ivory/20 pointer-events-none -z-10 skew-x-[15deg] -translate-x-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-32">
          {/* Info Side */}
          <div className="lg:w-[45%]">
             <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
             >
                <div className="flex items-center space-x-6 mb-12">
                  <div className="w-16 h-px bg-accent" />
                  <div className="flex items-center gap-2">
                     <Sparkles size={14} className="text-accent" />
                     <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em]">Liaison Office</span>
                  </div>
                </div>
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-primary uppercase leading-[0.85] mb-20">
                   CONNECT <br /> <span className="text-gradient-gold">WITH THE</span> <br /> <span className="font-serif italic font-light text-accent lowercase">vanguard</span>
                </h1>
                
                <div className="space-y-16">
                   <div className="flex items-start space-x-8 group">
                      <div className="w-20 h-20 rounded-[2rem] bg-white shadow-2xl flex items-center justify-center text-accent shrink-0 border border-primary/5 group-hover:bg-accent group-hover:text-white transition-all duration-700">
                         <MapPin size={28} />
                      </div>
                      <div className="pt-2">
                         <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30 mb-3 leading-none">Global Headquarters</h4>
                         <p className="text-primary text-lg font-black uppercase tracking-tighter leading-tight">
                            Suite 808, Signature Business Hub, <br /> Gomti Nagar, Lucknow - 226010
                         </p>
                      </div>
                   </div>

                   <div className="flex items-start space-x-8 group">
                      <div className="w-20 h-20 rounded-[2rem] bg-white shadow-2xl flex items-center justify-center text-accent shrink-0 border border-primary/5 group-hover:bg-accent group-hover:text-white transition-all duration-700">
                         <Phone size={28} />
                      </div>
                      <div className="pt-2">
                         <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30 mb-3 leading-none">Direct Client Line</h4>
                         <p className="text-primary text-2xl font-black tracking-tighter uppercase leading-none">+91 999 000 1111</p>
                         <div className="flex items-center gap-4 mt-4">
                            <Clock size={12} className="text-accent" />
                            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary/40">Response Protocol: 09:00 - 20:00 IST</span>
                         </div>
                      </div>
                   </div>

                   <div className="flex items-start space-x-8 group">
                      <div className="w-20 h-20 rounded-[2rem] bg-white shadow-2xl flex items-center justify-center text-accent shrink-0 border border-primary/5 group-hover:bg-accent group-hover:text-white transition-all duration-700">
                         <Mail size={28} />
                      </div>
                      <div className="pt-2">
                         <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30 mb-3 leading-none">Formal Inquiry</h4>
                         <p className="text-primary text-2xl font-black tracking-tighter uppercase leading-none">OFFICE@SKDGROUPS.IN</p>
                         <p className="text-primary/40 text-[9px] font-bold uppercase tracking-[0.2em] mt-3">Priority briefing available for elite members</p>
                      </div>
                   </div>
                </div>

                {/* Social Connect */}
                <div className="mt-24 pt-16 border-t border-primary/5 flex flex-col items-start gap-8">
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/20">Digital Footprint</span>
                   <div className="flex gap-12">
                      {['LINKEDIN', 'INSTAGRAM', 'FACEBOOK', 'TWITTER'].map((s) => (
                        <a key={s} href="#" className="group relative">
                           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 group-hover:text-accent transition-colors">{s}</span>
                           <div className="absolute -bottom-2 left-0 w-0 h-px bg-accent group-hover:w-full transition-all" />
                        </a>
                      ))}
                   </div>
                </div>
             </motion.div>
          </div>

          {/* Form Side */}
          <div className="lg:w-[55%]">
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-ivory/50 backdrop-blur-2xl p-16 md:p-24 rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative overflow-hidden border-[1rem] border-white"
              >
                 {/* Architectural Pattern Overlay */}
                 <div className="absolute inset-0 architectural-grid opacity-5 pointer-events-none" />
                 
                 <div className="flex items-center space-x-6 mb-16 relative">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse shadow-[0_0_15px_rgba(200,164,93,0.5)]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Inquiry Transmission Active</span>
                 </div>

                 <form className="space-y-12 relative" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                       <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 ml-4">Authorized Name</label>
                          <input type="text" className="w-full bg-white border-2 border-transparent rounded-[2rem] px-10 py-7 text-primary placeholder:text-primary/20 focus:border-accent focus:bg-white outline-none transition-all shadow-xl shadow-black/5" placeholder="John Doe" />
                       </div>
                       <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 ml-4">Corporate Email</label>
                          <input type="email" className="w-full bg-white border-2 border-transparent rounded-[2rem] px-10 py-7 text-primary placeholder:text-primary/20 focus:border-accent focus:bg-white outline-none transition-all shadow-xl shadow-black/5" placeholder="contact@domain.com" />
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                       <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 ml-4">Contact Number</label>
                          <input type="tel" className="w-full bg-white border-2 border-transparent rounded-[2rem] px-10 py-7 text-primary placeholder:text-primary/20 focus:border-accent focus:bg-white outline-none transition-all shadow-xl shadow-black/5" placeholder="+91 XXX XXX XXXX" />
                       </div>
                       <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 ml-4">Venture Pursuit</label>
                          <select className="w-full bg-white border-2 border-transparent rounded-[2rem] px-10 py-7 text-primary focus:border-accent focus:bg-white outline-none transition-all shadow-xl shadow-black/5 appearance-none cursor-pointer">
                             <option>Flagship Residential Towers</option>
                             <option>Elite Villa Collection</option>
                             <option>Prime Commercial Hubs</option>
                             <option>Premium Land Plots</option>
                          </select>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 ml-4">Bespoke Requirements</label>
                       <textarea rows="6" className="w-full bg-white border-2 border-transparent rounded-[3rem] px-10 py-8 text-primary placeholder:text-primary/20 focus:border-accent focus:bg-white outline-none transition-all resize-none shadow-xl shadow-black/5" placeholder="Outline your luxury vision..."></textarea>
                    </div>

                    <div className="pt-8">
                       <button className="w-full py-8 bg-primary text-white rounded-[2.5rem] font-black uppercase tracking-[0.5em] text-xs flex items-center justify-center gap-6 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.4)] hover:bg-accent transition-all duration-700 group overflow-hidden relative">
                          <span className="relative z-10 transition-transform group-hover:scale-110">Transmit Inquiry</span>
                          <Send size={24} className="relative z-10 group-hover:translate-x-4 transition-transform" />
                          <div className="absolute inset-0 bg-gradient-to-r from-accent via-transparent to-accent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-20" />
                       </button>
                    </div>
                 </form>
              </motion.div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-40 relative aspect-[21/7] rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-[1rem] border-white bg-ivory">
           <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" alt="Lucknow Map" className="w-full h-full object-cover grayscale opacity-30 scale-110" />
           <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/10" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-ivory p-16 rounded-[4rem] text-center border border-white/20 shadow-2xl backdrop-blur-xl">
                 <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center text-accent mx-auto mb-10 shadow-2xl border border-white/10">
                    <Navigation className="w-10 h-10 animate-bounce" />
                 </div>
                 <h2 className="text-4xl font-black text-primary uppercase tracking-tighter mb-4">VANTAGE COORDINATES</h2>
                 <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/30">Lucknow Digital Hub Integration Pending</p>
                 <div className="mt-8 flex justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div className="w-20 h-px bg-primary/10 self-center" />
                    <div className="w-2 h-2 rounded-full bg-accent" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
