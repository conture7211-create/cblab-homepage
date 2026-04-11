import { Link, Navigate, useParams } from 'react-router-dom';

const linkClass = 'transition-colors hover:text-[#111111]';

const SEGMENTS: Record<
  string,
  {
    h1: string;
    intro: string;
    blocks: { title: string; body: string }[];
  }
> = {
  development: {
    h1: 'Development',
    intro:
      '제품 기획부터 제형, 디바이스 설계까지 실제 현장 적용을 기준으로 기술 개발 구조를 설계합니다.',
    blocks: [
      {
        title: 'Product Planning',
        body: '브랜드 방향과 시장 흐름을 반영하여 제품 기획과 적용 범위를 구조화합니다.',
      },
      {
        title: 'Formulation',
        body: '기능성과 사용 경험을 함께 고려하여 스킨케어 및 연계 제품의 제형 방향을 설계합니다.',
      },
      {
        title: 'Device Design',
        body: '현장 사용성과 홈케어 확장성을 고려하여 디바이스 구조와 사용 흐름을 설계합니다.',
      },
    ],
  },
  system: {
    h1: 'System',
    intro:
      '기술은 단일 제품이 아니라 교육 구조, 품질 기준, 경험 설계까지 포함하는 통합 시스템으로 운영됩니다.',
    blocks: [
      {
        title: 'Education Structure',
        body: '기술 전달이 실제 현장 운영으로 이어질 수 있도록 단계별 교육 구조를 설계합니다.',
      },
      {
        title: 'Quality Framework',
        body: '제품과 디바이스, 서비스 전반에 일관된 기준이 유지되도록 품질 관리 구조를 정리합니다.',
      },
      {
        title: 'Experience Design',
        body: '소비자와 전문가가 브랜드를 동일한 기준 안에서 경험할 수 있도록 접점을 설계합니다.',
      },
    ],
  },
  scalability: {
    h1: 'Scalability',
    intro:
      '기술 기반은 단기 활용에 그치지 않고, 플랫폼 통합과 운영 모델 확장을 통해 지속 가능한 구조로 연결됩니다.',
    blocks: [
      {
        title: 'Platform Integration',
        body: '제품, 디바이스, 교육, 운영 요소가 하나의 브랜드 플랫폼 안에서 연결되도록 구성합니다.',
      },
      {
        title: 'Operational Model',
        body: '현장 운영과 교육, 파트너 협업이 확장 가능한 방식으로 이어질 수 있도록 운영 모델을 설계합니다.',
      },
      {
        title: 'Future Expansion',
        body: '국내외 시장 확장에 대응할 수 있도록 기술 자료와 운영 구조를 장기적으로 정리합니다.',
      },
    ],
  },
};

export default function TechnologySegmentPage() {
  const { segment } = useParams<{ segment: string }>();
  const data = segment ? SEGMENTS[segment] : undefined;

  if (!data) {
    return <Navigate to="/#technology" replace />;
  }

  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">TECHNOLOGY</p>
      <nav
        className="mb-6 flex flex-wrap items-center gap-x-1 font-sans text-[12px] tracking-[0.04em] text-[#6e665c] md:text-[13px]"
        aria-label="Technology sections"
      >
        <Link to="/technology/development" className={`${linkClass} ${data.h1 === 'Development' ? 'border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]' : ''}`}>
          Development
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <Link to="/technology/system" className={`${linkClass} ${data.h1 === 'System' ? 'border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]' : ''}`}>
          System
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <Link to="/technology/scalability" className={`${linkClass} ${data.h1 === 'Scalability' ? 'border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]' : ''}`}>
          Scalability
        </Link>
      </nav>
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
