import { motion } from 'framer-motion';

const DivalinePlatform = () => {
  return (
    <section className="py-32 lg:py-48 bg-champagne text-deep-black relative overflow-hidden">
      
      {/* Soft overlay gradient for dimension */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-ivory via-transparent to-soft-stone opacity-50 z-0" />

      <div className="container relative z-10 mx-auto px-8 md:px-16 mb-24 lg:mb-40 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl flex flex-col items-center"
        >
          <span className="inline-block px-5 py-2 border border-warm-taupe/40 text-warm-taupe font-inter text-[11px] md:text-[13px] tracking-[0.4em] uppercase mb-12">
            Beauty Platform Brand
          </span>
          <h2 className="font-serif text-[64px] md:text-[88px] lg:text-[110px] text-deep-black leading-[1.05] tracking-tight mb-10">
            DIVALINE
          </h2>
          <p className="font-serif text-[28px] md:text-[36px] text-warm-taupe leading-[1.4] mb-12 tracking-tight italic">
            아름다움에 대한 진취적인 해석, 일상을 변화시키는 라이프스타일 뷰티.
          </p>
          <p className="font-sans text-[16px] md:text-[18px] text-deep-black/80 font-light leading-[2.1] max-w-[640px] break-keep">
            아름다움을 유지하는 일은 특별한 날이 아닌 일상이 되어야 합니다. 전문가의 섬세한 케어를 홈뷰티 디바이스와 고기능 스킨케어로 재설계하는 DIVALINE은, 아름다움이 삶 속으로 부드럽게 스며들도록 돕는 혁신적 에코시스템입니다.
          </p>
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-12 max-w-[1500px]">
        {/* Soft, beautiful grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="md:col-span-8 h-[60vh] lg:h-[85vh] w-full relative group overflow-hidden bg-soft-stone"
          >
            <div className="absolute inset-0 bg-deep-black/10 mix-blend-multiply z-10 transition-opacity duration-[2s] group-hover:opacity-0" />
            <img 
              src="https://images.unsplash.com/photo-1615397323286-63e8137f8f60?q=80&w=2600&auto=format&fit=crop" 
              alt="Soft Beauty Lifestyle" 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 object-center transition-transform duration-[4s] ease-out"
            />
            {/* Elegant overlay text block */}
            <div className="absolute bottom-10 right-10 bg-warm-ivory p-12 lg:p-16 z-20 w-[85%] md:w-3/5 shadow-2xl">
              <h4 className="font-serif text-[32px] lg:text-[40px] text-deep-black leading-[1.1] mb-6">Innovation Bridge</h4>
              <p className="font-sans text-[15px] lg:text-[16px] text-warm-taupe font-light leading-[2] break-keep">
                프로페셔널 케어와 가정 내 홈케어를 유기적으로 연결하여 압도적인 시너지를 창출합니다. 
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-4 h-[60vh] lg:h-[85vh] w-full relative group overflow-hidden bg-soft-stone"
          >
            <div className="absolute inset-0 bg-warm-taupe/10 mix-blend-multiply z-10 transition-opacity duration-[2s] group-hover:opacity-0" />
            <img 
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop" 
              alt="Functional Skincare Formulation" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s] ease-out"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-12 lg:p-16 z-20 bg-gradient-to-t from-deep-black/60 via-deep-black/20 to-transparent">
              <h4 className="font-inter text-[11px] uppercase tracking-[0.4em] text-elegant-white/90 mb-4">Formulated in Kor</h4>
              <p className="font-serif text-[36px] md:text-[48px] text-warm-ivory leading-[1.1] tracking-tight">Focus on <br/> Efficacy</p>
            </div>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
};

export default DivalinePlatform;
