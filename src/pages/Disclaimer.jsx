import { motion } from 'motion/react';

export default function Disclaimer() {
  return (
    <div className="bg-luxury-white min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.5em]">Project Notice</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary uppercase mb-12">
            LEGAL <span className="font-serif italic font-light text-accent lowercase">disclaimer</span>
          </h1>
          
          <div className="space-y-16 text-primary/60 font-light leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">1. Artistic Impressions</h2>
              <p>
                All photographs, walkthroughs, renders, and decorative floor plans displayed on this platform are artistic impressions. They are intended only to illustrate the luxury lifestyle and design philosophy we aim to deliver.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">2. Specification Variance</h2>
              <p>
                Real Estate Builders & Construction Company reserves the right to modify specifications, layouts, and materials during the construction phase based on site logic, technical engineering, or regulatory requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">3. Professional Advice</h2>
              <p>
                The information provided on this website does not constitute a legal offer. We recommend all prospective buyers to verify project details (including RERA numbers) independently before making a financial commitment.
              </p>
            </section>

            <div className="pt-16 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30">
                  Real Estate Builders Compliance
               </p>
               <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">UP RERA Registered Projects Only</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
