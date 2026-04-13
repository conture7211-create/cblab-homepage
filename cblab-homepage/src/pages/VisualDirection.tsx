import { Link } from 'react-router-dom';

const blocks = [
  {
    title: '브랜드가 보여지는 방식',
    body: '로고와 색만이 아니라 터치포인트 전반에서 브랜드가 어떤 온도와 밀도로 느껴질지 정의합니다. 디지털과 오프라인 모두 같은 계열의 인상을 유지합니다.',
  },
  {
    title: '공간, 제품, 디바이스, 교육의 시각 일관성',
    body: '플래그십 공간, 패키징, 디바이스 실루엣, 교육 자료의 타이포와 레이아웃이 서로 참조되도록 가이드를 둡니다.',
  },
  {
    title: 'DIVALINE / C&B LAB의 고급 톤앤매너',
    body: '과시보다 절제와 정밀함을 우선하며, 프리미엄 뷰티에 맞는 절제된 색·재질·촬영 톤을 유지합니다.',
  },
];

export default function VisualDirection() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">Brand Identity</p>
      <nav
        className="mb-6 flex flex-wrap items-center gap-x-1 font-sans text-[12px] tracking-[0.04em] text-[#6e665c] md:text-[13px]"
        aria-label="Brand Identity pages"
      >
        <Link to="/about/brand-philosophy" className="transition-colors hover:text-[#111111]">
          Brand Philosophy
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <span className="border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]">Visual Direction</span>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <Link to="/about/premium-experience" className="transition-colors hover:text-[#111111]">
          Premium Experience
        </Link>
      </nav>
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">Visual Direction</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        시각 언어는 브랜드를 기억하게 만드는 층위입니다. C&amp;B LAB과 DIVALINE은 같은 디자인 원칙 아래 각자의 역할을 드러냅니다.
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
