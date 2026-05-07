import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-luxury-white min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.5em]">Legal Framework</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary uppercase mb-12">
            PRIVACY <span className="font-serif italic font-light text-accent lowercase">policy</span>
          </h1>
          <p className="text-primary/40 text-xs font-bold uppercase tracking-widest mb-12 border-b border-gray-100 pb-8">Last Updated: October 24, 2024</p>
          
          <div className="space-y-16 text-primary/60 font-light leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">1. Commitment to Privacy</h2>
              <p>
                At Real Estate Builders & Construction Company, we believe your personal data is as valuable as your investment in our properties. This policy outlines how we handle the information you entrust to us across our Lucknow-based developments.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">2. Data Collection & Analytics</h2>
              <p>
                We collect information necessary to facilitate your property search, documentation, and the eventual handover of your luxury residence. This includes identification documents required by RERA and the Development Authority.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">3. Third-Party Disclosures</h2>
              <p>
                We do not sell your personal information. Data is shared only with registered banking partners for home loans, government bodies for registration, and maintenance departments to ensure the quality of your stay.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">4. Digital Security</h2>
              <p>
                Our digital platforms utilize industry-standard encryption to protect your financial and personal interactions. Access to your property documents is restricted to authorized personnel only.
              </p>
            </section>

            <div className="pt-16 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 text-center md:text-left">
                  Lucknow Signature Towers, <br /> Compliance & Ethics Division
               </p>
               <button className="text-accent font-bold uppercase tracking-widest text-[10px] border-b border-accent/20 pb-1 hover:border-accent transition-all">
                  Download Full PDF Version
               </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
