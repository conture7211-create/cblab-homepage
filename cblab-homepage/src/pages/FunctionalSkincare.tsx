import { Link } from 'react-router-dom';

const blocks = [
  {
    title: '시술 연계 스킨케어 구조',
    body: '시술 이후 피부 회복과 유지 관리를 위한 제품군을 구성하고, 현장과 소비자 사용 흐름을 함께 고려합니다.',
  },
  {
    title: '홈케어 확장 제품 라인',
    body: '전문가 시술 경험이 집에서도 이어질 수 있도록, 사용성과 반복 관리 중심의 제품 구조를 설계합니다.',
  },
  {
    title: '제품과 서비스의 연결',
    body: '단순 제품 판매를 넘어 시술·교육·브랜드 경험과 연결되는 스킨케어 흐름을 구축합니다.',
  },
];

export default function FunctionalSkincare() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">BUSINESS AREAS</p>
      <nav
        className="mb-6 flex flex-wrap items-center gap-x-1 font-sans text-[12px] tracking-[0.04em] text-[#6e665c] md:text-[13px]"
        aria-label="Business areas"
      >
        <span className="border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]">Functional Skincare</span>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <Link to="/business/beauty-device" className="transition-colors hover:text-[#111111]">
          Beauty Device
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <Link to="/business/professional-education" className="transition-colors hover:text-[#111111]">
          Professional Education
        </Link>
      </nav>
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">Functional Skincare</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        기능성 스킨케어를 중심으로 시술 후 관리와 홈케어까지 연결되는 제품 구조를 설계합니다.
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
