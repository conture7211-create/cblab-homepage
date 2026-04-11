import { Link } from 'react-router-dom';

const blocks = [
  {
    title: '브랜드 철학과 기준',
    body: 'C&B LAB은 단기 트렌드보다 브랜드가 지켜야 할 가치와 품질 기준을 먼저 정의합니다. 모든 제품·서비스 결정이 이 기준을 통과하도록 운영합니다.',
  },
  {
    title: '프리미엄 뷰티 플랫폼으로서의 방향',
    body: '소비자 브랜드와 전문가 시장을 아우르는 플랫폼으로서, 각 접점에서 동일한 신뢰 수준을 목표로 합니다. 확장은 브랜드 희석이 아닌 구조 강화로 이해합니다.',
  },
  {
    title: '신뢰, 일관성, 확장성',
    body: '약속과 실행의 간극을 줄이고, 채널과 지역이 달라도 경험이 어긋나지 않게 합니다. 이를 전제로 해외 협업과 신규 라인을 수용합니다.',
  },
];

export default function BrandPhilosophy() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">Brand Identity</p>
      <nav
        className="mb-6 flex flex-wrap items-center gap-x-1 font-sans text-[12px] tracking-[0.04em] text-[#6e665c] md:text-[13px]"
        aria-label="Brand Identity pages"
      >
        <span className="border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]">Brand Philosophy</span>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <Link to="/about/visual-direction" className="transition-colors hover:text-[#111111]">
          Visual Direction
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <Link to="/about/premium-experience" className="transition-colors hover:text-[#111111]">
          Premium Experience
        </Link>
      </nav>
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">Brand Philosophy</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        브랜드 철학은 C&amp;B LAB이 시장과 고객에게 약속하는 방향의 기준점이며, DIVALINE과 그룹 전체가 같은 원칙 위에서 움직이도록 설계되어 있습니다.
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
