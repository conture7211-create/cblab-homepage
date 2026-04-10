import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const heroImg =
  '/images/about-rnd/vision-pmu.jpg';

const sectionImages = {
  product: {
    src: '/images/about-rnd/product-divaflex.jpg',
    objectPosition: '50% 50%',
  },
  device: {
    src: '/images/about-rnd/device-main.jpg',
    objectPosition: '56% 44%',
  },
  education: {
    src: '/images/about-rnd/handpiece.jpg',
    objectPosition: '50% 45%',
  },
};

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

const SECTION_SCROLL_MARGIN = 'scroll-mt-[212px]';

type RnDSectionId = 'product-development' | 'device-design' | 'education-system';

function resolveRnDSectionId(hash: string): string | null {
  if (hash === '#product-development') return 'product-development';
  if (hash === '#device-design') return 'device-design';
  if (hash === '#education-system') return 'education-system';
  if (hash === '#research-development') return 'research-development-hero';
  return null;
}

function scrollToSection(id: string) {
  window.requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

export default function AboutResearchDevelopment() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = resolveRnDSectionId(hash);
    if (!id) return;
    const t = window.setTimeout(() => scrollToSection(id), 80);
    return () => window.clearTimeout(t);
  }, [hash]);

  const onRnDTabClick = (sectionId: RnDSectionId, hrefHash: string) => {
    const onPage =
      pathname === '/about/research-development' || pathname.endsWith('/about/research-development');
    if (!onPage) return;
    if (hash === hrefHash) {
      window.setTimeout(() => scrollToSection(sectionId), 0);
    }
  };

  const navLink = (to: string, label: string, active: boolean, sectionId: RnDSectionId) => {
    const hrefHash = `#${sectionId}`;
    return (
      <Link
        to={to}
        className={`font-inter text-[11px] uppercase tracking-[0.22em] transition-colors md:text-[12px] ${
          active ? 'border-b border-[#b89a6a] pb-1 text-[#111111]' : 'text-[#6e665c] hover:text-[#111111]'
        }`}
        onClick={() => onRnDTabClick(sectionId, hrefHash)}
      >
        {label}
      </Link>
    );
  };

  const tabDevice = hash === '#device-design';
  const tabEdu = hash === '#education-system';
  const tabProduct =
    (hash === '#product-development' || hash === '' || !hash) && !tabDevice && !tabEdu;

  return (
    <main className="bg-[#fcfbf9] text-[#111111]">
      <div className="pt-[152px]">
        <section
          id="research-development-hero"
          className={`relative flex min-h-[min(56vh,600px)] w-full items-center justify-center overflow-hidden bg-[#0a0a0a] py-16 md:min-h-[min(62vh,680px)] md:py-24 ${SECTION_SCROLL_MARGIN}`}
        >
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
              <p className="mb-4 font-inter text-[11px] uppercase tracking-[0.4em] text-[#d8c1a0] md:text-xs">
                RESEARCH &amp; DEVELOPMENT
              </p>
              <h1 className="font-serif text-[40px] leading-[1.1] tracking-[0.02em] text-white md:text-[52px] lg:text-[58px]">
                Research &amp; Development
              </h1>
              <p className="mt-6 max-w-[48ch] font-serif text-[16px] font-normal leading-[1.55] tracking-[0.01em] text-[#e8d5b5] md:text-[17px]">
                제품 개발과 설계, 교육 시스템을 하나의 흐름으로 연결합니다
              </p>
              <div className="mt-8 max-w-[52ch] space-y-4 border-t border-white/15 pt-8">
                <p
                  className={`font-sans text-[15px] font-light leading-[1.92] text-white/88 break-keep [text-wrap:pretty] md:text-[16px]`}
                >
                  C&amp;B LAB의 기술은 단순한 제조에 머무르지 않습니다. 제품 기획, 디바이스 설계, 교육 시스템까지
                  연결된 구조를 설계합니다.
                </p>
                <p
                  className={`font-sans text-[15px] font-light leading-[1.92] text-white/75 break-keep [text-wrap:pretty] md:text-[16px]`}
                >
                  시장성과 현장 적용성을 함께 고려해, 기술이 실제 경험과 운영으로 이어지는 구조를 구축합니다.
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
              개발 구조와 설계 방향, 교육 흐름을 아래에서 확인하실 수 있습니다.
            </p>
          </div>
        </section>

        <nav
          className="sticky top-[152px] z-30 border-b border-[#e8e4dc]/80 bg-[#fcfbf9]/95 px-6 py-5 backdrop-blur-sm md:px-12"
          aria-label="Research and Development sections"
        >
          <div className="mx-auto flex max-w-[880px] flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-14">
            {navLink(
              '/about/research-development#product-development',
              'Product Development',
              tabProduct,
              'product-development',
            )}
            {navLink(
              '/about/research-development#device-design',
              'Device Design',
              tabDevice,
              'device-design',
            )}
            {navLink(
              '/about/research-development#education-system',
              'Education System',
              tabEdu,
              'education-system',
            )}
          </div>
        </nav>

        <div className="mx-auto max-w-[880px] px-6 pb-28 pt-16 md:px-8 md:pb-32 md:pt-20">
          <section id="product-development" className={SECTION_SCROLL_MARGIN}>
            <h2 className="mb-8 border-b border-[#dddddd] pb-4 font-serif text-[26px] tracking-[0.02em] md:text-[30px]">
              Product Development
            </h2>
            <div className="mb-10 flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
              <div className="min-w-0 flex-1 space-y-5 md:max-w-[65ch]">
                <p className={bodyClass}>
                  C&amp;B LAB은 단순 유통형 제품이 아니라, 현장 활용성과 시장성을 함께 고려한 제품 구조를
                  설계합니다.
                </p>
                <p className={bodyClass}>
                  기능성 화장품, 홈케어 제품, 시술 후 관리 제품 등 브랜드 경험과 실제 사용 흐름이 연결되도록
                  기획합니다.
                </p>
              </div>
              <SectionImage src={sectionImages.product.src} objectPosition={sectionImages.product.objectPosition} alt="" />
            </div>
          </section>

          <section
            id="device-design"
            className={`${SECTION_SCROLL_MARGIN} mt-24 border-t border-[#eeeeee] pt-24 md:mt-28 md:pt-28`}
          >
            <h2 className="mb-8 border-b border-[#dddddd] pb-4 font-serif text-[26px] tracking-[0.02em] md:text-[30px]">
              Device Design
            </h2>
            <div className="mb-10 flex flex-col gap-10 md:flex-row-reverse md:items-start md:gap-14">
              <div className="min-w-0 flex-1 space-y-5 md:max-w-[65ch]">
                <p className={bodyClass}>
                  디바이스는 단순 기기가 아니라, 브랜드 경험과 사용자 동선을 함께 설계하는 구조입니다.
                </p>
                <p className={bodyClass}>
                  실무 적용성, 홈케어 확장성, 현장 활용성을 고려해 제품과 서비스가 연결되는 방향으로 설계합니다.
                </p>
              </div>
              <SectionImage src={sectionImages.device.src} objectPosition={sectionImages.device.objectPosition} alt="" />
            </div>
          </section>

          <section
            id="education-system"
            className={`${SECTION_SCROLL_MARGIN} mt-24 border-t border-[#eeeeee] pt-24 md:mt-28 md:pt-28`}
          >
            <h2 className="mb-8 border-b border-[#dddddd] pb-4 font-serif text-[26px] tracking-[0.02em] md:text-[30px]">
              Education System
            </h2>
            <div className="mb-10 flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
              <div className="min-w-0 flex-1 space-y-5 md:max-w-[65ch]">
                <p className={bodyClass}>
                  기술과 제품이 결과로 이어지기 위해서는 교육 구조가 함께 설계되어야 합니다.
                </p>
                <p className={bodyClass}>
                  전문가 교육, 홈트레이닝, 현장 적용 흐름까지 연결되는 지속 가능한 학습 구조를 지향합니다.
                </p>
              </div>
              <SectionImage src={sectionImages.education.src} objectPosition={sectionImages.education.objectPosition} alt="" />
            </div>
          </section>

          <div className="mt-20 border-t border-[#eeeeee] pt-12 text-center">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10">
              <Link
                to="/about/our-story"
                className="inline-flex items-center gap-2 font-inter text-[11px] uppercase tracking-[0.2em] text-[#6e665c] transition-colors hover:text-[#111111]"
              >
                ← ABOUT US
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 font-inter text-[11px] uppercase tracking-[0.2em] text-[#6e665c] transition-colors hover:text-[#111111]"
              >
                ← HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
