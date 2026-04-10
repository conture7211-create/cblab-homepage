import { motion } from 'framer-motion';

type ShowcaseItem = {
    id: string;
    tab: string;
    eyebrow: string;
    messageLine1: string;
    messageLine2: string;
    title: string;
    description: string;
    subDescription?: string;
    image: string;
    imageAlt: string;
    ctaLabel: string;
    ctaHref: string;
};

const showcaseItems: ShowcaseItem[] = [
    {
        id: 'brands',
        tab: 'BRANDS',
        eyebrow: 'WHAT WE BUILD',
        messageLine1: '아름다움을',
        messageLine2: '브랜드와 시스템으로 구조화합니다',
        title: 'DIVALINE & LONG-TIME-LINER',
        description:
            'C&B Lab은 기능성 스킨케어, 뷰티 디바이스, 프리미엄 PMU, 전문가 교육을 하나의 브랜드 구조 안에서 통합적으로 설계합니다.',
        subDescription:
            '단일 제품 판매가 아니라 브랜드, 기술, 교육, 서비스가 연결되는 프리미엄 뷰티 플랫폼 구조를 구축합니다.',
        image:
            'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1800&auto=format&fit=crop',
        imageAlt: 'Premium beauty brand environment',
        ctaLabel: '브랜드 구조 보기',
        ctaHref: '#architecture',
    },
    {
        id: 'technology',
        tab: 'TECHNOLOGY',
        eyebrow: 'WHAT WE DEVELOP',
        messageLine1: '기능성과 전문성을',
        messageLine2: '제품과 시스템으로 구현합니다',
        title: 'R&D · DEVICE · PMU SYSTEM',
        description:
            '기능성 화장품 개발, 전문가용 뷰티 디바이스, PMU 시스템, 교육 프로토콜까지 C&B Lab의 기술력은 현장성과 지속성을 기준으로 설계됩니다.',
        subDescription:
            '연구개발과 사용자 경험, 전문가 교육이 분리되지 않는 구조를 통해 프리미엄 뷰티 산업의 실질적 기준을 만듭니다.',
        image:
            'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1800&auto=format&fit=crop',
        imageAlt: 'Technology and innovation business meeting space',
        ctaLabel: '기술력 보기',
        ctaHref: '#technology',
    },
    {
        id: 'global',
        tab: 'GLOBAL',
        eyebrow: 'WHAT WE EXPAND',
        messageLine1: '한국을 거점으로',
        messageLine2: '글로벌 뷰티 플랫폼을 확장합니다',
        title: 'KOREA HUB · ASIA EXPANSION',
        description:
            'C&B Lab은 한국 기반의 제조, 교육, 브랜딩 역량을 바탕으로 독일 LONG-TIME-LINER와의 연결성을 강화하며 아시아 확장 전략을 준비하고 있습니다.',
        subDescription:
            '제품 수출, 전문가 교육, 브랜드 허브 운영이 결합된 구조를 통해 글로벌 시장에서 지속 가능한 성장 기반을 마련합니다.',
        image:
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop',
        imageAlt: 'Global business headquarters environment',
        ctaLabel: '글로벌 전략 보기',
        ctaHref: '#global',
    },
];

const BrandShowcaseSection = () => {
    return (
        <section id="brand-showcase" className="bg-[#050505]">
            <div className="flex flex-col">
                {showcaseItems.map((item) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        key={item.id} 
                        className="relative overflow-hidden"
                    >
                        <div className="mx-auto max-w-[1600px]">
                            {/* Dark Image Area */}
                            <div className="relative h-[420px] overflow-hidden md:h-[540px] lg:h-[620px]">
                                <img
                                    src={item.image}
                                    alt={item.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-black/55" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/55" />

                                {/* In-image title */}
                                <div className="absolute inset-0 flex items-center">
                                    <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 px-6 md:px-12 lg:grid-cols-12">
                                        <div className="lg:col-span-7 lg:col-start-1">
                                            <div className="max-w-[760px]">
                                                <p className="mb-6 font-inter text-[11px] uppercase tracking-[0.38em] text-white/72">
                                                    {item.eyebrow}
                                                </p>
                                                <h2 className="font-serif text-[34px] leading-[1.14] tracking-[-0.02em] text-white md:text-[52px] lg:text-[68px]">
                                                    {item.title}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Ivory Message Strip */}
                            <div className="bg-[#f4efe8]">
                                <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-14 md:px-12 md:py-16 lg:grid-cols-12">
                                    <div className="lg:col-span-7">
                                        <div className="max-w-[760px]">
                                            <p className="mb-6 font-inter text-[11px] uppercase tracking-[0.38em] text-[#a59687]">
                                                {item.eyebrow}
                                            </p>

                                            <h3 className="font-serif text-[34px] leading-[1.18] tracking-[-0.02em] text-[#111111] md:text-[52px] lg:text-[64px]">
                                                <span className="block">{item.messageLine1}</span>
                                                <span className="block whitespace-nowrap">
                                                    {item.messageLine2}
                                                </span>
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-5">
                                        <div className="max-w-[520px] lg:ml-auto">
                                            <p className="font-sans text-[16px] leading-[1.95] text-[#4a443d] md:text-[18px]">
                                                {item.description}
                                            </p>

                                            {item.subDescription ? (
                                                <p className="mt-8 font-sans text-[14px] leading-[1.95] text-[#8a8177] md:text-[15px]">
                                                    {item.subDescription}
                                                </p>
                                            ) : null}

                                            <a
                                                href={item.ctaHref}
                                                className="mt-10 inline-flex items-center gap-2 border-b border-[#111111] pb-1 font-inter text-[12px] uppercase tracking-[0.14em] text-[#111111] transition-opacity duration-300 hover:opacity-65"
                                            >
                                                {item.ctaLabel}
                                                <span aria-hidden="true">→</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default BrandShowcaseSection;