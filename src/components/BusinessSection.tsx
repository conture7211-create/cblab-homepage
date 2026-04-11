import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BusinessSection = () => {
    return (
        <div className="relative overflow-hidden bg-[#ffffff]">
            
            {/* 1. Hero Block */}
            <div className="relative w-full h-[85vh] min-h-[700px] flex items-center justify-center bg-black">
                {/* Background Image */}
                <motion.div 
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute inset-0 w-full h-full"
                >
                    <video 
                        src="/videos/hero-main-01-serum.mp4" 
                        className="w-full h-full object-cover opacity-50"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center text-center mt-16 px-6 max-w-4xl">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-8 font-inter text-[12px] uppercase tracking-[0.4em] text-[#d8c1a0]"
                    >
                        BUSINESS
                    </motion.p>
                        <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="section-hero-title mb-10"
                    >
                        Integrated Beauty Platform
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="whitespace-pre-line font-sans text-[17px] md:text-[19px] text-white/80 font-light tracking-wide break-keep"
                    >
                        제품, 교육, 서비스를{'\n'}하나의 흐름으로 연결합니다.
                    </motion.p>
                </div>
            </div>

            {/* 2. Business Overview (ABOUT US structured section 패턴 동일) */}
            <section id="business" className="section business-section text-[#111111] bg-[#fcfbf9]">
                <div className="container mx-auto max-w-[1560px] px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-16 lg:gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="overview-left w-full max-w-[420px] shrink-0 flex flex-col justify-between lg:pr-8 lg:border-r lg:border-[#dddddd]/60"
                        >
                            <div>
                                <h3 className="font-serif text-[24px] md:text-[26px] font-semibold tracking-[0.02em] text-[#111111] mb-1">
                                    BUSINESS
                                </h3>
                                <span className="overview-kicker mb-4">
                                    Overview
                                </span>
                                <p className="overview-body-text pr-2 whitespace-pre-line">
                                    디바이스, 스킨케어, 교육, 홈케어까지{'\n'}하나의 구조로 연결된 뷰티 비즈니스 플랫폼입니다.
                                </p>
                            </div>
                            <Link
                                to="/business/beauty-device"
                                className="overview-cta mt-8 lg:mt-10"
                            >
                                View Structure <span aria-hidden="true" className="font-light">→</span>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                            className="overview-right w-full flex-1 lg:pl-10 xl:pl-16"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 h-full">
                                <div className="flex flex-col">
                                    <h4 className="overview-col-title--compact cursor-default">
                                        Device &amp; Product
                                    </h4>
                                    <ul className="flex flex-col gap-1.5">
                                        <li>
                                            <Link
                                                to="/business/beauty-device"
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
                                            >
                                                Device
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/business/functional-skincare"
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
                                            >
                                                Cosmetics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/business/homecare"
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
                                            >
                                                Homecare
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="overview-col-title--compact cursor-default">
                                        Education System
                                    </h4>
                                    <ul className="flex flex-col gap-1.5">
                                        <li>
                                            <Link
                                                to="/brands/long-time-liner/pmu-system"
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
                                            >
                                                Training
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/business/professional-education"
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
                                            >
                                                Professional
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/about/premium-experience"
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
                                            >
                                                Experience
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="overview-col-title--compact cursor-default">
                                        Global Expansion
                                    </h4>
                                    <ul className="flex flex-col gap-1.5">
                                        <li>
                                            <Link
                                                to="/brands/brand-platform/partnership"
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
                                            >
                                                Partnership
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/brands/brand-platform"
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
                                            >
                                                Brand
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/brands/brand-platform/professional"
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
                                            >
                                                Strategy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BusinessSection;
