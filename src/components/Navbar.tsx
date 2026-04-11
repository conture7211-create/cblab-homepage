import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

type MenuEntry = string | { label: string; to: string };

type SubMenuItem = {
  category: string;
  /** BRANDS 등: 컬럼 제목(카테고리) 자체를 라우트로 연결 */
  categoryTo?: string;
  items: MenuEntry[];
};

type NavItem = {
  label: string;
  href: string;
  overviewTitle: string;
  headline: string;
  body: string;
  image: string;
  linkText: string;
  columns?: SubMenuItem[];
};

/** BUSINESS 메가메뉴만 별도 상수 + 펼침 렌더로 컬럼 혼선 방지 */
const BUSINESS_MEGA_AREA: SubMenuItem = {
  category: 'Device & Product',
  items: [
    { label: 'Device', to: '/business/beauty-device' },
    { label: 'Cosmetics', to: '/business/functional-skincare' },
    { label: 'Homecare', to: '/business/homecare' },
  ],
};

const BUSINESS_MEGA_SOLUTIONS: SubMenuItem = {
  category: 'Education System',
  items: [
    { label: 'Training', to: '/brands/long-time-liner/pmu-system' },
    { label: 'Professional', to: '/business/professional-education' },
    { label: 'Experience', to: '/about/premium-experience' },
  ],
};

const BUSINESS_MEGA_EXPERIENCE: SubMenuItem = {
  category: 'Global Expansion',
  items: [
    { label: 'Partnership', to: '/brands/brand-platform/partnership' },
    { label: 'Brand', to: '/brands/brand-platform' },
    { label: 'Strategy', to: '/brands/brand-platform/professional' },
  ],
};

const navItems: NavItem[] = [
  {
    label: 'ABOUT',
    href: '/#about',
    overviewTitle: 'Overview',
    headline: '브랜드와 시스템으로\n아름다움을 설계합니다',
    body: 'C&B LAB은 브랜드, 기술, 교육, 서비스를\n하나의 구조 안에서 설계하는 프리미엄 뷰티 그룹입니다.',
    linkText: 'View Overview',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2600&auto=format&fit=crop',
    columns: [
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
      }
    ]
  },
  {
    label: 'BUSINESS',
    href: '/#business',
    overviewTitle: 'OVERVIEW',
    headline: 'Integrated Beauty Platform',
    body: '제품, 교육, 서비스를\n하나의 흐름으로 연결합니다.',
    linkText: 'View Structure',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1800&auto=format&fit=crop',
    columns: [BUSINESS_MEGA_AREA, BUSINESS_MEGA_SOLUTIONS, BUSINESS_MEGA_EXPERIENCE],
  },
  {
    label: 'BRANDS',
    href: '/#brands',
    overviewTitle: 'OVERVIEW',
    headline: '각기 다른 역할로\n연결된 브랜드 포트폴리오',
    body: '각 브랜드는 서로 다른 역할로\n하나의 플랫폼 안에서 연결됩니다.',
    linkText: 'View Brands',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1800&auto=format&fit=crop',
    columns: [
      {
        category: 'DIVALINE',
        categoryTo: '/brands/divaline',
        items: [
          { label: 'Platform', to: '/brands/divaline' },
          { label: 'Device & Homecare', to: '/brands/divaline/homecare' },
          { label: 'Experience', to: '/about/premium-experience' },
        ],
      },
      {
        category: 'LONG-TIME-LINER',
        categoryTo: '/brands/long-time-liner',
        items: [
          { label: 'German Heritage', to: '/brands/long-time-liner/heritage' },
          { label: 'Professional System', to: '/brands/long-time-liner/pmu-system' },
          { label: 'Premium Standard', to: '/brands/long-time-liner/academy' },
        ],
      },
      {
        category: 'Brand Expansion',
        categoryTo: '/brands/brand-platform',
        items: [
          { label: 'Education', to: '/business/professional-education' },
          { label: 'Market', to: '/brands/brand-platform/professional' },
          { label: 'Global', to: '/brands/brand-platform/partnership' },
        ],
      },
    ],
  },
  {
    label: 'TECHNOLOGY',
    href: '/#technology',
    overviewTitle: 'OVERVIEW',
    headline: '브랜드의 지속 가능성을\n기술로 설계합니다',
    body: 'C&B LAB은 디바이스 설계, 소재 개발,\n교육 시스템을 하나의 구조로 연결합니다.',
    linkText: 'View Technology',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1800&auto=format&fit=crop',
    columns: [
      {
        category: 'Development',
        items: [
          { label: 'Planning', to: '/technology/development' },
          { label: 'Formulation', to: '/technology/development' },
          { label: 'Design', to: '/technology/development' },
        ],
      },
      {
        category: 'System',
        items: [
          { label: 'Education System', to: '/technology/system' },
          { label: 'Quality', to: '/technology/system' },
          { label: 'Experience', to: '/technology/system' },
        ],
      },
      {
        category: 'Scalability',
        items: [
          { label: 'Platform', to: '/technology/scalability' },
          { label: 'Operation', to: '/technology/scalability' },
          { label: 'Expansion', to: '/technology/scalability' },
        ],
      },
    ]
  },
  {
    label: 'EDUCATION',
    href: '/#education',
    overviewTitle: 'OVERVIEW',
    headline: '전문가 역량을\n시스템으로 전달합니다',
    body: '입문부터 전문가까지\n이어지는 교육 구조',
    linkText: 'View Education',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1800&auto=format&fit=crop',
    columns: [
      {
        category: 'Professional Training',
        items: [
          { label: 'Training', to: '/education/professional-training' },
          { label: 'Protocol', to: '/education/professional-training' },
          { label: 'Growth', to: '/education/professional-training' },
        ],
      },
      {
        category: 'Home Training',
        items: [
          { label: 'Starter', to: '/education/home-training' },
          { label: 'Practice', to: '/education/home-training' },
          { label: 'Repetition', to: '/education/home-training' },
        ],
      },
      {
        category: 'Academy System',
        items: [
          { label: 'Curriculum', to: '/education/academy-system' },
          { label: 'Operation', to: '/education/academy-system' },
          { label: 'Brand', to: '/education/academy-system' },
        ],
      },
    ],
  },
];

/** 메가메뉴 우측 3컬럼 — 제목·항목 (가독성·프리미엄 톤) */
const megaMenuColumnTitleClass =
  'mb-4 border-b border-[#dddddd]/60 pb-2.5 font-serif text-[19px] md:text-[21px] tracking-[0.02em] text-[#111111] font-semibold';

const businessMegaRowClass =
  'font-sans text-[15px] md:text-[16px] text-[#383838] font-medium tracking-wide hover:text-[#b89a6a] transition-colors';

function MegaMenuColumn({
  col,
  menuLabel,
  onClose,
}: {
  col: SubMenuItem;
  menuLabel: string;
  onClose: () => void;
}) {
  const rowClass = businessMegaRowClass;

  return (
    <div className="flex min-w-0 flex-1 basis-0 flex-col">
      <h4 className={megaMenuColumnTitleClass}>
        {col.categoryTo ? (
          <Link
            to={col.categoryTo}
            onClick={onClose}
            className="text-inherit transition-colors hover:text-[#b89a6a]"
          >
            {col.category}
          </Link>
        ) : (
          col.category
        )}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {col.items.map((item, iIdx) => {
          if (typeof item === 'string') {
            return (
              <li
                key={`${menuLabel}-${col.category}-text-${item}-${iIdx}`}
                onClick={onClose}
                className={`${rowClass} cursor-pointer`}
              >
                {item}
              </li>
            );
          }
          if (item.to) {
            return (
              <li key={`${menuLabel}-${col.category}-link-${item.label}-${iIdx}`}>
                <Link
                  to={item.to}
                  onClick={onClose}
                  className={`${rowClass} relative z-[1] block`}
                >
                  {item.label}
                </Link>
              </li>
            );
          }
          return (
            <li
              key={`${menuLabel}-${col.category}-text-${item.label}-${iIdx}`}
              onClick={onClose}
              className={`${rowClass} cursor-pointer`}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeMenu = hoveredIndex !== null ? navItems[hoveredIndex] : null;

  return (
    <>
      <header
        onMouseLeave={() => setHoveredIndex(null)}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${scrolled || hoveredIndex !== null
            ? 'bg-black border-b border-white/10'
            : 'bg-black/85 backdrop-blur-[2px]'
          }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="h-[152px] flex items-center justify-between">

            {/* Left: Language */}
            <div className="hidden md:flex items-center gap-8 min-w-[168px]">
              <button
                type="button"
                className="text-white text-[14px] md:text-[15px] font-semibold tracking-[0.1em] border-b border-white pb-1"
              >
                KR
              </button>
              <button
                type="button"
                className="text-white/90 hover:text-white text-[14px] md:text-[15px] font-semibold tracking-[0.1em] transition-colors"
              >
                EN
              </button>
              <button
                type="button"
                className="text-white/90 hover:text-white text-[14px] md:text-[15px] font-semibold tracking-[0.1em] transition-colors"
              >
                CN
              </button>
            </div>

            {/* Center */}
            <div className="flex flex-col items-center justify-center flex-1 h-full">
              <Link
                to="/"
                onClick={() => setHoveredIndex(null)}
                className="font-serif text-[38px] sm:text-[40px] lg:text-[42px] xl:text-[44px] font-semibold tracking-[0.08em] text-white whitespace-nowrap mt-3 [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]"
              >
                C&amp;B <span className="text-[#d8c1a0]">LAB</span>
              </Link>

              <nav className="hidden lg:flex items-center gap-10 xl:gap-14 2xl:gap-[4.25rem] mt-5 h-full pb-5">
                {navItems.map((item, idx) => {
                  const navLinkClass = `whitespace-nowrap font-serif text-[14px] lg:text-[15px] xl:text-[16px] font-semibold tracking-[0.06em] transition-colors duration-300 h-full flex items-center ${
                    hoveredIndex === idx ? 'text-[#d8c1a0]' : 'text-white hover:text-[#d8c1a0]'
                  }`;
                  if (item.label === 'EDUCATION') {
                    return (
                      <a
                        key={item.label}
                        href="/#education"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onClick={() => setHoveredIndex(null)}
                        className={navLinkClass}
                      >
                        EDUCATION
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onClick={() => setHoveredIndex(null)}
                      className={navLinkClass}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right */}
            <div className="hidden md:flex items-center justify-end min-w-[168px]">
              <a
                href="#contact"
                onClick={() => setHoveredIndex(null)}
                className="flex items-center justify-center min-w-[162px] h-[52px] px-8 border border-white/55 text-white text-[14px] tracking-[0.14em] font-inter font-semibold hover:bg-white/[0.12] hover:border-[#d8c1a0]/65 transition-all duration-300"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown Panel */}
        <AnimatePresence>
          {hoveredIndex !== null && activeMenu && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '8.5cm' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto absolute top-[152px] left-0 z-[55] w-full overflow-hidden border-t border-black/5 bg-[#fcfbf9]/95 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] backdrop-blur-sm"
            >
              <div className="mx-auto flex h-full max-w-[1720px] px-8 md:px-16 lg:px-24">
                <div className="navbar-mega-inner flex min-h-0 w-full flex-col items-stretch overflow-y-auto lg:flex-row">
                  
                  {/* Left: Summary */}
                  <div className="flex w-full shrink-0 flex-col justify-start gap-4 border-r border-[#dddddd]/60 pr-8 min-h-0 lg:w-[280px] xl:w-[340px]">
                    <div>
                      <h3 className="font-serif text-[24px] md:text-[26px] font-semibold tracking-[0.02em] text-[#111111] mb-1">
                        {activeMenu.label}
                      </h3>
                      <span className="overview-kicker mb-4">{activeMenu.overviewTitle}</span>
                      <p className="overview-body-text pr-2 whitespace-pre-line">
                        {activeMenu.body}
                      </p>
                    </div>
                    
                    <Link 
                      to={activeMenu.href} 
                      onClick={() => setHoveredIndex(null)}
                      className="overview-cta w-fit"
                    >
                      {activeMenu.linkText} <span aria-hidden="true" className="font-light">→</span>
                    </Link>
                  </div>

                  {/* Right: 3 Columns — flex로 분리해 그리드/오버플로우로 인한 동일 콘텐츠 착시 방지 */}
                  <div className="min-h-0 min-w-0 flex-1 pl-10 xl:pl-16">
                    <div className="isolate flex min-h-0 w-full flex-col gap-10 lg:flex-row lg:gap-10 xl:gap-14">
                      {activeMenu.label === 'BUSINESS' ? (
                        <>
                          <div className="flex min-w-0 flex-1 basis-0 flex-col">
                            <h4 className={megaMenuColumnTitleClass}>
                              Product &amp; Device
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                              <li>
                                <Link
                                  to="/business/beauty-device"
                                  onClick={() => setHoveredIndex(null)}
                                  className={`${businessMegaRowClass} relative z-[1] block`}
                                >
                                  Beauty Device
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/business/functional-skincare"
                                  onClick={() => setHoveredIndex(null)}
                                  className={`${businessMegaRowClass} relative z-[1] block`}
                                >
                                  Functional Cosmetics
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/business/homecare"
                                  onClick={() => setHoveredIndex(null)}
                                  className={`${businessMegaRowClass} relative z-[1] block`}
                                >
                                  Homecare Solutions
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="flex min-w-0 flex-1 basis-0 flex-col">
                            <h4 className={megaMenuColumnTitleClass}>
                              Education &amp; Service
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                              <li>
                                <Link
                                  to="/brands/long-time-liner/pmu-system"
                                  onClick={() => setHoveredIndex(null)}
                                  className={`${businessMegaRowClass} relative z-[1] block`}
                                >
                                  PMU Training
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/business/professional-education"
                                  onClick={() => setHoveredIndex(null)}
                                  className={`${businessMegaRowClass} relative z-[1] block`}
                                >
                                  Professional Education
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/about/premium-experience"
                                  onClick={() => setHoveredIndex(null)}
                                  className={`${businessMegaRowClass} relative z-[1] block`}
                                >
                                  Premium Experience
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="flex min-w-0 flex-1 basis-0 flex-col">
                            <h4 className={megaMenuColumnTitleClass}>
                              Growth &amp; Partnership
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                              <li>
                                <Link
                                  to="/about/our-story#strategic-expansion"
                                  onClick={() => setHoveredIndex(null)}
                                  className={`${businessMegaRowClass} relative z-[1] block`}
                                >
                                  Global Partnership
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/about/our-story#strategic-expansion"
                                  onClick={() => setHoveredIndex(null)}
                                  className={`${businessMegaRowClass} relative z-[1] block`}
                                >
                                  Brand Expansion
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/about/our-story#strategic-expansion"
                                  onClick={() => setHoveredIndex(null)}
                                  className={`${businessMegaRowClass} relative z-[1] block`}
                                >
                                  Market Strategy
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        activeMenu.columns?.map((col, cIdx) => (
                          <MegaMenuColumn
                            key={`${activeMenu.label}-${col.category}-${cIdx}`}
                            col={col}
                            menuLabel={activeMenu.label}
                            onClose={() => setHoveredIndex(null)}
                          />
                        ))
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Scroll offset padding to match new taller header when scrolling */}
      {hoveredIndex !== null && (
         <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300" />
      )}
    </>
  );
};

export default Navbar;