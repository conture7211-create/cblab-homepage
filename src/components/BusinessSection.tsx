import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BusinessSection = () => {
    return (
<<<<<<< HEAD
        <>
            {/* 1. BUSINESS 히어로 */}
            <div className="relative w-full overflow-hidden bg-black">
                <div className="relative flex h-[85vh] min-h-[700px] w-full items-center justify-center">
                    <motion.div
                        initial={{ scale: 1.05 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="absolute inset-0 h-full w-full"
                    >
                        <video
                            src="/videos/hero-main-01-serum.mp4"
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
            </div>

            {/* 2. BUSINESS 소개 */}
            <section
                id="business"
                className="business-overview-section section business-section border-b border-[#e8e4dc] bg-white text-[#111111]"
            >
                <div className="business-overview-inner container mx-auto max-w-[1560px] px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="overview-left flex w-full max-w-[420px] shrink-0 flex-col justify-between lg:border-r lg:border-[#dddddd]/60 lg:pr-8"
                        >
                            <div>
                                <h3 className="mb-1 font-serif text-[24px] font-semibold tracking-[0.02em] text-[#111111] md:text-[26px]">
                                    BUSINESS
                                </h3>
                                <span className="overview-kicker mb-4">Overview</span>
=======
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
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
                                <p className="overview-body-text pr-2 whitespace-pre-line">
                                    디바이스, 스킨케어, 교육, 홈케어까지{'\n'}하나의 구조로 연결된 뷰티 비즈니스 플랫폼입니다.
                                </p>
                            </div>
<<<<<<< HEAD
                            <div className="mt-8 flex flex-col gap-3 lg:mt-10">
                                <Link to="/business/beauty-device" className="overview-cta">
                                    View Structure <span aria-hidden="true" className="font-light">→</span>
                                </Link>
                                <a href="#business-structure-target" className="section-external-cta">
                                    사업 구조 자세히 보기 <span aria-hidden="true" className="font-light">→</span>
                                </a>
                            </div>
=======
                            <Link
                                to="/business/beauty-device"
                                className="overview-cta mt-8 lg:mt-10"
                            >
                                View Structure <span aria-hidden="true" className="font-light">→</span>
                            </Link>
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                            className="overview-right w-full flex-1 lg:pl-10 xl:pl-16"
                        >
                            <div className="grid h-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
=======
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                            className="overview-right w-full flex-1 lg:pl-10 xl:pl-16"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 h-full">
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
                                <div className="flex flex-col">
                                    <h4 className="overview-col-title--compact cursor-default">
                                        Device &amp; Product
                                    </h4>
                                    <ul className="flex flex-col gap-1.5">
                                        <li>
                                            <Link
                                                to="/business/beauty-device"
<<<<<<< HEAD
                                                className="overview-col-row block cursor-pointer leading-relaxed transition-colors hover:text-[#111111] hover:underline hover:underline-offset-4"
=======
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
                                            >
                                                Device
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/business/functional-skincare"
<<<<<<< HEAD
                                                className="overview-col-row block cursor-pointer leading-relaxed transition-colors hover:text-[#111111] hover:underline hover:underline-offset-4"
=======
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
                                            >
                                                Cosmetics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/business/homecare"
<<<<<<< HEAD
                                                className="overview-col-row block cursor-pointer leading-relaxed transition-colors hover:text-[#111111] hover:underline hover:underline-offset-4"
=======
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
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
<<<<<<< HEAD
                                                className="overview-col-row block cursor-pointer leading-relaxed transition-colors hover:text-[#111111] hover:underline hover:underline-offset-4"
=======
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
                                            >
                                                Training
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/business/professional-education"
<<<<<<< HEAD
                                                className="overview-col-row block cursor-pointer leading-relaxed transition-colors hover:text-[#111111] hover:underline hover:underline-offset-4"
=======
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
                                            >
                                                Professional
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/about/premium-experience"
<<<<<<< HEAD
                                                className="overview-col-row block cursor-pointer leading-relaxed transition-colors hover:text-[#111111] hover:underline hover:underline-offset-4"
=======
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
                                            >
                                                Experience
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
<<<<<<< HEAD
                                <div
                                    id="business-structure-target"
                                    className="flex flex-col scroll-mt-[152px]"
                                >
=======
                                <div className="flex flex-col">
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
                                    <h4 className="overview-col-title--compact cursor-default">
                                        Global Expansion
                                    </h4>
                                    <ul className="flex flex-col gap-1.5">
                                        <li>
                                            <Link
                                                to="/brands/brand-platform/partnership"
<<<<<<< HEAD
                                                className="overview-col-row block cursor-pointer leading-relaxed transition-colors hover:text-[#111111] hover:underline hover:underline-offset-4"
=======
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
                                            >
                                                Partnership
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/brands/brand-platform"
<<<<<<< HEAD
                                                className="overview-col-row block cursor-pointer leading-relaxed transition-colors hover:text-[#111111] hover:underline hover:underline-offset-4"
=======
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
                                            >
                                                Brand
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/brands/brand-platform/professional"
<<<<<<< HEAD
                                                className="overview-col-row block cursor-pointer leading-relaxed transition-colors hover:text-[#111111] hover:underline hover:underline-offset-4"
=======
                                                className="overview-col-row block leading-relaxed cursor-pointer transition-colors hover:text-[#111111] hover:underline underline-offset-4"
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
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
<<<<<<< HEAD
        </>
=======

        </div>
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
    );
};

export default BusinessSection;
