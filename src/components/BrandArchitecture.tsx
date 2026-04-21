import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BrandArchitecture = () => {
  return (
    <section id="architecture" className="py-32 lg:py-56 bg-deep-black text-warm-ivory relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 mb-24 lg:mb-32 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-inter text-[11px] md:text-[13px] uppercase tracking-[0.4em] text-muted-gold mb-10"
        >
          Brand Ecosystem
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-serif text-[26px] text-elegant-white tracking-tight leading-[1.25] break-keep sm:text-[34px] lg:text-[48px]"
        >
          통합된 구조, 확장하는 브랜드
        </motion.h2>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="flex flex-col space-y-16 lg:space-y-40 relative">
          
          {/* A) C&B Lab Headquarters */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 }}
            className="w-full relative overflow-hidden min-h-[50vh] flex items-center bg-charcoal-dark border border-white/5"
          >
            <div className="absolute inset-x-0 w-[60%] h-full bg-gradient-to-r from-deep-black via-deep-black/80 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1541888086925-920a06143f60?q=80&w=2600&auto=format&fit=crop" 
              alt="C&B Lab Corporate R&D Strategy" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 transition-all duration-[3s]"
            />
            <div className="relative z-20 w-full lg:w-1/2 p-12 md:p-20 lg:p-32">
              <span className="inline-block px-5 py-2 border border-muted-gold/40 font-inter text-muted-gold text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-10">Corporate Holder</span>
              <h3 className="font-serif text-[26px] text-elegant-white mb-10 leading-[1.25] break-keep sm:text-[34px] lg:text-[48px]">C&B Lab</h3>
              <p className="font-sans text-[16px] md:text-[18px] text-soft-stone leading-[1.6] font-light break-keep max-w-md lg:max-w-lg mb-12">
                기업 본체로서 미래 지향적 R&D, 시스템 구축, 그리고 글로벌 파트너십 전략을 총괄합니다. 프리미엄 뷰티 브랜드들이 가장 안전하고 체계적으로 성장할 수 있도록 돕는 코퍼레이트 인프라로서 기능합니다.
              </p>
              <a href="#global" className="inline-flex items-center font-inter text-[11px] md:text-[12px] tracking-[0.25em] text-elegant-white hover:text-muted-gold transition-colors font-light uppercase border-b border-elegant-white/30 pb-3">
                글로벌 전략 <ArrowRight size={16} className="ml-4" />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 relative">
            {/* Visual connector line between parent and children */}
            <div className="absolute -top-16 lg:-top-40 left-1/2 w-[1px] h-16 lg:h-40 bg-gradient-to-b from-muted-gold/30 to-transparent hidden lg:block" />

            {/* B) DIVALINE */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="w-full relative overflow-hidden min-h-[65vh] flex flex-col justify-end group bg-deep-black"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1615397323286-63e8137f8f60?q=80&w=1200&auto=format&fit=crop" 
                alt="DIVALINE Skincare Platform" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[3s] object-top"
              />
              <div className="relative z-20 p-12 lg:p-20">
                <span className="inline-block px-5 py-2 bg-warm-ivory text-deep-black font-inter text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-10">Beauty Platform</span>
                <h3 className="font-serif text-[26px] text-elegant-white mb-8 leading-[1.25] break-keep sm:text-[34px] lg:text-[48px]">DIVALINE</h3>
                <p className="font-sans text-[16px] md:text-[18px] text-soft-stone leading-[1.6] font-light break-keep max-w-[480px]">
                  고기능성 스킨케어, 뷰티 디바이스, 그리고 엘리트 뷰티 교육 아카데미를 모두 아우르는 C&B Lab의 대표 라이프스타일 뷰티 플랫폼 브랜드입니다.
                </p>
              </div>
            </motion.div>

            {/* C) LONG-TIME-LINER */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="w-full relative overflow-hidden min-h-[65vh] flex flex-col justify-end group bg-charcoal-dark"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/80 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1574681657879-1fcd0bd2de99?q=80&w=1200&auto=format&fit=crop" 
                alt="LONG-TIME-LINER Professional PMU" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-[3s]"
              />
              <div className="relative z-20 p-12 lg:p-20">
                <span className="inline-block px-5 py-2 border border-muted-gold/50 text-muted-gold font-inter text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-10">Professional PMU</span>
                <h3 className="font-serif text-[26px] text-elegant-white mb-8 uppercase tracking-widest leading-[1.25] break-keep sm:text-[34px] lg:text-[48px]">LONG-TIME-LINER</h3>
                <p className="font-sans text-[16px] md:text-[18px] text-soft-stone leading-[1.6] font-light break-keep max-w-[480px]">
                  가장 까다로운 독일의 머신 테크놀로지, 인증된 무독성 색소, 그리고 체계적 교육 시스템을 바탕으로 한 전문가용 프리미엄 반영구 화장 브랜드의 한국 거점입니다.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandArchitecture;
