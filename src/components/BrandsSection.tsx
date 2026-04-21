import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BrandsSection = () => {
    return (
        <div id="brands" className="relative scroll-mt-28 overflow-hidden bg-[#fcfbf9] lg:scroll-mt-32">
            
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
                        src="/videos/technology-divastone.mp4" 
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
                        BRANDS
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="section-hero-title mb-10"
                    >
                        브랜드는 제품이 아니라{'\n'}경험의 구조입니다
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="font-sans text-[17px] md:text-[19px] text-white/80 font-light tracking-wide break-keep whitespace-pre-line"
                    >
                        각 브랜드는 서로 다른 역할로{'\n'}하나의 플랫폼 안에서 연결됩니다.
                    </motion.p>
                </div>
            </div>

            {/* 2. Structured Section */}
            <section className="section brands-section bg-[#fcfbf9] text-[#111111]">
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
                                BRANDS
                            </span>
                            <h3 className="overview-lead-title">
                                OVERVIEW
                            </h3>
                            <div className="mb-14 max-w-[480px]">
                                <p className="overview-body-text whitespace-pre-line pr-2">
                                    C&amp;B LAB은 두 개의 핵심 브랜드를 중심으로{'\n'}프리미엄 뷰티 시장을 구조화합니다.
                                </p>
                            </div>

                            <Link
                                to="/brands/divaline"
                                className="overview-cta"
                            >
                                View Brands <span aria-hidden="true" className="font-light">→</span>
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

                                {/* Column 1 */}
                                <div className="flex min-w-0 flex-col">
                                    <h4 className="overview-col-title cursor-default">DIVALINE</h4>
                                    <ul className="flex flex-col gap-4">
                                        <li>
                                            <Link
                                                to="/brands/divaline"
                                                className="overview-col-row block"
                                            >
                                                Platform
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/brands/divaline/homecare"
                                                className="overview-col-row block"
                                            >
                                                Device &amp; Homecare
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/about/premium-experience"
                                                className="overview-col-row block"
                                            >
                                                Experience
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 2 */}
                                <div className="flex min-w-0 flex-col">
                                    <h4 className="overview-col-title cursor-default">LONG-TIME-LINER</h4>
                                    <ul className="flex flex-col gap-4">
                                        <li className="whitespace-nowrap lg:whitespace-normal">
                                            <Link
                                                to="/brands/long-time-liner/heritage"
                                                className="overview-col-row block"
                                            >
                                                German Heritage
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/brands/long-time-liner/pmu-system"
                                                className="overview-col-row block"
                                            >
                                                Professional System
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/brands/long-time-liner/academy"
                                                className="overview-col-row block"
                                            >
                                                Premium Standard
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 3 */}
                                <div className="flex min-w-0 flex-col">
                                    <h4 className="overview-col-title cursor-default">Brand Expansion</h4>
                                    <ul className="flex flex-col gap-4">
                                        <li>
                                            <Link
                                                to="/business/professional-education"
                                                className="overview-col-row block"
                                            >
                                                Education
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/brands/brand-platform/professional"
                                                className="overview-col-row block"
                                            >
                                                Market
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/brands/brand-platform/partnership"
                                                className="overview-col-row block"
                                            >
                                                Global
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

export default BrandsSection;
