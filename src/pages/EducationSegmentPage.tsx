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
  'professional-training': {
    h1: 'Professional Training',
    intro: '실제 시술과 현장 운영에 바로 적용할 수 있도록 실무 중심의 전문 교육 과정을 운영합니다.',
    blocks: [
      {
        title: 'Practical Skill Training',
        body: '기초 기술부터 시술 응용까지 실제 현장에서 필요한 기술 중심으로 교육합니다.',
      },
      {
        title: 'Procedure & Protocol',
        body: '시술 흐름과 위생, 안전, 운영 기준까지 함께 익힐 수 있도록 교육 구조를 정리합니다.',
      },
      {
        title: 'Professional Growth',
        body: '단기 수업이 아니라 지속적인 숙련과 전문가 성장으로 이어질 수 있는 기반을 제공합니다.',
      },
    ],
  },
  'home-training': {
    h1: 'Home Training',
    intro: '교육 이후에도 반복 훈련이 가능하도록 홈트레이닝 중심의 학습 흐름을 함께 설계합니다.',
    blocks: [
      {
        title: 'Starter Program',
        body: '입문자가 기본기를 안정적으로 익힐 수 있도록 단계별 학습 구조를 제공합니다.',
      },
      {
        title: 'Practice at Home',
        body: '현장 수업 이후에도 집에서 반복 연습이 가능하도록 훈련 흐름을 연결합니다.',
      },
      {
        title: 'Consistency & Repetition',
        body: '기술은 반복에서 완성될 수 있도록 지속 가능한 연습 구조와 학습 경험을 지원합니다.',
      },
    ],
  },
  'academy-system': {
    h1: 'Academy System',
    intro: '교육은 개별 수업이 아니라 커리큘럼, 운영 방식, 브랜드 연계까지 포함하는 시스템으로 구성됩니다.',
    blocks: [
      {
        title: 'Curriculum Structure',
        body: '입문, 실습, 응용, 성장 단계로 이어지는 교육 커리큘럼을 체계적으로 설계합니다.',
      },
      {
        title: 'Operational Framework',
        body: '교육 운영, 자료 구성, 실습 흐름이 일관되게 유지될 수 있도록 관리 구조를 정리합니다.',
      },
      {
        title: 'Brand Connection',
        body: '교육 이후에도 제품, 서비스, 전문가 네트워크와 연결될 수 있도록 브랜드 기반을 제공합니다.',
      },
    ],
  },
};

export default function EducationSegmentPage() {
  const { segment } = useParams<{ segment: string }>();
  const data = segment ? SEGMENTS[segment] : undefined;

  if (!data) {
    return <Navigate to={{ pathname: '/', hash: '#education' }} replace />;
  }

  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">EDUCATION</p>
      <nav
        className="mb-6 flex flex-wrap items-center gap-x-1 font-sans text-[12px] tracking-[0.04em] text-[#6e665c] md:text-[13px]"
        aria-label="Education sections"
      >
        <Link
          to="/education/professional-training"
          className={`${linkClass} ${data.h1 === 'Professional Training' ? 'border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]' : ''}`}
        >
          Professional Training
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <Link
          to="/education/home-training"
          className={`${linkClass} ${data.h1 === 'Home Training' ? 'border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]' : ''}`}
        >
          Home Training
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <Link
          to="/education/academy-system"
          className={`${linkClass} ${data.h1 === 'Academy System' ? 'border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]' : ''}`}
        >
          Academy System
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
