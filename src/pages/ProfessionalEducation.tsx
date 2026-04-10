import { Link } from 'react-router-dom';

const blocks = [
  {
    title: '실무 중심 교육 구조',
    body: '이론이 아닌 실제 시술과 운영에 바로 적용 가능한 교육 흐름으로 구성합니다.',
  },
  {
    title: '단계별 성장 시스템',
    body: '입문부터 전문가까지 이어지는 교육 과정을 통해 지속적인 기술 향상과 경험 축적이 가능하도록 설계합니다.',
  },
  {
    title: '교육과 브랜드 연결',
    body: '교육 이후에도 제품, 서비스, 운영까지 이어질 수 있도록 브랜드 기반의 성장 구조를 제공합니다.',
  },
];

export default function ProfessionalEducation() {
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
        <Link to="/business/beauty-device" className="transition-colors hover:text-[#111111]">
          Beauty Device
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <span className="border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]">Professional Education</span>
      </nav>
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">Professional Education</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        기술 교육을 넘어 현장 적용과 브랜드 운영까지 연결되는 실무 중심 교육 시스템을 구축합니다.
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
