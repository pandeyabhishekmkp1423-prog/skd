import { motion } from 'motion/react';
import { Briefcase, ArrowRight, Star, Globe, Heart } from 'lucide-react';

const jobs = [
  { title: 'Project Director', dept: 'Operations', type: 'Full-Time', salary: 'Competitive' },
  { title: 'Senior BIM Specialist', dept: 'Engineering', type: 'Full-Time', salary: 'Attractive' },
  { title: 'Luxury Sales Consultant', dept: 'Sales', type: 'Full-Time', salary: 'High Incentives' },
  { title: 'Brand Storyteller', dept: 'Marketing', type: 'Contract', salary: 'Per Project' },
];

const perks = [
  { icon: <Star />, title: 'Premium Spaces', desc: 'Work from our award-winning Signature Towers.' },
  { icon: <Globe />, title: 'Global Standards', desc: 'Training with international consultants.' },
  { icon: <Heart />, title: 'Bespoke Benefits', desc: 'Healthcare and luxury lifestyle perks.' },
];

export default function Careers() {
  return (
    <div className="bg-luxury-white min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.5em]">Join Our Collective</span>
            <div className="w-12 h-px bg-accent" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-primary uppercase leading-tight mb-12">
             BUILDING <br /> THE <span className="font-serif italic font-light text-accent lowercase">future</span>
          </h1>
          <p className="text-primary/40 text-xl font-light leading-relaxed">
             We are looking for visionaries who want to reshape the horizon of Lucknow. At Real Estate Builders, we don't just hire employees; we partner with creators.
          </p>
        </div>

        {/* Perks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
           {perks.map((perk, i) => (
             <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-gray-50 group hover:bg-primary transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center mb-8 scale-110 shadow-lg group-hover:rotate-12 transition-transform">
                   {perk.icon}
                </div>
                <h4 className="text-xl font-bold text-primary uppercase tracking-tight mb-4 group-hover:text-white transition-colors">{perk.title}</h4>
                <p className="text-primary/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{perk.desc}</p>
             </div>
           ))}
        </div>

        {/* Jobs List */}
        <div className="max-w-5xl mx-auto">
           <div className="flex items-center justify-between mb-12 px-8">
              <h2 className="text-3xl font-bold text-primary uppercase tracking-tighter">Open <span className="text-accent italic font-serif lowercase font-light">opportunities</span></h2>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">{jobs.length} Positions Available</span>
           </div>
           
           <div className="space-y-6">
             {jobs.map((job, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="group flex flex-col md:flex-row items-center justify-between p-10 rounded-[3rem] bg-white border border-gray-50 shadow-sm hover:shadow-2xl hover:border-accent/30 transition-all cursor-pointer"
               >
                 <div className="flex items-center space-x-8 mb-8 md:mb-0">
                    <div className="w-14 h-14 rounded-2xl bg-luxury-white flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                       <Briefcase size={24} />
                    </div>
                    <div>
                       <h3 className="text-2xl font-bold text-primary tracking-tight uppercase group-hover:text-accent transition-colors mb-2">{job.title}</h3>
                       <div className="flex items-center space-x-4">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-primary/30">{job.dept}</span>
                          <div className="w-1 h-1 bg-accent rounded-full" />
                          <span className="text-[10px] uppercase font-bold tracking-widest text-primary/30">{job.type}</span>
                          <div className="w-1 h-1 bg-accent rounded-full" />
                          <span className="text-[10px] uppercase font-bold tracking-widest text-accent">{job.salary}</span>
                       </div>
                    </div>
                 </div>
                 <button className="flex items-center space-x-4 px-8 py-4 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-accent transition-all duration-300">
                    <span>Inquire Now</span>
                    <ArrowRight size={16} />
                 </button>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
