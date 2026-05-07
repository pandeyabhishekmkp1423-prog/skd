import { motion } from 'motion/react';

export default function RefundPolicy() {
  return (
    <div className="bg-luxury-white min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.5em]">Financial Integrity</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary uppercase mb-12">
            REFUND <span className="font-serif italic font-light text-accent lowercase">policy</span>
          </h1>
          
          <div className="space-y-16 text-primary/60 font-light leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">1. Cancellation Window</h2>
              <p>
                We understand that visions can shift. If you choose to cancel your booking within 15 days of the initial reservation, we offer a streamlined refund process, excluding a minor administrative fee for document processing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">2. Processing Protocals</h2>
              <p>
                Refunds are processed within 30 working days from the date of official cancellation approval. All funds are remitted to the original source account via secure banking channels in accordance with RERA guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">3. Administrative Adjustments</h2>
              <p>
                Cancellations requested after the 15-day "grace period" will be subject to a standard deduction to cover the allocation costs, legal registration, and marketing expenses incurred by the company.
              </p>
            </section>

            <div className="pt-16 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30">
                  Finance & Audit Department
               </p>
               <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">Standard Operating Procedure 3.0</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
