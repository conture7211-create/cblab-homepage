import { Link } from 'react-router-dom';
import { DivalineSubNav } from './brands/BrandSubNavs';

const linkClass = 'transition-colors hover:text-[#111111]';

const blocks = [
  {
    title: 'DivaStone 중심 디바이스 구조',
    body: 'DivaStone을 포함한 뷰티 디바이스는 시술·홈케어 모두에서 동일한 브랜드 품질 기준을 적용할 수 있도록 설계됩니다. 하드웨어와 스킨케어·프로토콜이 맞물리는 경험을 지향합니다.',
  },
  {
    title: '현장 사용성과 확장',
    body: '전문가 환경에서의 조작성·안전성·유지 관리를 고려하고, 소비자 홈케어로 자연스럽게 이어지는 사용 시나리오를 정리합니다.',
  },
  {
    title: '제품·브랜드 경험과의 연결',
    body: '디바이스 단독이 아니라 스킨케어 라인·교육·서비스와 함께 읽히는 DIVALINE 경험으로 묶습니다.',
  },
];

export default function DivalineDevice() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[156px] text-[#111111] md:px-12 lg:px-8">
      <p className="mb-3 font-inter text-[11px] uppercase tracking-[0.35em] text-[#b89a6a]">BRANDS</p>
      <p className="mb-2 font-sans text-[12px] tracking-[0.06em] text-[#6e665c]">
        <Link to="/brands/divaline" className={`${linkClass} text-[#111111]/90`}>
          DIVALINE
        </Link>
      </p>
      <DivalineSubNav active="device" />
      <h1 className="mb-8 font-serif text-[36px] leading-tight tracking-[0.02em] md:text-[44px]">Device</h1>
      <p className="mb-16 font-sans text-[16px] font-light leading-[1.85] text-[#4a443d] break-keep md:text-[17px]">
        DIVALINE 뷰티 디바이스는 현장과 홈을 잇는 사용 구조와 브랜드 일관성을 전제로 합니다.
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
