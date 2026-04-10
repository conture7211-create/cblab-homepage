import { LongTimeLinerSubNav } from './brands/BrandSubNavs';

const blocks = [
  {
    title: '프리미엄 기술 기준',
    body: '정밀한 머신과 안정적인 색소 시스템을 기반으로 높은 시술 완성도를 제공합니다.',
  },
  {
    title: '글로벌 브랜드 가치',
    body: '유럽을 중심으로 구축된 브랜드 신뢰와 운영 기준을 유지합니다.',
  },
  {
    title: '교육 및 시스템 연계',
    body: '기술 교육과 운영 시스템을 함께 제공하여 전문가 시장을 확장합니다.',
  },
];

export default function LongTimeLinerPage() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">BRANDS</p>
      <LongTimeLinerSubNav active={null} />
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">LONG-TIME-LINER</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        LONG-TIME-LINER는 독일 프리미엄 PMU 브랜드로, 기술과 품질 기준을 기반으로 운영됩니다.
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
