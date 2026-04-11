import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PremiumPmu = () => {
  return (
    <section id="technology" className="py-32 lg:py-56 bg-deep-black text-elegant-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2600&auto=format&fit=crop" 
          alt="Premium Dark Aesthetic Background" 
          className="w-full h-full object-cover opacity-[0.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black" />
      </div>

      <div className="container relative z-10 mx-auto px-8 md:px-16 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          className="text-center w-full max-w-5xl mx-auto mb-20 lg:mb-32"
        >
          <span className="inline-block px-6 py-2 border border-soft-stone/20 text-soft-stone font-inter text-[11px] md:text-[13px] tracking-[0.4em] uppercase mb-12">
            Expert Collaboration
          </span>
          <h2 className="font-serif text-[64px] md:text-[88px] lg:text-[110px] text-elegant-white leading-tight tracking-[0.05em] uppercase mb-12 text-center drop-shadow-2xl">
            LONG-TIME-LINER
          </h2>
          <p className="font-sans text-[18px] lg:text-[20px] text-warm-taupe font-light tracking-[0.1em] leading-[2.2] mx-auto max-w-2xl mb-16 break-keep">
            가장 진보된 장비, 타협하지 않는 피그먼트. <br className="hidden md:block"/>
            글로벌 PMU 스탠다드를 제시하는 독일 본사와의 전문적 파트너십.
          </p>
          <div className="h-[1px] w-32 bg-muted-gold/40 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 w-full max-w-[1400px]">
          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-[65vh] lg:h-[85vh] bg-charcoal-dark border border-white/5 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-deep-black/30 mix-blend-multiply z-10 transition-opacity duration-[1.5s] group-hover:opacity-0" />
            <img 
              src="https://images.unsplash.com/photo-1598300057774-8b010af8ff96?q=80&w=1200&auto=format&fit=crop" 
              alt="Precision Beauty Setup" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[3s] grayscale opacity-80"
            />
          </motion.div>

          {/* Text/Editorial Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-serif text-[44px] md:text-[56px] lg:text-[64px] text-warm-ivory leading-[1.1] tracking-tight mb-12">
              정확성과 안전성의 <br />
              <span className="italic">극단</span>을 추구합니다.
            </h3>
            
            <p className="font-sans text-[16px] lg:text-[18px] text-soft-stone leading-[2.1] font-light max-w-[580px] break-keep mb-16 opacity-90">
               반영구 화장(PMU)은 피부에 가장 직접적으로 닿는 기술이기에 타협 불가능한 수준의 정밀함과 인증이 필요합니다. C&B Lab은 세계적으로 가장 엄격한 독일의 테크놀로지, 무독성 피그먼트, 전용 핸드피스를 도입하여 마스터 클래스 교육을 운영합니다.
            </p>

            <div className="space-y-12">
              <div className="flex flex-col gap-3">
                <span className="font-serif text-muted-gold text-[26px] italic">01. Highest Protocol</span>
                <p className="font-inter text-[12px] md:text-[13px] text-soft-stone/70 tracking-[0.2em] uppercase">EU 규격을 넘어선 타협 없는 안전성 테스트</p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-serif text-muted-gold text-[26px] italic">02. Elite Master System</span>
                <p className="font-inter text-[12px] md:text-[13px] text-soft-stone/70 tracking-[0.2em] uppercase">글로벌 뷰티 전문가 인증 및 아카데미 지원</p>
              </div>
            </div>

            <div className="mt-20">
              <a href="#contact" className="group inline-flex items-center font-inter text-[12px] md:text-[13px] tracking-[0.3em] uppercase text-warm-ivory hover:text-muted-gold transition-colors pb-3 border-b border-warm-ivory/20">
                파트너십 알아보기 
                <ArrowRight size={16} className="ml-5 transform group-hover:translate-x-2 transition-transform duration-500" />
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PremiumPmu;
