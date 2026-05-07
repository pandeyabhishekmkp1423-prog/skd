import { motion } from 'motion/react';
import { Maximize2, Search } from 'lucide-react';

const images = [
  { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800', title: 'Corporate Headquarters' },
  { url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800', title: 'Zenith Heights Lobby' },
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000', title: 'Luxury Villa Interior' },
  { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800', title: 'Private Garden Space' },
  { url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800', title: 'Masterplan Vision' },
  { url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800', title: 'Collaborative Spaces' },
  { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', title: 'Signature Infinity Pool' },
  { url: 'https://images.unsplash.com/photo-1448630360428-65ff2c191c79?auto=format&fit=crop&q=80&w=800', title: 'Urban Skyline Integration' },
  { url: 'https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80&w=800', title: 'Modern Facade Detail' },
];

export default function Gallery() {
  return (
    <div className="bg-luxury-white min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-32">
           <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent text-xs font-bold uppercase tracking-[0.5em]">The Visual Archive</span>
              <div className="w-12 h-px bg-accent" />
           </div>
           <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-primary uppercase leading-tight">
              CURATED <br /> <span className="font-serif italic font-light text-accent lowercase">perspectives</span>
           </h1>
        </div>
        
        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-[3rem] overflow-hidden group border border-gray-100 shadow-xl bg-white"
            >
               <img 
                 src={img.url} 
                 alt={img.title} 
                 className="w-full h-auto object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
               />
               
               {/* Hover Overlay */}
               <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <p className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-2">Excellence in Design</p>
                     <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-6">{img.title}</h3>
                     <div className="flex items-center space-x-4">
                        <button className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300">
                           <Maximize2 size={18} />
                        </button>
                        <button className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300">
                           <Search size={18} />
                        </button>
                     </div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-32 flex flex-col items-center">
           <p className="text-primary/30 text-[10px] font-black uppercase tracking-[0.5em] mb-8">End of Collection</p>
           <button className="px-12 py-5 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-accent transition-all duration-500 shadow-2xl shadow-primary/20">
              Request Project Catalogue
           </button>
        </div>
      </div>
    </div>
  );
}
