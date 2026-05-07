import { motion } from 'motion/react';
import { Play, Maximize2, Sparkles } from 'lucide-react';

const videos = [
  {
    title: 'Signature Towers: The Vision',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    category: 'Virtual Film',
    time: '03:45'
  },
  {
    title: 'Architectural Excellence',
    thumbnail: 'https://images.unsplash.com/photo-1503387762-592e5999e724?auto=format&fit=crop&q=80&w=1200',
    category: 'Engineering Story',
    time: '02:20'
  },
  {
    title: 'Vindhyavashini Lifestyle',
    thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    category: 'Experience Film',
    time: '04:10'
  }
];

export default function VideoGallery() {
  return (
    <section className="py-16 md:py-28 bg-ivory/20 relative overflow-hidden">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 text-left">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 mb-10"
            >
              <div className="w-16 h-px bg-accent" />
              <div className="flex items-center gap-2">
                 <Sparkles size={14} className="text-accent" />
                 <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em]">The cinematic archive</span>
              </div>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-primary uppercase leading-[0.85]">
               IMMERIVE <br /> <span className="text-gradient-gold">VISUALS</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-4 text-primary opacity-40 hover:opacity-100 hover:text-accent transition-all font-black uppercase tracking-[0.3em] text-[10px] border-b border-primary/20 pb-2">
             <span>Access Full Archive</span>
             <Maximize2 size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {videos.map((video, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.15, duration: 1 }}
               className="group relative aspect-[14/16] rounded-[4rem] overflow-hidden shadow-2xl bg-primary border-[0.5rem] border-white ring-1 ring-primary/5"
             >
                <img src={video.thumbnail} alt={video.title} className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                   <motion.button 
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-24 h-24 rounded-full glass border border-white/40 flex items-center justify-center text-white shadow-[0_0_50px_rgba(200,164,93,0.3)] backdrop-blur-xl relative group/play"
                   >
                     <div className="absolute inset-0 rounded-full border border-accent animate-ping opacity-0 group-hover/play:opacity-40" />
                     <Play size={40} className="fill-white ml-1.5 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                   </motion.button>
                </div>

                <div className="absolute bottom-12 left-12 right-12 text-left">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-px bg-accent" />
                      <p className="text-accent text-[10px] font-black uppercase tracking-[0.4em] drop-shadow-md">{video.category}</p>
                   </div>
                   <h4 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">{video.title}</h4>
                </div>
                
                {/* Time Overlay */}
                <div className="absolute top-12 right-12 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-2xl border border-white/20">
                   <span className="text-[10px] font-black text-white tracking-[0.3em] uppercase">MSR: {video.time}</span>
                </div>
                
                {/* Interactive border reveal */}
                <div className="absolute inset-0 border-[2px] border-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-4 rounded-[3rem] pointer-events-none" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
