import { motion } from 'framer-motion';

const GlobalSection = () => {
    return (
<<<<<<< HEAD
        <section id="global-expansion" className="relative bg-[#fcfbf9] overflow-hidden">
=======
        <section id="global" className="relative bg-[#fcfbf9] overflow-hidden">
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
            
            {/* 1. Hero Block — top-left global expansion map visual */}
            <div className="relative w-full h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#070608]">
                <motion.div
                    initial={{ scale: 1.02, opacity: 1 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute inset-0"
                    aria-hidden
                >
                    <video
                        src="/videos/global-map-01.mp4"
                        className="h-full w-full object-cover object-[58%_46%] max-lg:object-[56%_48%] [filter:brightness(1.16)_contrast(1.08)_saturate(1.1)]"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    />
                </motion.div>
                {/* Korea 허브·루트 라인이 어두운 오버레이 후에도 살아 보이도록: 금/아이보리 리프트 + 네이비 틴트(순흑 대신) */}
                <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_52%_50%_at_68%_40%,rgba(216,193,160,0.2),transparent_58%)] mix-blend-screen opacity-[0.85]"
                    aria-hidden
                />
                <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_32%_36%_at_13%_21%,rgba(200,180,145,0.14),transparent_52%)] mix-blend-screen opacity-90"
                    aria-hidden
                />
                <div className="absolute inset-0 bg-[#050a14]/[0.42]" aria-hidden />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/18 to-black/14" aria-hidden />
                <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-black/22" aria-hidden />
                
                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center text-center mt-16 px-6 max-w-4xl drop-shadow-[0_2px_28px_rgba(0,0,0,0.5)]">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-8 font-inter text-[12px] uppercase tracking-[0.4em] text-[#d8c1a0]"
                    >
                        GLOBAL
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="section-hero-title mb-10"
                    >
                        한국을 거점으로{'\n'}글로벌 확장을 설계합니다
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="whitespace-pre-line font-sans text-[16px] md:text-[18px] text-white/80 font-light tracking-wide break-keep"
                    >
                        독일 HQ와 연결된 아시아 시장 확장 구조를 기반으로{'\n'}브랜드, 교육, 기술이 함께 성장하는 플랫폼을 구축합니다.
                    </motion.p>
                </div>
            </div>

            {/* 2. Structured Section */}
            <div className="py-32 md:py-48 text-[#111111]">
                <div className="mx-auto max-w-[1560px] px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-24 lg:gap-32">

                        {/* Left Side (Overview) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full lg:w-5/12 flex flex-col"
                        >
                            <span className="overview-kicker">
                                GLOBAL
                            </span>
                            <h3 className="overview-lead-title">
                                Overview
                            </h3>
                            <div className="mb-14 max-w-[480px] space-y-6">
                                <p className="overview-body-text">
                                    C&amp;B LAB은 한국을 기반으로, 독일 프리미엄 PMU 시스템과의 연결을 통해 아시아 시장을 향한 구조적 확장을 준비하고 있습니다.
                                </p>
                                <p className="overview-body-text">
                                    브랜드, 교육, 기술, 운영이 하나의 플랫폼 안에서 연결되도록 설계하며, 글로벌 파트너십과 시장 확장 가능성을 함께 구축해 나갑니다.
                                </p>
                            </div>

                            <a
                                href="#global-detail"
                                className="overview-cta"
                            >
                                글로벌 구조 보기 <span aria-hidden="true" className="font-light">→</span>
                            </a>
                        </motion.div>

                        {/* Right Side - 3 Columns */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                            className="w-full lg:w-7/12"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 md:gap-12 lg:gap-16">

                                {/* Column 1 */}
                                <div className="flex flex-col">
                                    <h4 className="overview-col-title">
                                        Partnership
                                    </h4>
                                    <ul className="flex flex-col gap-4">
                                        <li className="overview-col-row cursor-pointer leading-relaxed whitespace-nowrap lg:whitespace-normal">
                                            Germany HQ
                                        </li>
                                        <li className="overview-col-row cursor-pointer leading-relaxed">
                                            Asia Collaboration
                                        </li>
                                        <li className="overview-col-row cursor-pointer leading-relaxed">
                                            Global Network
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 2 */}
                                <div className="flex flex-col">
                                    <h4 className="overview-col-title">
                                        Platform
                                    </h4>
                                    <ul className="flex flex-col gap-4">
                                        <li className="overview-col-row cursor-pointer leading-relaxed whitespace-nowrap lg:whitespace-normal">
                                            Academy
                                        </li>
                                        <li className="overview-col-row cursor-pointer leading-relaxed">
                                            Professional Access
                                        </li>
                                        <li className="overview-col-row cursor-pointer leading-relaxed">
                                            Brand Ecosystem
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 3 */}
                                <div className="flex flex-col">
                                    <h4 className="overview-col-title">
                                        Expansion
                                    </h4>
                                    <ul className="flex flex-col gap-4">
                                        <li className="overview-col-row cursor-pointer leading-relaxed whitespace-nowrap lg:whitespace-normal">
                                            Korea Pilot
                                        </li>
                                        <li className="overview-col-row cursor-pointer leading-relaxed">
                                            Asia Hub
                                        </li>
                                        <li className="overview-col-row cursor-pointer leading-relaxed whitespace-nowrap lg:whitespace-normal">
                                            Cross-border Strategy
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default GlobalSection;
