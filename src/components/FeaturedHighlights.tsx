import { motion } from 'framer-motion';

const highlights = [
  {
    category: 'ABOUT US',
    title: 'C&B Lab이 추구하는 근본적인 뷰티 시스템과 혁신의 가치',
    linkText: 'READ MORE',
    href: '#about',
    img: 'https://images.unsplash.com/photo-1541888086925-920a06143f60?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'OUR BRANDS',
    title: 'DIVALINE과 LONG-TIME-LINER를 관통하는 하이엔드 뷰티 마스터피스',
    linkText: 'READ MORE',
    href: '#architecture',
    img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'GLOBAL IMPACT',
    title: '전 세계로 확장되는 K-Beauty 테크놀로지 파이프라인',
    linkText: 'READ MORE',
    href: '/brands/brand-platform/partnership',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  }
];

const FeaturedHighlights = () => {
  return (
    <section className="py-24 lg:py-40 bg-warm-ivory text-deep-black">
      <div className="container mx-auto px-8 md:px-16 max-w-[1500px]">
        
        {/* The 3-Column Center-Distributed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              className="flex flex-col group"
            >
              {/* Square/Rectangular Image Container */}
              <div className="w-full aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden mb-10 bg-soft-stone relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[2s] ease-out"
                />
              </div>

              {/* Text Content Area */}
              <div className="flex flex-col">
                <span className="font-inter text-[#67889C] text-[12px] md:text-[13px] tracking-widest uppercase mb-4 font-semibold">
                  {item.category}
                </span>
                
                <h3 className="font-serif text-[28px] lg:text-[34px] leading-[1.3] text-deep-black mb-10 break-keep">
                  {item.title}
                </h3>

                <a 
                  href={item.href}
                  className="mt-auto inline-flex font-inter text-[11px] md:text-[12px] text-deep-black/80 tracking-[0.2em] font-medium uppercase hover:text-muted-gold transition-colors"
                >
                  {item.linkText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedHighlights;
