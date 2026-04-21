
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-0 relative overflow-hidden bg-charcoal-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Partnership / B2B Section */}
        <div className="relative p-16 md:p-32 flex flex-col justify-center min-h-[500px] border-b lg:border-b-0 lg:border-r border-white/10 group hover:bg-charcoal transition-colors duration-700">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-sans text-[10px] text-bronze uppercase tracking-[0.3em] font-medium mb-6">Corporate Inquiry</p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl text-warm-white mb-6 leading-tight">
              Business &<br /> Global Partnership
            </h2>
            <p className="font-sans text-sm md:text-base text-white/50 max-w-sm leading-relaxed mb-12">
              For B2B distribution, educational collaboration, and premium franchise inquiries, connect directly with our strategic planning team.
            </p>
            <a href="#" className="inline-flex items-center gap-4 text-warm-white group/btn">
              <span className="font-sans text-sm tracking-widest uppercase border-b border-white/20 pb-1 group-hover/btn:border-gold transition-colors">Contact Corporate</span>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transform group-hover/btn:bg-white group-hover/btn:text-charcoal transition-all">
                <ArrowUpRight size={14} />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Consumer / Brand Section */}
        <div className="relative p-16 md:p-32 flex flex-col justify-center min-h-[500px] group hover:bg-charcoal transition-colors duration-700">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-1000"></div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <p className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] font-medium mb-6">Explore the Brand</p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl text-warm-white mb-6 leading-tight">
              DIVALINE <br /> Collection
            </h2>
            <p className="font-sans text-sm md:text-base text-white/50 max-w-sm leading-relaxed mb-12">
              Discover our platform brand, integrating professional-grade cosmetic formulations and state-of-the-art aesthetic routines.
            </p>
            <a href="#" className="inline-flex items-center gap-4 text-warm-white group/btn">
              <span className="font-sans text-sm tracking-widest uppercase border-b border-white/20 pb-1 group-hover/btn:border-gold transition-colors">Visit Official Mall</span>
              <div className="w-8 h-8 rounded-full border border-gold border-white/20 flex items-center justify-center transform group-hover/btn:bg-gold group-hover/btn:text-white group-hover/btn:border-transparent transition-all">
                <ArrowUpRight size={14} />
              </div>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
