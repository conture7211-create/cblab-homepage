import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/** 안정적인 Unsplash 소스(w/q/auto) 통일 — Vision은 기존 ID 오류 가능성으로 교체 */
const heroImg =
  '/images/about-rnd/ceo-main.jpg';

const sectionImages = {
  overview: {
    src: '/images/about-rnd/ceo-main.jpg',
    objectPosition: '50% 52%',
  },
  vision: {
    src: '/images/about-rnd/vision-pmu.jpg',
    objectPosition: '52% 46%',
  },
  structure: {
    src: '/images/about-rnd/structure-divastone.jpg',
    objectPosition: '50% 50%',
  },
};

const pillars: { en: string; ko: string }[] = [
  { en: 'Brand', ko: '브랜드' },
  { en: 'Technology', ko: '기술·R&D' },
  { en: 'Education', ko: '교육' },
  { en: 'Service', ko: '서비스' },
  { en: 'Global Partnership', ko: '글로벌 파트너십' },
];

function SectionImage({
  src,
  alt,
  objectPosition = '50% 50%',
}: {
  src: string;
  alt: string;
  objectPosition?: string;
}) {
  return (
    <figure className="w-full shrink-0 overflow-hidden rounded-sm border border-[#e8e4dc]/80 bg-[#f2efe9] md:w-[42%] md:max-w-[408px]">
      <div className="relative aspect-[5/4] w-full">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
          loading="lazy"
          decoding="async"
        />
      </div>
    </figure>
  );
}

const bodyClass =
  'font-sans text-[15px] font-light leading-[1.92] tracking-[-0.01em] text-[#383838] break-keep [text-wrap:pretty] md:text-[16px]';

/** 헤더·sticky 서브네비를 피하기 위한 앵커 오프셋 (scroll-margin) */
const SECTION_SCROLL_MARGIN = 'scroll-mt-[212px]';

function resolveSectionId(pathname: string, hash: string): string | null {
  if (hash === '#company-overview') return 'company-overview';
  if (hash === '#vision') return 'vision';
  if (hash === '#structure') return 'structure';
  if (hash === '#strategic-expansion') return 'strategic-expansion';
  if (pathname.endsWith('our-vision')) return 'vision';
  if (pathname.endsWith('our-structure')) return 'structure';
  return null;
}

function scrollToSection(id: string) {
  window.requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

export default function AboutCorporate() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = resolveSectionId(pathname, hash);
    if (!id) return;
    const t = window.setTimeout(() => scrollToSection(id), 80);
    return () => window.clearTimeout(t);
  }, [pathname, hash]);

  const onAboutTabClick = (sectionId: 'company-overview' | 'vision' | 'structure', hrefHash: string) => {
    const onOurStory =
      pathname === '/about/our-story' || pathname.endsWith('/about/our-story');
    if (!onOurStory) return;
    if (hash === hrefHash) {
      window.setTimeout(() => scrollToSection(sectionId), 0);
    }
  };

  const navLink = (
    to: string,
    label: string,
    active: boolean,
    sectionId: 'company-overview' | 'vision' | 'structure',
  ) => {
    const hrefHash = `#${sectionId}`;
    return (
      <Link
        to={to}
        className={`font-inter text-[11px] uppercase tracking-[0.22em] transition-colors md:text-[12px] ${
          active ? 'border-b border-[#b89a6a] pb-1 text-[#111111]' : 'text-[#6e665c] hover:text-[#111111]'
        }`}
        onClick={() => onAboutTabClick(sectionId, hrefHash)}
      >
        {label}
      </Link>
    );
  };

  const isVision = pathname.includes('our-vision') || hash === '#vision';
  const isStructure = pathname.includes('our-structure') || hash === '#structure';
  const isStory =
    pathname.includes('our-story') &&
    !pathname.includes('our-vision') &&
    !pathname.includes('our-structure') &&
    (!hash || hash === '#company-overview');

  return (
    <main className="bg-[#fcfbf9] text-[#111111]">
      <div className="pt-[152px]">
        <section className="relative flex min-h-[min(56vh,600px)] w-full items-center justify-center overflow-hidden bg-[#0a0a0a] py-16 md:min-h-[min(62vh,680px)] md:py-24">
          <img
            src={heroImg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[52%_45%] opacity-[0.42]"
          />
          <div className="absolute inset-0 bg-[#1a1510]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          <div className="relative z-10 mx-auto w-full max-w-[920px] px-6 md:px-10">
            <div className="border border-white/20 bg-black/25 px-8 py-10 backdrop-blur-[2px] md:px-12 md:py-14">
              <h1 className="font-serif text-[40px] leading-[1.1] tracking-[0.02em] text-white md:text-[52px] lg:text-[58px]">
                About Us
              </h1>
              <p className="mt-6 max-w-[48ch] font-serif text-[16px] font-normal leading-[1.55] tracking-[0.01em] text-[#e8d5b5] md:text-[17px]">
                브랜드와 기술, 경험을 하나의 구조로 연결합니다
              </p>
              <div className="mt-8 max-w-[52ch] space-y-4 border-t border-white/15 pt-8">
                <p
                  className={`font-sans text-[15px] font-light leading-[1.92] text-white/88 break-keep [text-wrap:pretty] md:text-[16px]`}
                >
                  C&amp;B LAB은 뷰티를 제품만의 이야기로 두지 않습니다. 브랜드·기술·교육·서비스·글로벌 협력을 하나의
                  운영 체계로 묶어, 신뢰할 수 있는 경험과 지속 가능한 확장 구조를 설계합니다.
                </p>
                <p
                  className={`font-sans text-[15px] font-light leading-[1.92] text-white/75 break-keep [text-wrap:pretty] md:text-[16px]`}
                >
                  자체 브랜드 DIVALINE과 파트너 네트워크를 기반으로, 현장과 R&amp;D가 같은 기준을 공유하도록
                  연결합니다.
                </p>
              </div>
              <p className="mt-8 font-serif text-[12px] tracking-[0.12em] text-[#d8c1a0]/85 md:text-[13px]">
                C&amp;B LAB · DIVALINE
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#e8e4dc] bg-[#fcfbf9] py-12 md:py-14">
          <div className="mx-auto max-w-[640px] px-6 text-center md:px-8">
            <p className="font-sans text-[15px] font-light leading-[1.88] text-[#4a4a4a] break-keep [text-wrap:pretty] md:text-[16px]">
              그룹 개요와 방향, 운영 축을 아래에서 확인하실 수 있습니다.
            </p>
          </div>
        </section>

        <nav
          className="sticky top-[152px] z-30 border-b border-[#e8e4dc]/80 bg-[#fcfbf9]/95 px-6 py-5 backdrop-blur-sm md:px-12"
          aria-label="About Us sections"
        >
          <div className="mx-auto flex max-w-[880px] flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-14">
            {navLink('/about/our-story#company-overview', 'Company Overview', isStory, 'company-overview')}
            {navLink('/about/our-story#vision', 'Vision', isVision, 'vision')}
            {navLink('/about/our-story#structure', 'Structure', isStructure, 'structure')}
          </div>
        </nav>

        <div className="mx-auto max-w-[880px] px-6 pb-28 pt-16 md:px-8 md:pb-32 md:pt-20">
          <section id="company-overview" className={SECTION_SCROLL_MARGIN}>
            <h2 className="mb-8 border-b border-[#dddddd] pb-4 font-serif text-[26px] tracking-[0.02em] md:text-[30px]">
              Company Overview
            </h2>
            <div className="mb-10 flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
              <div className="min-w-0 flex-1 space-y-5 md:max-w-[65ch]">
                <p className={bodyClass}>
                  C&amp;B LAB은 제조·유통에 머무르지 않고, R&amp;D·디바이스·교육을 아우르는 그룹입니다. 기능성
                  스킨케어와 장비, 전문가 교육을 같은 구조 안에서 다룹니다.
                </p>
                <p className={bodyClass}>
                  클리닉과 살롱, 홈케어가 끊기지 않도록 제품·서비스·운영을 정렬합니다. 그 목적은 일관된 기준과
                  검증 가능한 품질입니다.
                </p>
              </div>
              <SectionImage src={sectionImages.overview.src} objectPosition={sectionImages.overview.objectPosition} alt="" />
            </div>
          </section>

          <section id="vision" className={`${SECTION_SCROLL_MARGIN} mt-24 border-t border-[#eeeeee] pt-24 md:mt-28 md:pt-28`}>
            <h2 className="mb-8 border-b border-[#dddddd] pb-4 font-serif text-[26px] tracking-[0.02em] md:text-[30px]">
              Vision
            </h2>
            <div className="mb-10 flex flex-col gap-10 md:flex-row-reverse md:items-start md:gap-14">
              <div className="min-w-0 flex-1 space-y-5 md:max-w-[65ch]">
                <p className={bodyClass}>
                  한국을 거점으로, 독일 프리미엄 PMU 체계와의 연결을 포함해 아시아와 글로벌로 확장 가능한 운영을
                  갖춥니다. 브랜드·기술·교육이 같은 목표를 향하도록 조직과 파트너십을 정돈합니다.
                </p>
                <p className={bodyClass}>
                  DIVALINE을 중심으로 제품과 시장, 교육이 분리되지 않게 유지합니다. 단기 성과보다 지속 가능한 구조를
                  우선합니다.
                </p>
              </div>
              <SectionImage src={sectionImages.vision.src} objectPosition={sectionImages.vision.objectPosition} alt="" />
            </div>
          </section>

          <section id="structure" className={`${SECTION_SCROLL_MARGIN} mt-24 border-t border-[#eeeeee] pt-24 md:mt-28 md:pt-28`}>
            <h2 className="mb-8 border-b border-[#dddddd] pb-4 font-serif text-[26px] tracking-[0.02em] md:text-[30px]">
              Structure
            </h2>
            <div className="mb-10 flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
              <div className="min-w-0 flex-1 space-y-5 md:max-w-[65ch]">
                <p className={bodyClass}>
                  C&amp;B LAB은 브랜드, 기술, 교육, 서비스, 글로벌 파트너십이 서로 분리되지 않고 연결되는 구조로
                  설계됩니다.
                </p>
                <p className={bodyClass}>
                  단일 제품 판매가 아니라, 브랜드 경험과 실제 운영 흐름이 함께 확장될 수 있도록 각 축이 유기적으로
                  연결된 플랫폼 구조를 지향합니다.
                </p>
                <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-9 border-y border-[#e0dcd4] py-8 sm:gap-x-7 sm:gap-y-10 md:gap-x-8">
                  {pillars.map((p) => (
                    <li
                      key={p.en}
                      className="min-w-0 max-w-[11rem] flex-[1_1_9rem] px-2 text-center sm:flex-[1_1_10rem] md:max-w-[12rem] md:flex-[0_1_10.5rem]"
                    >
                      <p className="font-inter text-[10px] uppercase leading-snug tracking-[0.12em] text-[#111111] sm:text-[11px] sm:tracking-[0.14em]">
                        {p.en}
                      </p>
                      <p className="mt-2 font-sans text-[12px] font-light leading-snug text-[#6e665c]">{p.ko}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <SectionImage src={sectionImages.structure.src} objectPosition={sectionImages.structure.objectPosition} alt="" />
            </div>
          </section>

          <section
            id="strategic-expansion"
            className={`${SECTION_SCROLL_MARGIN} mt-24 border-t border-[#eeeeee] pt-24 md:mt-28 md:pt-28`}
          >
            <h2 className="mb-8 border-b border-[#dddddd] pb-4 font-serif text-[26px] tracking-[0.02em] md:text-[30px]">
              Strategic Expansion
            </h2>
            <div className="space-y-8">
              <p className={`${bodyClass} max-w-[74ch]`}>
                C&amp;B LAB은 브랜드 운영을 넘어, 글로벌 파트너십, 시장 확장, 브랜드 확장을 함께 설계합니다.
              </p>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:gap-6">
                <article className="border border-[#e4dfd6] bg-[#faf8f4] px-6 py-7">
                  <h3 className="font-serif text-[20px] tracking-[0.02em] text-[#111111] md:text-[22px]">
                    Global Partnership
                  </h3>
                  <p className="mt-4 font-sans text-[14px] font-light leading-[1.85] tracking-[-0.01em] text-[#4a4a4a] md:text-[15px]">
                    글로벌 파트너와 기준을 정렬해 기술과 운영의 일관성을 확장합니다.
                  </p>
                </article>
                <article className="border border-[#e4dfd6] bg-[#faf8f4] px-6 py-7">
                  <h3 className="font-serif text-[20px] tracking-[0.02em] text-[#111111] md:text-[22px]">
                    Brand Expansion
                  </h3>
                  <p className="mt-4 font-sans text-[14px] font-light leading-[1.85] tracking-[-0.01em] text-[#4a4a4a] md:text-[15px]">
                    브랜드 경험과 제품 포트폴리오를 연결해 확장 가능한 성장 구조를 구축합니다.
                  </p>
                </article>
                <article className="border border-[#e4dfd6] bg-[#faf8f4] px-6 py-7">
                  <h3 className="font-serif text-[20px] tracking-[0.02em] text-[#111111] md:text-[22px]">
                    Market Strategy
                  </h3>
                  <p className="mt-4 font-sans text-[14px] font-light leading-[1.85] tracking-[-0.01em] text-[#4a4a4a] md:text-[15px]">
                    시장별 포지셔닝과 운영 전략을 통합해 장기적인 확장 경로를 설계합니다.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <div className="mt-20 border-t border-[#eeeeee] pt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-inter text-[11px] uppercase tracking-[0.2em] text-[#6e665c] transition-colors hover:text-[#111111]"
            >
              ← Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
