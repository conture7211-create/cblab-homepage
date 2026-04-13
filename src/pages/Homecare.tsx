import { Link } from 'react-router-dom';

const blocks = [
  {
    title: '홈케어 루틴 설계',
    body: '살롱·클리닉 케어 이후 집에서 이어지는 단계·용법·메시지를 일관되게 정리합니다. 전문가 추천과 자가 케어가 같은 브랜드 언어를 쓰도록 합니다.',
  },
  {
    title: '브랜드 솔루션형 접근',
    body: '단품 판매를 넘어 라인 구성·패키징·채널 메시지까지 포함한 홈케어 솔루션으로 설계합니다. 파트너와 소비자 모두가 구조를 이해하기 쉽게 합니다.',
  },
  {
    title: '경험 연결 구조',
    body: '기능성 스킨케어·뷰티 디바이스·전문가 교육 축과 홈케어가 끊기지 않도록 연결합니다. 하나의 비즈니스 플랫폼 안에서 동일한 품질 기준과 브랜드 경험이 이어지게 합니다.',
  },
];

export default function Homecare() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">SOLUTIONS</p>
      <nav
        className="mb-6 flex flex-wrap items-center gap-x-1 font-sans text-[12px] tracking-[0.04em] text-[#6e665c] md:text-[13px]"
        aria-label="Business solutions"
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
        <Link to="/business/professional-education" className="transition-colors hover:text-[#111111]">
          Professional Education
        </Link>
        <span className="mx-2 text-[#d8d2c8]" aria-hidden>
          |
        </span>
        <span className="border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]">Homecare</span>
      </nav>
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">Homecare</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        전문 케어와 이어지는 홈케어 루틴, 브랜드 솔루션, 그리고 플랫폼 단위의 경험 연결을 다룹니다.
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
