import { Link } from 'react-router-dom';

const blocks = [
  {
    title: 'DivaStone 중심 뷰티 디바이스 구조',
    body: 'DivaStone을 핵심으로, 시술과 홈케어 모두에 활용 가능한 디바이스 라인을 구성하고 사용 흐름을 설계합니다.',
  },
  {
    title: '현장 사용성과 홈케어 확장',
    body: '전문가 현장에서의 안정성과 프로토콜을 기반으로, 소비자가 집에서도 이어 사용할 수 있는 구조를 만듭니다.',
  },
  {
    title: '제품·디바이스·브랜드 경험 연결',
    body: '디바이스를 중심으로 제품, 서비스, 교육까지 연결하여 일관된 브랜드 경험을 제공합니다.',
  },
];

export default function BeautyDevice() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">BUSINESS AREAS</p>
      <nav
        className="mb-6 flex flex-wrap items-center gap-x-1 font-sans text-[12px] tracking-[0.04em] text-[#6e665c] md:text-[13px]"
        aria-label="Business areas"
      >
        <Link to="/business/functional-skincare" className="transition-colors hover:text-[#111111]">
          Functional Skincare
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <span className="border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]">Beauty Device</span>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <Link to="/business/professional-education" className="transition-colors hover:text-[#111111]">
          Professional Education
        </Link>
      </nav>
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">Beauty Device</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        DivaStone을 중심으로 현장과 홈을 잇는 디바이스 구조와, 제품·브랜드 경험까지 연결하는 사업 영역입니다.
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
