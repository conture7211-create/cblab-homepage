import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type AboutColumnItem = string | { label: string; to: string };

/** ABOUT US 네비 메가메뉴와 동일한 우측 컬럼 정의 */
const aboutMegaColumns: { category: string; items: AboutColumnItem[] }[] = [
    {
        category: 'Corporate',
        items: [
            { label: 'Overview', to: '/about/our-story' },
            { label: 'Vision', to: '/about/our-vision' },
            { label: 'Structure', to: '/about/our-structure' },
        ],
    },
    {
        category: 'Research & Development',
        items: [
            { label: 'Product', to: '/about/research-development#product-development' },
            { label: 'Device', to: '/about/research-development#device-design' },
            { label: 'Education', to: '/about/research-development#education-system' },
        ],
    },
    {
        category: 'Brand Identity',
        items: [
            { label: 'Philosophy', to: '/about/brand-philosophy' },
            { label: 'Visual', to: '/about/visual-direction' },
            { label: 'Experience', to: '/about/premium-experience' },
        ],
    },
];

const AboutUsSection = () => {
    return (
        <div id="about" className="relative overflow-hidden bg-[#fcfbf9]">
            
            {/* 1. Hero Block — 앵커는 아래 구조화 섹션(#about)에만 부여 */}
            <div className="relative w-full h-[85vh] min-h-[700px] flex items-center justify-center bg-black">
                <motion.div 
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute inset-0 w-full h-full"
                >
                    <video
                        src="/videos/about-lobby.mp4"
                        className="h-full w-full object-cover object-[48%_50%] opacity-50"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/20" />
                
                <div className="relative z-10 flex flex-col items-center text-center mt-16 px-6 max-w-4xl">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-8 font-inter text-[12px] uppercase tracking-[0.4em] text-[#d8c1a0]"
                    >
                        ABOUT US
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="section-hero-title mb-6"
                    >
                        뷰티를 넘어{'\n'}구조를 설계합니다
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.22 }}
                        viewport={{ once: true }}
                        className="mb-8 font-serif text-[15px] md:text-[17px] tracking-[0.12em] text-[#d8c1a0]/90"
                    >
                        C&amp;B LAB DIVALINE
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="max-w-[36rem] whitespace-pre-line font-sans text-[17px] md:text-[19px] text-white/80 font-light tracking-wide leading-relaxed break-keep"
                    >
                        브랜드, 기술, 교육을 하나로 연결하는{'\n'}프리미엄 뷰티 그룹입니다.
                    </motion.p>
                </div>
            </div>

            {/* 2. Structured Section — 메가메뉴(ABOUT US)와 동일 구조: 좌 한글 / 우 영문 3컬럼 */}
            <section id="about" className="section about-section text-[#111111] bg-[#fcfbf9]">
                <div className="mx-auto max-w-[1560px] px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row lg:justify-between items-stretch gap-16 lg:gap-0">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full lg:w-[280px] xl:w-[340px] shrink-0 flex flex-col justify-between lg:pr-8 lg:border-r lg:border-[#dddddd]/60"
                        >
                            <div>
                                <h3 className="font-serif text-[24px] md:text-[26px] font-semibold tracking-[0.02em] text-[#111111] mb-1">
                                    ABOUT US
                                </h3>
                                <span className="overview-kicker mb-4">
                                    Overview
                                </span>
                                <p className="overview-body-text pr-2 whitespace-pre-line">
                                    C&amp;B LAB은 브랜드, 기술, 교육을{'\n'}하나의 구조로 설계하는{'\n'}프리미엄 뷰티 플랫폼입니다.
                                </p>
                            </div>

                            <a
                                href="http://www.cnb-lab.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="overview-cta mt-8 lg:mt-10"
                            >
                                Explore C&B LAB →
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                            className="flex-1 lg:pl-10 xl:pl-16"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 h-full">
                                {aboutMegaColumns.map((col, cIdx) => (
                                    <div key={cIdx} className="flex flex-col">
                                        <h4 className="overview-col-title--compact cursor-default">
                                            {col.category}
                                        </h4>
                                        <ul className="flex flex-col gap-1.5">
                                            {col.items.map((item, iIdx) => {
                                                const rowClass = 'overview-col-row leading-relaxed';
                                                if (typeof item === 'object' && item.to) {
                                                    return (
                                                        <li key={iIdx}>
                                                            <Link
                                                                to={item.to}
                                                                className={`${rowClass} block cursor-pointer`}
                                                            >
                                                                {item.label}
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                                const label = typeof item === 'string' ? item : item.label;
                                                return (
                                                    <li
                                                        key={iIdx}
                                                        className={`${rowClass} cursor-default`}
                                                    >
                                                        {label}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUsSection;
