import { motion } from 'motion/react';
import { Calendar, Phone, ArrowRight, Sparkles } from 'lucide-react';

export default function BookingCTA() {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[5rem] bg-primary overflow-hidden p-16 md:p-32 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)] group border-[0.5rem] border-ivory/10">
           {/* Background Elements */}
           <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-[-15deg] translate-x-20 transition-all duration-1000 group-hover:bg-accent/20" />
           <div className="absolute inset-0 architectural-grid opacity-5 pointer-events-none" />
           
           <div className="flex flex-col lg:flex-row items-center justify-between gap-24 relative z-10">
              <div className="max-w-3xl text-left">
                 <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center space-x-6 mb-12 px-8 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
                 >
                    <Sparkles size={14} className="text-accent" />
                    <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Elite Consultancy Program</span>
                 </motion.div>
                 
                 <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] mb-12 uppercase">
                    ESTABLISH YOUR <br /> <span className="text-gradient-gold">LEGACY</span> <br /> 
                    <span className="font-serif italic font-light text-accent lowercase">investment</span>
                 </h2>
                 
                 <p className="text-white/40 text-xl font-light leading-relaxed mb-16 max-w-xl">
                   Discover the pinnacle of Luckno's luxury marketplace. Connect with our principal consultants for a private briefing on our upcoming residential ventures.
                 </p>

                 <div className="flex flex-col sm:flex-row items-center gap-8">
                    <button className="w-full sm:w-auto bg-accent text-white px-16 py-7 rounded-[2rem] font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:bg-white hover:text-primary transition-all duration-700 shadow-2xl shadow-accent/20">
                       <Calendar size={18} />
                       <span>Schedule Visit</span>
                    </button>
                    <a href="tel:+919990001111" className="w-full sm:w-auto flex items-center justify-center gap-6 group">
                       <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-accent group-hover:bg-accent transition-all duration-500">
                          <Phone size={20} />
                       </div>
                       <div className="flex flex-col text-left">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/40">VIP Concierge</span>
                          <span className="text-xl font-black text-white hover:text-accent transition-colors">+91 999 000 1111</span>
                       </div>
                    </a>
                 </div>
              </div>

              {/* Exclusive Reward Card */}
              <motion.div
                initial={{ opacity: 0, rotate: 10 }}
                whileInView={{ opacity: 1, rotate: -3 }}
                viewport={{ once: true }}
                className="w-full lg:w-[400px] bg-ivory rounded-[4rem] p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative border-[0.75rem] border-white ring-1 ring-primary/5"
              >
                 <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl z-10 border-4 border-ivory transform -rotate-12 group-hover:rotate-12 transition-transform duration-1000">
                    <div className="flex flex-col items-center">
                       <span className="text-4xl font-black text-accent uppercase tracking-tighter">05%</span>
                       <span className="text-[8px] uppercase font-black tracking-widest">Early Benefit</span>
                    </div>
                 </div>
                 
                 <h4 className="text-4xl font-black text-primary mb-10 tracking-tighter uppercase leading-[0.9]">FOUNDING <br /> MEMBERS <br /> PRIVILEGE</h4>
                 <div className="space-y-6 mb-12">
                    {[
                      'Priority Allotment',
                      'Custom Space Plan',
                      'Club Sovereign Access',
                      'Concierge Priority'
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4 text-primary/40 text-[10px] font-black uppercase tracking-[0.2em]">
                         <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                         <span>{benefit}</span>
                      </div>
                    ))}
                 </div>
                 
                 <div className="flex items-center justify-between border-t border-primary/5 pt-8">
                    <span className="text-[8px] font-black uppercase tracking-widest text-primary/30">Limited Engagement</span>
                    <ArrowRight size={32} className="text-accent" />
                 </div>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
