import { Link } from 'react-router-dom';
import { DivalineSubNav } from './brands/BrandSubNavs';

const linkClass = 'transition-colors hover:text-[#111111]';

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
    title: 'DIVALINE 전체 축과의 정렬',
    body: '스킨케어·디바이스와 함께 읽히는 홈케어로, 자사 핵심 브랜드 DIVALINE의 경험을 완성합니다.',
  },
];

export default function DivalineHomecare() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">BRANDS</p>
      <p className="mb-2 font-sans text-[12px] tracking-[0.06em] text-[#6e665c]">
        <Link to="/brands/divaline" className={`${linkClass} text-[#111111]/90`}>
          DIVALINE
        </Link>
      </p>
      <DivalineSubNav active="homecare" />
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">Homecare</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        DIVALINE 홈케어는 전문 케어와 연결되는 일상 루틴과 브랜드 솔루션을 함께 다룹니다.
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
