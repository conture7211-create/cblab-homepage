import { BrandPlatformSubNav } from './brands/BrandSubNavs';

const blocks = [
  {
    title: '브랜드 구조 설계',
    body: '각 브랜드는 명확한 역할과 타겟을 기반으로 설계되며, 중복 없이 기능적으로 분리됩니다.',
  },
  {
    title: '시장별 포지셔닝',
    body: 'Consumer, Professional, Partnership으로 나누어 서로 다른 고객과 시장에 대응합니다.',
  },
  {
    title: '통합 브랜드 운영',
    body: '각 브랜드는 독립적으로 운영되면서도 하나의 플랫폼 안에서 연결됩니다.',
  },
];

export default function BrandPlatformPage() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">BRANDS</p>
      <BrandPlatformSubNav active={null} />
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">Brand Platform</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        C&amp;B LAB은 브랜드별 역할과 시장 포지션을 분리하여 하나의 통합 구조 안에서 운영합니다.
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
