import { motion } from 'framer-motion';

const GlobalVision = () => {
  return (
    <section id="global" className="py-32 lg:py-56 bg-warm-ivory text-deep-black relative overflow-hidden border-t border-deep-black/10">
      
      <div className="container mx-auto px-8 md:px-16 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          className="text-center w-full max-w-6xl mx-auto"
        >
          <span className="inline-block px-6 py-2 border border-warm-taupe/30 text-warm-taupe font-inter text-[11px] md:text-[13px] tracking-[0.4em] uppercase mb-12">
            Global Strategy
          </span>
          <h2 className="font-serif text-[56px] md:text-[80px] lg:text-[96px] text-deep-black leading-[1.05] tracking-tight mb-16">
            <span className="italic font-light">Built</span> in Korea. <br/>
            Designed for <span className="italic font-light">Global Expansion</span>.
          </h2>
          <p className="font-sans text-[18px] md:text-[20px] lg:text-[22px] text-deep-black/80 font-light tracking-wide leading-[2.1] mx-auto max-w-[800px] mb-20 break-keep">
            대한민국 서울(Seoul HQ)의 우수한 테크놀로지 파이프라인을 세계 시장에 연결합니다. 글로벌 지향적 스킨케어 연구부터 하이엔드 장비 수출 및 B2B 뷰티 아카데미까지, 완성형 파트너십을 제공합니다.
          </p>
        </motion.div>

        {/* Global Abstract Visual element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full relative h-[50vh] md:h-[70vh] max-w-[1500px] bg-soft-stone overflow-hidden border border-deep-black/5 shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1578509379853-28825f38e427?q=80&w=2600&auto=format&fit=crop" 
            alt="Global Abstract Concept" 
            className="w-full h-full object-cover object-center grayscale hover:scale-105 transition-transform duration-[4s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-warm-ivory/10 to-transparent mix-blend-multiply" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full border border-warm-ivory/20 flex items-center justify-center backdrop-blur-sm bg-deep-black/10">
            <div className="w-6 h-6 rounded-full bg-elegant-white shadow-[0_0_20px_rgba(255,255,255,0.9)]"></div>
          </div>
          
          <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 text-elegant-white">
            <span className="font-serif text-[48px] md:text-[64px] tracking-tight leading-[1]">Seoul, <span className="italic">KOR</span></span>
            <p className="font-inter text-[11px] md:text-[13px] tracking-[0.4em] uppercase mt-4 opacity-80 decoration-muted-gold underline underline-offset-8">Global Headquarters</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GlobalVision;
