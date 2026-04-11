import { Link } from 'react-router-dom';

const blocks = [
  {
    title: '제품 기획 및 기능 설계',
    body: '시장과 브랜드 포지션을 기준으로 제품 라인과 기능 우선순위를 정의합니다. 단기 판매가 아닌, 플랫폼 전체와 맞닿는 기획 흐름을 유지합니다.',
  },
  {
    title: '사용자 경험과 현장성 반영',
    body: '전문가 현장의 사용 패턴과 피드백을 개발 초기부터 반영해, 실제 케어 환경에서 견고하게 동작하는 제품 구조를 지향합니다.',
  },
  {
    title: '브랜드 방향과 연결되는 제품 구조',
    body: '패키징·메시지·디바이스·교육이 같은 언어를 쓰도록 제품 스펙과 론칭 단계를 정렬해, 브랜드 일관성을 해치지 않습니다.',
  },
];

export default function ProductDevelopment() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">
        Research &amp; Development
      </p>
      <nav
        className="mb-6 flex flex-wrap items-center gap-x-1 font-sans text-[12px] tracking-[0.04em] text-[#6e665c] md:text-[13px]"
        aria-label="Research and Development pages"
      >
        <span className="border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]">Product Development</span>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <Link to="/about/device-design" className="transition-colors hover:text-[#111111]">
          Device Design
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <Link to="/about/education-system" className="transition-colors hover:text-[#111111]">
          Education System
        </Link>
      </nav>
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">Product Development</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        C&amp;B LAB의 제품 개발은 기능성과 브랜드 경험을 동시에 만족시키는 구조를 목표로 하며, 기획부터 출시까지 현장과의 연결을 끊지 않습니다.
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
