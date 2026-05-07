import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, ArrowUpRight } from 'lucide-react';

const posts = [
  { id: 1, title: 'The Evolution of Luxury Living in Lucknow', date: 'Oct 24, 2024', author: 'Vikram Sethi', excerpt: 'How architectural trends are shifting towards sustainable luxury in the hearts of Uttar Pradesh.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000' },
  { id: 2, title: 'Sustainable Construction: Our Commitment', date: 'Oct 12, 2024', author: 'Reema Kapoor', excerpt: 'Exploring the advanced materials and engineering standards that define our latest projects.', img: 'https://images.unsplash.com/photo-1503387762-592e5999e724?auto=format&fit=crop&q=80&w=1000' },
  { id: 3, title: 'The Future of Gomti Nagar Extension', date: 'Sep 28, 2024', author: 'Aditya Gupta', excerpt: 'An insightful look into why this region is becoming the most coveted real estate destination.', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000' },
];

export default function Blog() {
  return (
    <div className="bg-luxury-white min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent text-xs font-bold uppercase tracking-[0.5em]">The Journal</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-primary uppercase leading-none">
              INSIGHTS <br /> & <span className="font-serif italic font-light text-accent lowercase">visions</span>
            </h1>
          </div>
          <p className="text-primary/40 text-lg font-light leading-relaxed max-w-sm mb-4">
             Exploring the intersection of architectural heritage and modern luxury living.
          </p>
        </div>

        {/* Featured Post Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[21/9] rounded-[4rem] overflow-hidden mb-32 group cursor-pointer shadow-2xl"
        >
           <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" alt="Featured" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
           <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
           <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row items-end justify-between gap-8">
              <div className="max-w-xl">
                 <span className="px-4 py-1 glass rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-6 inline-block">Featured Story</span>
                 <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none uppercase">The Masterplan behind <br /> Signature Towers</h2>
              </div>
              <button className="flex items-center space-x-4 px-10 py-5 bg-accent text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300">
                 Read Article
                 <ArrowUpRight size={18} />
              </button>
           </div>
        </motion.div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden mb-10 shadow-xl border border-gray-100">
                 <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="flex items-center space-x-6 mb-6">
                 <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-accent">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                 </div>
                 <div className="w-1 h-1 bg-gray-200 rounded-full" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">{post.author}</span>
              </div>

              <h3 className="text-2xl font-bold text-primary tracking-tight mb-4 group-hover:text-accent transition-colors uppercase leading-none">{post.title}</h3>
              <p className="text-primary/40 text-sm font-light leading-relaxed mb-8 line-clamp-2">{post.excerpt}</p>
              
              <button className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-colors">
                 <span>Read Story</span>
                 <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
