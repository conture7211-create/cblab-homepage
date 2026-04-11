import { Link, Navigate, useParams } from 'react-router-dom';
import { LongTimeLinerSubNav } from './brands/BrandSubNavs';

const linkClass = 'transition-colors hover:text-[#111111]';

const SEGMENTS: Record<
  string,
  {
    active: 'academy' | 'pmu-system' | 'heritage';
    h1: string;
    intro: string;
    blocks: { title: string; body: string }[];
  }
> = {
  academy: {
    active: 'academy',
    h1: 'Academy',
    intro: 'LONG-TIME-LINER 아카데미는 PMU 교육 체계와 현장 적용을 단계적으로 연결합니다.',
    blocks: [
      {
        title: '교육 커리큘럼',
        body: '이론·실기·브랜드 가이드를 아우르는 커리큘럼으로, 신규 시술자부터 숙련자까지 동일한 품질 기준을 공유하도록 구성합니다.',
      },
      {
        title: 'PMU 시스템과의 연동',
        body: '교육 내용이 제품·시술 프로토콜과 분리되지 않도록 정리하여, 수료 후 현장에서의 재현성을 높입니다.',
      },
      {
        title: '전문가 협업 구조',
        body: '독일 프리미엄 PMU 브랜드로서 C&B LAB 플랫폼 안의 교육·협업 채널과 맞물리게 운영합니다.',
      },
    ],
  },
  'pmu-system': {
    active: 'pmu-system',
    h1: 'PMU System',
    intro: '시술·제품·프로토콜이 한 시스템으로 정리된 LONG-TIME-LINER PMU 구조를 설명합니다.',
    blocks: [
      {
        title: '시술·제품 구조',
        body: 'PMU 시술에 필요한 제품군과 절차를 체계화하여, 현장 운영과 교육이 같은 기준을 따르도록 합니다.',
      },
      {
        title: '품질과 안전',
        body: '독일 프리미엄 브랜드 기준에 맞춘 품질 관리와 시술 안전을 전제로 한 시스템 설계를 지향합니다.',
      },
      {
        title: '확장과 파트너십',
        body: '아시아 등 시장 확장 시에도 시스템 단위로 옮겨 갈 수 있도록 문서화·교육 자료를 병행합니다.',
      },
    ],
  },
  heritage: {
    active: 'heritage',
    h1: 'Heritage',
    intro: 'LONG-TIME-LINER의 브랜드 헤리티지와 전문가 시장에서의 포지션을 정리합니다.',
    blocks: [
      {
        title: '브랜드 역사와 철학',
        body: '독일에서 축적된 PMU 노하우와 브랜드 철학이 제품·교육·시술 경험에 어떻게 반영되는지 설명합니다.',
      },
      {
        title: '프리미엄 전문가 시장',
        body: '소비자 브랜드와 구분된 전문가 채널에서의 신뢰와 지속성을 목표로 합니다.',
      },
      {
        title: 'C&B LAB과의 연결',
        body: '글로벌 협업 브랜드로서 DIVALINE 등 그룹 브랜드와 역할을 나누며 플랫폼 안에서 연결됩니다.',
      },
    ],
  },
};

export default function LongTimeLinerSegmentPage() {
  const { segment } = useParams<{ segment: string }>();
  const data = segment ? SEGMENTS[segment] : undefined;
  if (!data) {
    return <Navigate to="/brands/long-time-liner" replace />;
  }

  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">BRANDS</p>
      <p className="mb-2 font-sans text-[12px] tracking-[0.06em] text-[#6e665c]">
        <Link to="/brands/long-time-liner" className={`${linkClass} text-[#111111]/90`}>
          LONG-TIME-LINER
        </Link>
      </p>
      <LongTimeLinerSubNav active={data.active} />
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">{data.h1}</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        {data.intro}
      </p>
      <div className="flex flex-col gap-14">
        {data.blocks.map((b) => (
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
