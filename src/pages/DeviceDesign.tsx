import { Link } from 'react-router-dom';

const blocks = [
  {
    title: '디바이스 설계 철학',
    body: '뷰티 디바이스는 도구를 넘어 브랜드 신뢰를 전달하는 접점입니다. 안전성, 내구성, 감성을 동등한 축으로 두고 설계합니다.',
  },
  {
    title: '사용성, 디자인, 기능의 균형',
    body: '과한 스펙보다 실제 시술·홈케어 맥락에서의 조작감과 유지보수성을 우선합니다. 시각적 톤은 브랜드 가이드와 정렬됩니다.',
  },
  {
    title: '전문가와 소비자 경험을 고려한 구조',
    body: '클리닉용과 홈케어용 요구를 구분해 모듈과 인터페이스를 설계하고, 교육·매뉴얼·AS 흐름까지 한 번에 고려합니다.',
  },
];

export default function DeviceDesign() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">
        Research &amp; Development
      </p>
      <nav
        className="mb-6 flex flex-wrap items-center gap-x-1 font-sans text-[12px] tracking-[0.04em] text-[#6e665c] md:text-[13px]"
        aria-label="Research and Development pages"
      >
        <Link to="/about/product-development" className="transition-colors hover:text-[#111111]">
          Product Development
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <span className="border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]">Device Design</span>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <Link to="/about/education-system" className="transition-colors hover:text-[#111111]">
          Education System
        </Link>
      </nav>
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">Device Design</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        디바이스는 C&amp;B LAB 플랫폼에서 제품과 교육을 잇는 핵심 하드웨어 축으로, 현장 신뢰와 브랜드 톤을 동시에 담당합니다.
      </p>
      <div className="flex flex-col gap-14">
        {blocks.map((b) => (
          <section key={b.title}>
            <h2 className="mb-4 border-b border-[#dddddd] pb-3 font-serif text-[20px] tracking-[0.02em] md:text-[22px]">
              {b.title}
            </h2>
            <p className="font-sans text-[15px] font-light leading-[1.85] text-[#555555] break-keep md:text-[16px]">
              {b.body}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
