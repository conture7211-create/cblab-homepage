import { Link, Navigate, useParams } from 'react-router-dom';
import { BrandPlatformSubNav } from './brands/BrandSubNavs';

const linkClass = 'transition-colors hover:text-[#111111]';

const SEGMENTS: Record<
  string,
  {
    active: 'consumer' | 'professional' | 'partnership';
    h1: string;
    intro: string;
    blocks: { title: string; body: string }[];
  }
> = {
  consumer: {
    active: 'consumer',
    h1: 'Consumer',
    intro: '일반 소비자를 위한 제품과 홈케어 중심의 브랜드 경험을 제공합니다.',
    blocks: [
      {
        title: '홈케어 제품 중심 구조',
        body: '홈케어 제품 중심 구조',
      },
      {
        title: '디바이스 기반 관리 경험',
        body: '디바이스 기반 관리 경험',
      },
      {
        title: '반복 사용 가능한 소비자 라인 구축',
        body: '반복 사용 가능한 소비자 라인 구축',
      },
    ],
  },
  professional: {
    active: 'professional',
    h1: 'Professional',
    intro: '전문가를 위한 시술, 장비, 교육이 결합된 전문 시장을 구성합니다.',
    blocks: [
      {
        title: '반영구 시술 중심 구조',
        body: '반영구 시술 중심 구조',
      },
      {
        title: '전문가용 디바이스 및 제품',
        body: '전문가용 디바이스 및 제품',
      },
      {
        title: '실무 중심 교육 시스템',
        body: '실무 중심 교육 시스템',
      },
    ],
  },
  partnership: {
    active: 'partnership',
    h1: 'Partnership',
    intro: '유통, 교육, 글로벌 확장을 위한 협력 구조를 설계합니다.',
    blocks: [
      {
        title: '지역 및 채널 파트너 운영',
        body: '지역 및 채널 파트너 운영',
      },
      {
        title: '브랜드 기준 공유',
        body: '브랜드 기준 공유',
      },
      {
        title: '지속 가능한 협업 모델 구축',
        body: '지속 가능한 협업 모델 구축',
      },
    ],
  },
};

export default function BrandPlatformSegmentPage() {
  const { segment } = useParams<{ segment: string }>();
  const data = segment ? SEGMENTS[segment] : undefined;
  if (!data) {
    return <Navigate to="/brands/brand-platform" replace />;
  }

  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">BRANDS</p>
      <p className="mb-2 font-sans text-[12px] tracking-[0.06em] text-[#6e665c]">
        <Link to="/brands/brand-platform" className={`${linkClass} text-[#111111]/90`}>
          Brand Platform
        </Link>
      </p>
      <BrandPlatformSubNav active={data.active} />
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
