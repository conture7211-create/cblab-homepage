import { Link } from 'react-router-dom';

const blocks = [
  {
    title: '교육 프로토콜 설계',
    body: '커리큘럼, 실습, 평가가 브랜드가 정한 서비스 기준과 일치하도록 단계별 프로토콜을 설계합니다. 현장 복귀 후에도 재현 가능한 구조를 목표로 합니다.',
  },
  {
    title: '브랜드 기준과 서비스 품질 일관성',
    body: '용어, 시연 순서, 고객 응대 톤까지 교육 자료에 반영해 지점·파트너 간 품질 편차를 줄입니다.',
  },
  {
    title: '기술 전달과 현장 확장 기반',
    body: '신제품·디바이스 출시와 맞춰 교육을 업데이트하고, 글로벌 파트너와 공유 가능한 교육 자산 구조를 갖춥니다.',
  },
];

export default function EducationSystem() {
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
        <Link to="/about/device-design" className="transition-colors hover:text-[#111111]">
          Device Design
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <span className="border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]">Education System</span>
      </nav>
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">Education System</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        교육은 브랜드 약속을 현장에서 지키게 하는 시스템입니다. C&amp;B LAB은 기술 전수와 운영 표준을 함께 설계합니다.
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
