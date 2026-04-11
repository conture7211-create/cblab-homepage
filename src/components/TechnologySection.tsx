import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TechnologySection = () => {
    return (
        <div className="relative overflow-hidden bg-[#fcfbf9]">
            
            {/* 1. Hero Block — 미디어 영역 */}
            <div className="technology-hero w-full bg-black">
                <div className="relative w-full h-auto overflow-hidden">
                    <div className="relative aspect-video w-full">
                        <div className="absolute inset-0">
                            <video
                                src="/videos/hero-main-02-rnd.mp4"
                                className="h-full min-h-0 w-full opacity-50"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                            />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-black/20" />
                        {/* Hero Content */}
                        <div className="absolute inset-0 z-10 flex max-w-4xl flex-col items-center justify-center px-6 py-16 text-center sm:py-20">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="mb-8 font-inter text-[12px] uppercase tracking-[0.4em] text-[#d8c1a0]"
                            >
                                TECHNOLOGY
                            </motion.p>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.15 }}
                                viewport={{ once: true }}
                                className="section-hero-title mb-10"
                            >
                                브랜드의 지속 가능성을{'\n'}기술로 설계합니다
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="font-sans text-[17px] md:text-[19px] text-white/80 font-light tracking-wide break-keep whitespace-pre-line"
                            >
                                제품, 교육, 운영 시스템을 하나로 연결합니다.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Structured Section — Brands와 동일 레이아웃·밀도 */}
            <section id="technology" className="section technology-overview text-[#111111]">
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
                                TECHNOLOGY
                            </span>
                            <h3 className="overview-lead-title">
                                OVERVIEW
                            </h3>
                            <div className="mb-14 max-w-[480px]">
                                <p className="overview-body-text whitespace-pre-line pr-2">
                                    C&amp;B LAB은 디바이스 설계, 소재 개발,{'\n'}교육 시스템을 하나의 구조로 연결합니다.
                                </p>
                            </div>

                            <Link
                                to="/technology/development"
                                className="overview-cta"
                            >
                                View Technology <span aria-hidden="true" className="font-light">→</span>
                            </Link>
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

                                <div className="flex min-w-0 flex-col">
                                    <h4 className="overview-col-title cursor-default">Development</h4>
                                    <ul className="flex flex-col gap-4">
                                        <li>
                                            <Link to="/technology/development" className="overview-col-row block">
                                                Planning
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/technology/development" className="overview-col-row block">
                                                Formulation
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/technology/development" className="overview-col-row block">
                                                Design
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex min-w-0 flex-col">
                                    <h4 className="overview-col-title cursor-default">System</h4>
                                    <ul className="flex flex-col gap-4">
                                        <li>
                                            <Link to="/technology/system" className="overview-col-row block whitespace-nowrap lg:whitespace-normal">
                                                Education System
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/technology/system" className="overview-col-row block">
                                                Quality
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/technology/system" className="overview-col-row block">
                                                Experience
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex min-w-0 flex-col">
                                    <h4 className="overview-col-title cursor-default">Scalability</h4>
                                    <ul className="flex flex-col gap-4">
                                        <li>
                                            <Link to="/technology/scalability" className="overview-col-row block">
                                                Platform
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/technology/scalability" className="overview-col-row block">
                                                Operation
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/technology/scalability" className="overview-col-row block">
                                                Expansion
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

export default TechnologySection;
