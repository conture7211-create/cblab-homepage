import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EducationSection = () => {
    return (
        <div className="relative overflow-hidden bg-[#fcfbf9]">
            <div className="relative flex min-h-[700px] h-[85vh] w-full items-center justify-center bg-black">
                <motion.div
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="absolute inset-0 h-full w-full"
                >
                    <video
                        src="/videos/hero-main-04-global-map.mp4"
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
                        EDUCATION
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="section-hero-title mb-10"
                    >
                        전문가 역량을{'\n'}시스템으로 전달합니다
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="font-sans text-[17px] md:text-[19px] font-light tracking-wide text-white/80 break-keep"
                    >
                        입문부터 전문가까지 이어지는 교육 구조
                    </motion.p>
                </div>
            </div>

            <section id="education" className="section education-section bg-[#fcfbf9] text-[#111111]">
                <div className="mx-auto max-w-[1560px] px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row lg:justify-between items-stretch gap-16 lg:gap-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="w-full lg:w-[280px] xl:w-[340px] shrink-0 flex flex-col justify-between lg:pr-8 lg:border-r lg:border-[#dddddd]/60"
                        >
                            <span className="overview-kicker">EDUCATION</span>
                            <h3 className="overview-lead-title">OVERVIEW</h3>
                            <div className="mb-14 max-w-[480px]">
                                <p className="overview-body-text whitespace-pre-line pr-2">
                                    실전 교육, 홈 트레이닝, 시스템 교육까지{'\n'}하나의 구조로 연결된 교육 플랫폼입니다.
                                </p>
                            </div>
                            <a href="#education" className="overview-cta">
                                View Education <span aria-hidden="true" className="font-light">→</span>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                            className="flex-1 lg:pl-10 xl:pl-16"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 h-full">
                                <div className="flex flex-col">
                                    <h4 className="overview-col-title--compact">Professional Training</h4>
                                    <ul className="flex flex-col gap-1.5">
                                        <li>
                                            <Link
                                                to="/education/professional-training"
                                                className="overview-col-row block"
                                            >
                                                Training
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/education/professional-training"
                                                className="overview-col-row block"
                                            >
                                                Protocol
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/education/professional-training" className="overview-col-row block">
                                                Growth
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="overview-col-title--compact">Home Training</h4>
                                    <ul className="flex flex-col gap-1.5">
                                        <li>
                                            <Link
                                                to="/education/home-training"
                                                className="overview-col-row block"
                                            >
                                                Starter
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/education/home-training"
                                                className="overview-col-row block"
                                            >
                                                Practice
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/education/home-training"
                                                className="overview-col-row block"
                                            >
                                                Repetition
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="overview-col-title--compact">Academy System</h4>
                                    <ul className="flex flex-col gap-1.5">
                                        <li>
                                            <Link
                                                to="/education/academy-system"
                                                className="overview-col-row block"
                                            >
                                                Curriculum
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/education/academy-system"
                                                className="overview-col-row block"
                                            >
                                                Operation
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/education/academy-system"
                                                className="overview-col-row block"
                                            >
                                                Brand
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

export default EducationSection;
