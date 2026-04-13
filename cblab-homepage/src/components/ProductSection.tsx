import { motion } from 'framer-motion';

const ProductSection = () => {
    return (
        <section id="product" className="relative overflow-hidden bg-[#ffffff]">
            <div className="relative flex min-h-[700px] h-[85vh] w-full items-center justify-center bg-black">
                <motion.div
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="absolute inset-0 h-full w-full"
                >
                    <video
                        src="/videos/hero-cut-01-serum.mp4"
                        className="h-full w-full object-cover opacity-50"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 mt-16 flex max-w-4xl flex-col items-center px-6 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-8 font-inter text-[12px] uppercase tracking-[0.4em] text-[#d8c1a0]"
                    >
                        PRODUCT
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="section-hero-title mb-10"
                    >
                        브랜드 경험으로{'\n'}완성되는 제품 라인
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="font-sans text-[16px] font-light tracking-wide text-white/80 break-keep md:text-[18px]"
                    >
                        뷰티 디바이스, 기능성 스킨케어, 전문가용 도구, 홈케어 솔루션까지 브랜드 철학이 담긴 제품 포트폴리오를 연결합니다.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
