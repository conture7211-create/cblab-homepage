
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const BrandStructure = () => {
  return (
    <section id="brands" className="py-32 bg-ivory relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-charcoal text-gold flex items-center justify-center font-serif text-2xl rounded-full mb-8 shadow-xl"
          >
            C&B
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gold font-sans text-[10px] uppercase tracking-[0.3em] font-medium mb-4"
          >
            Brand Architecture
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl lg:text-5xl text-charcoal-dark mb-6 leading-[1.2]"
          >
            One Corporate House.<br />
            <span className="italic text-bronze">Distinct Brand Identities.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sans text-charcoal-light max-w-xl text-sm leading-relaxed"
          >
            As a parent company, C&B Lab incubates and manages a portfolio of high-performance beauty divisions, structuring them for autonomous growth and global reach.
          </motion.p>
        </div>

        {/* Brand Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto relative relative z-10">
          
          {/* DIVALINE Brand Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group block relative bg-warm-white p-10 md:p-14 border border-charcoal/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500"
          >
            <div className="absolute top-8 right-8 text-charcoal/20 group-hover:text-gold transition-colors duration-500">
              <ArrowUpRight strokeWidth={1} size={32} />
            </div>
            
            <p className="font-sans text-[10px] text-bronze uppercase tracking-[0.3em] mb-8 font-medium">Beauty Platform Brand</p>
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal-dark mb-6 tracking-tight">DIVALINE</h3>
            <div className="w-8 h-px bg-gold/50 mb-6 group-hover:w-16 transition-all duration-500"></div>
            
            <p className="font-sans text-sm text-charcoal-light leading-relaxed mb-8">
              A high-performance product line built for scalability. Synergizing active formulations with elegant aesthetic routines for the modern global consumer.
            </p>
            
            <div className="flex gap-4">
              <span className="text-[10px] uppercase font-sans tracking-widest text-charcoal-dark bg-charcoal/5 px-3 py-1">Skincare</span>
              <span className="text-[10px] uppercase font-sans tracking-widest text-charcoal-dark bg-charcoal/5 px-3 py-1">Retail</span>
            </div>
          </motion.div>

          {/* LONG-TIME-LINER Brand Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group block relative bg-charcoal p-10 md:p-14 border border-charcoal-dark hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500"
          >
            <div className="absolute top-8 right-8 text-white/20 group-hover:text-gold transition-colors duration-500">
              <ArrowUpRight strokeWidth={1} size={32} />
            </div>
            
            <p className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] mb-8 font-medium">Professional Division</p>
            <h3 className="font-serif text-3xl md:text-4xl text-warm-white mb-6 tracking-tight">LONG-TIME-LINER</h3>
            <div className="w-8 h-px bg-gold/50 mb-6 group-hover:w-16 transition-all duration-500"></div>
            
            <p className="font-sans text-sm text-white/60 leading-relaxed mb-8">
              The apex of premium PMU technology. A strategic collaboration delivering uncompromising German precision standards, professional certification, and elite training.
            </p>
            
            <div className="flex gap-4">
              <span className="text-[10px] uppercase font-sans tracking-widest text-warm-white bg-white/10 px-3 py-1">Professional</span>
              <span className="text-[10px] uppercase font-sans tracking-widest text-warm-white bg-white/10 px-3 py-1">Education</span>
            </div>
          </motion.div>

        </div>
        
        {/* Subtle Scalability Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="font-sans text-xs text-charcoal/40 uppercase tracking-[0.2em]">Future Expansion & Acquisitions Architecture</p>
          <div className="w-px h-12 bg-charcoal/10 mx-auto mt-4"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default BrandStructure;
