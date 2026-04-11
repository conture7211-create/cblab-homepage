import { Link } from 'react-router-dom';

const blocks = [
  {
    title: '고객과 전문가가 경험하는 브랜드 수준',
    body: '소비자 접점과 B2B·교육 현장에서 동일한 품질 체감을 목표로 합니다. 말로만 프리미엄이 아니라 접촉 순간마다 검증 가능한 수준을 지향합니다.',
  },
  {
    title: '서비스, 제품, 공간, 교육이 연결되는 경험',
    body: '구매 이후의 케어, 시술 프로토콜, 공간 동선, 재교육까지 끊기지 않는 여정을 설계합니다.',
  },
  {
    title: '단순 판매가 아닌 프리미엄 구조',
    body: '거래 완료를 끝이 아니라 관계의 시작으로 두고, 멤버십·교육·파트너 지원으로 브랜드 가치가 유지되도록 합니다.',
  },
];

export default function PremiumExperience() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">Brand Identity</p>
      <nav
        className="mb-6 flex flex-wrap items-center gap-x-1 font-sans text-[12px] tracking-[0.04em] text-[#6e665c] md:text-[13px]"
        aria-label="Brand Identity pages"
      >
        <Link to="/about/brand-philosophy" className="transition-colors hover:text-[#111111]">
          Brand Philosophy
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <Link to="/about/visual-direction" className="transition-colors hover:text-[#111111]">
          Visual Direction
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <span className="border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]">Premium Experience</span>
      </nav>
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">Premium Experience</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        프리미엄 경험은 개별 터치포인트의 합이 아니라, 브랜드가 약속한 수준이 전 구간에서 반복 확인되는 구조입니다.
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
