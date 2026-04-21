import { motion } from 'framer-motion';

const CorporateIntro = () => {
  return (
    <section id="corporate-intro" className="py-32 lg:py-56 bg-warm-ivory relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <h2 className="font-inter text-[11px] md:text-[13px] uppercase tracking-[0.4em] text-warm-taupe mb-10 border-l border-warm-taupe pl-5">
              Who We Are
            </h2>
            <h3 className="font-serif text-[26px] text-deep-black leading-[1.25] tracking-tight break-keep mb-12 sm:text-[34px] lg:text-[48px]">
              글로벌 수준의 <br/>
              <span className="italic font-light">신뢰</span>를 기반으로 한 <br/>
              프리미엄 뷰티 환경
            </h3>
            <p className="font-sans text-[16px] lg:text-[18px] text-charcoal-light leading-[1.6] font-light mb-10 tracking-wide break-keep max-w-[90%]">
              C&B Lab은 단순한 화장품 제조사나 일회성 뷰티 브랜드가 아닙니다. 우리는 하이엔드 뷰티 테크놀로지, 기능성 스킨케어 R&D, 전문가용 반영구 시스템(PMU), 그리고 글로벌 지향의 플랫폼 비즈니스를 통합하여 설계하는 철저한 코퍼레이트 그룹입니다.
            </p>
            <p className="font-sans text-[15px] lg:text-[16px] text-warm-taupe leading-[1.6] font-light break-keep opacity-95 max-w-[90%]">
              미에 대한 요구가 높아질수록 그것을 뒷받침하는 시스템은 더욱 전문적이어야 합니다. 가장 안전하고 완벽한 인프라를 바탕으로, C&B Lab은 글로벌 프리미엄 뷰티 시장에서 굳건한 신뢰를 구축합니다.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="lg:col-span-7 h-[65vh] lg:h-[85vh] w-full relative group shadow-2xl"
          >
            <div className="absolute inset-0 bg-muted-gold/10 mix-blend-multiply z-10 transition-opacity duration-1000 group-hover:opacity-0" />
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2600&auto=format&fit=crop" 
              alt="Corporate Interior / Headquarters" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-[2s]"
            />
            
            {/* Elegant detail box */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1.2 }}
              className="absolute -bottom-12 -left-12 bg-deep-black p-14 lg:p-16 z-20 max-w-[340px] hidden md:block"
            >
              <div className="w-14 h-14 rounded-full border border-muted-gold/40 flex items-center justify-center font-serif text-muted-gold text-[15px] mb-8">
                C&B
              </div>
              <h4 className="font-inter tracking-[0.35em] text-elegant-white text-[11px] uppercase leading-[2.2]">
                Structured Excellence <br />
                <span className="text-muted-gold">Global Credibility</span>
              </h4>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CorporateIntro;
