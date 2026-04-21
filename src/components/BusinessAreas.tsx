import { motion } from 'framer-motion';

const areas = [
  {
    id: '01',
    title: 'Beauty Devices',
    korTitle: '뷰티 디바이스',
    desc: '전문 에스테틱 관리 수준을 구현하는 정교하고 아름다운 프리미엄 뷰티 디바이스 라인업을 개발합니다.',
    img: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=1800&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'Functional Skincare',
    korTitle: '기능성 스킨케어',
    desc: '디바이스와의 시너지를 극대화하며, 근본적인 피부 구조를 매끄럽게 재설계하는 고기능성 코스메슈티컬 포뮬러를 연구합니다.',
    img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1800&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'Premium PMU System',
    korTitle: '프리미엄 PMU 시스템',
    desc: '타협하지 않는 독일 안전 기준과 정밀한 하이테크 장비를 융합하여 새로운 글로벌 PMU 시스템과 마스터 네트워크를 전개합니다.',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1800&auto=format&fit=crop'
  },
  {
    id: '04',
    title: 'Professional Education',
    korTitle: '전문가 교육 시스템',
    desc: '국제 표준을 넘어서는 마스터 양성 코스를 통해 최고의 테크닉과 뷰티 서비스 매니지먼트를 습득한 엘리트 아티스트를 배출합니다.',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1800&auto=format&fit=crop'
  },
  {
    id: '05',
    title: 'Global Expansion',
    korTitle: '글로벌 진출 및 수출 파트너십',
    desc: '대한민국 서울(Seoul HQ)을 글로벌 비즈니스 거점으로, 전 세계 뷰티 코스메틱 및 메디컬 파트너들과 함께 강력한 덤핑 빗장을 엽니다.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop'
  }
];

const BusinessAreas = () => {
  return (
    <section id="business-areas-editorial" className="py-0 bg-warm-ivory text-deep-black">
      {/* Massive Editorial Header */}
      <div className="container mx-auto px-8 md:px-16 pt-48 pb-20">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-inter text-[11px] md:text-[13px] uppercase tracking-[0.4em] text-warm-taupe mb-10 border-l border-warm-taupe pl-5"
        >
          What We Build
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-serif text-[26px] tracking-tight leading-[1.25] break-keep mb-8 sm:text-[34px] lg:text-[48px]"
        >
          아름다움을 <br />
          물리적 시스템으로 설계합니다
        </motion.h2>
      </div>

      {/* Image-backed Horizontal Blocks */}
      <div className="w-full flex flex-col">
        {areas.map((area) => (
          <motion.div 
            key={area.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="group relative w-full h-[60vh] lg:h-[75vh] flex items-center overflow-hidden border-t border-deep-black/10"
          >
            {/* Extremely dark cinematic image reveal on hover */}
            <div className="absolute inset-0 bg-deep-black transition-colors duration-1000">
              <img 
                src={area.img} 
                alt={area.title} 
                className="w-full h-full object-cover object-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-75 group-hover:scale-105 transition-all duration-[2s] ease-out"
              />
              <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-r from-deep-black/95 via-deep-black/60 to-transparent z-10" />
            </div>

            <div className="container relative z-20 mx-auto px-8 md:px-16 w-full flex flex-col md:flex-row items-start md:items-center justify-between">
              
              <div className="flex-1 max-w-[700px]">
                <span className="font-inter text-muted-gold text-[20px] lg:text-[24px] font-light tracking-[0.3em] block mb-6">
                  {area.id}
                </span>
                <h3 className="font-serif text-[26px] text-elegant-white mb-8 tracking-tight leading-[1.25] break-keep sm:text-[34px] lg:text-[48px]">
                  {area.title}
                </h3>
                <h4 className="font-inter text-[13px] md:text-[14px] tracking-[0.2em] text-warm-ivory uppercase mb-10 opacity-90">
                  {area.korTitle}
                </h4>
                <p className="font-sans text-soft-stone text-[16px] lg:text-[18px] leading-[1.6] font-light max-w-xl break-keep opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[1s] delay-100">
                  {area.desc}
                </p>
              </div>

              {/* Decorative vertical line */}
              <div className="hidden lg:flex flex-col items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="w-[1px] h-32 bg-elegant-white/30 group-hover:bg-muted-gold transition-colors duration-[1.5s] mb-8"></div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BusinessAreas;
