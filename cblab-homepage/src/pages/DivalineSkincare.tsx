import { Link } from 'react-router-dom';
import { DivalineSubNav } from './brands/BrandSubNavs';

const linkClass = 'transition-colors hover:text-[#111111]';

const blocks = [
  {
    title: '기능성 스킨케어 라인',
    body: '성분·제형·효능을 체계화한 기능성 스킨케어로, 시술 전후와 일상 케어가 같은 브랜드 기준을 따르도록 구성합니다. 단계별 사용 시나리오에 맞춘 라인업을 지향합니다.',
  },
  {
    title: '전문가 채널과의 정합',
    body: '살롱·클리닉 등 전문가 환경에서의 프로토콜·교육 자료와 소비자용 메시지가 어긋나지 않도록 정리합니다. 현장에서의 재현성과 브랜드 신뢰를 동시에 다룹니다.',
  },
  {
    title: 'DIVALINE 브랜드 맥락 안에서',
    body: '디바이스·홈케어 축과 연결되는 스킨케어 경험으로, DIVALINE을 C&B LAB의 자사 핵심 브랜드 축으로 읽을 수 있게 합니다.',
  },
];

export default function DivalineSkincare() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">BRANDS</p>
      <p className="mb-2 font-sans text-[12px] tracking-[0.06em] text-[#6e665c]">
        <Link to="/brands/divaline" className={`${linkClass} text-[#111111]/90`}>
          DIVALINE
        </Link>
      </p>
      <DivalineSubNav active="skincare" />
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">Skincare</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        DIVALINE 기능성 스킨케어는 전문가용과 홈케어를 잇는 제품 구조와 브랜드 경험을 전제로 합니다.
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
