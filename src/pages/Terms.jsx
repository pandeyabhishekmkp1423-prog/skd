import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="bg-luxury-white min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.5em]">Service Agreement</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary uppercase mb-12">
            TERMS <span className="font-serif italic font-light text-accent lowercase">of service</span>
          </h1>
          
          <div className="space-y-16 text-primary/60 font-light leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">1. Engagement</h2>
              <p>
                By interacting with our services, digital platforms, or visiting our corporate office at Signature Towers, you agree to be bound by the protocols of Real Estate Builders & Construction Company.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">2. Property Reservations</h2>
              <p>
                Reservations for villas, apartments, or plots are subject to the specific RERA terms of each project. All financial transactions are processed via secure channels and documented as per the laws of Uttar Pradesh.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">3. Construction Timelines</h2>
              <p>
                While we strive for absolute precision in delivery, timelines are estimated based on civil engineering standards and regulatory approvals. We maintain a transparent milestone tracking system for all allottees.
              </p>
            </section>

            <div className="pt-16 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30">
                  Legal Department, Lucknow HQ
               </p>
               <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">Version 2.4 | 2024</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
