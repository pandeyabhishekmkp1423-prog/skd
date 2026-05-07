import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';
import { cn } from '../../utils/utils';

const testimonials = [
  {
    name: 'Siddharth Malhotra',
    role: 'Managing Director, Horizon Group',
    content: 'The architectural precision in Signature Towers is transformative. It is rare to find a developer who balances structural integrity with such high-end artistic vision.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    rating: 5
  },
  {
    name: 'Meera Deshmukh',
    role: 'EVP, Global Operations',
    content: 'MAA VINDHYAVASHINI doesn’t just build houses; they create environments. The sense of security and community in their smart townships is exactly what my family needed.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300',
    rating: 5
  },
  {
    name: 'Dr. Sameer Khan',
    role: 'Senior Surgeon',
    content: 'The level of professionalism and the speed of delivery by the SKD team is unprecedented. Their legacy in Lucknow real estate is clearly visible in the finish of their projects.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    rating: 5
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-40 bg-luxury-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ivory/30 -z-10 skew-x-[-15deg] translate-x-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-32">
          <div className="w-full lg:w-2/5">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center space-x-6 mb-10">
                  <div className="w-16 h-px bg-accent" />
                  <div className="flex items-center gap-2">
                     <Sparkles size={14} className="text-accent" />
                     <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em]">The legacy of trust</span>
                  </div>
                </div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-primary leading-[0.85] mb-16 uppercase">
                   ESTEEMED <br /> <span className="text-gradient-gold">REVIEWS</span>
                </h2>
                
                <div className="flex items-center space-x-6">
                   <button 
                    onClick={prev}
                    className="w-20 h-20 rounded-[2rem] border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-700 shadow-xl group"
                   >
                     <ChevronLeft size={28} className="text-accent group-hover:scale-125 transition-transform" />
                   </button>
                   <button 
                    onClick={next}
                    className="w-20 h-20 rounded-[2rem] border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-700 shadow-xl group"
                   >
                     <ChevronRight size={28} className="text-accent group-hover:scale-125 transition-transform" />
                   </button>
                </div>
                
                <div className="mt-16 flex items-center gap-4">
                   <div className="flex -space-x-4">
                      {testimonials.map((t, i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-lg">
                           <img src={t.avatar} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all cursor-crosshair" />
                        </div>
                      ))}
                   </div>
                   <div className="flex flex-col">
                      <div className="flex gap-1 mb-1">
                         {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-accent fill-accent" />)}
                      </div>
                      <span className="text-[8px] font-black uppercase tracking-widest text-primary/40">From 500+ Luxury Homeowners</span>
                   </div>
                </div>
             </motion.div>
          </div>

          <div className="w-full lg:w-3/5 relative">
             <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.05, x: -50 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-primary p-16 md:p-24 rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[0.5rem] border-white relative overflow-hidden"
                >
                   <Quote className="absolute top-16 right-16 w-32 h-32 text-white/5 pointer-events-none" />
                   
                   <div className="flex items-center space-x-1 mb-12">
                      {[...Array(testimonials[index].rating || 5)].map((_, i) => (
                        <Star key={i} size={18} className="text-accent fill-accent shadow-glow shadow-accent/20" />
                      ))}
                   </div>
                   
                   <p className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-16 uppercase italic">
                     "{testimonials[index].content}"
                   </p>
                   
                   <div className="flex items-center justify-between border-t border-white/10 pt-16">
                      <div className="flex items-center space-x-8">
                         <div className="w-24 h-24 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-accent rotate-6">
                            <img src={testimonials[index].avatar} alt={testimonials[index].name} className="w-full h-full object-cover" />
                         </div>
                         <div className="flex flex-col">
                            <h4 className="text-2xl font-black text-white uppercase tracking-tighter leading-none mb-2">{testimonials[index].name}</h4>
                            <p className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">{testimonials[index].role}</p>
                         </div>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center opacity-30">
                         <Sparkles size={24} className="text-white" />
                      </div>
                   </div>
                </motion.div>
             </AnimatePresence>
             
             {/* Dynamic Counters and Navigation progress etc */}
             <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 px-12 py-6 bg-white shadow-2xl rounded-[2.5rem]">
                {testimonials.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "transition-all duration-700 h-1.5 rounded-full",
                      index === i ? "w-16 bg-primary" : "w-4 bg-primary/10"
                    )}
                  />
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
