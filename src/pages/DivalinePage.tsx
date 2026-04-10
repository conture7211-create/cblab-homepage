import { DivalineSubNav } from './brands/BrandSubNavs';

const blocks = [
  {
    title: '제품 중심 구조',
    body: '디바이스와 스킨케어를 중심으로 홈케어와 전문가 시장을 동시에 확장합니다.',
  },
  {
    title: '서비스 연결',
    body: '반영구 시술과 체험형 서비스를 통해 브랜드 경험을 현장에서 구현합니다.',
  },
  {
    title: '교육 기반 확장',
    body: '교육 시스템을 통해 전문가를 양성하고, 브랜드 확장을 지속적으로 이어갑니다.',
  },
];

const values = [
  {
    title: '제품 중심 구조',
    body: '디바이스와 스킨케어를 중심으로 홈케어와 전문가 시장을 동시에 확장합니다.',
  },
  {
    title: '서비스 연결',
    body: '반영구 시술과 체험형 서비스를 통해 브랜드 경험을 현장에서 구현합니다.',
  },
  {
    title: '교육 기반 확장',
    body: '교육 시스템을 통해 전문가를 양성하고, 브랜드 확장을 지속적으로 이어갑니다.',
  },
];

export default function DivalinePage() {
  return (
    <main className="bg-[#fcfbf9] text-[#111111]">
      <div className="pt-[152px]">
        <section className="relative flex min-h-[min(54vh,580px)] w-full items-center justify-center overflow-hidden bg-[#0a0a0a] py-16 md:min-h-[min(60vh,660px)] md:py-24">
          <img
            src="/images/about-rnd/product-divaflex.jpg"
            alt="Divaline brand visual"
            className="absolute inset-0 h-full w-full object-cover object-[52%_45%] opacity-[0.42]"
          />
          <div className="absolute inset-0 bg-[#1a1510]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
          <div className="relative z-10 mx-auto w-full max-w-[920px] px-6 md:px-10">
            <div className="border border-white/20 bg-black/25 px-8 py-10 backdrop-blur-[2px] md:px-12 md:py-14">
              <p className="mb-4 font-inter text-[11px] uppercase tracking-[0.4em] text-[#d8c1a0] md:text-xs">
                BRANDS
              </p>
              <h1 className="font-serif text-[40px] leading-[1.1] tracking-[0.02em] text-white md:text-[52px] lg:text-[58px]">
                DIVALINE
              </h1>
              <p className="mt-6 max-w-[48ch] font-serif text-[16px] font-normal leading-[1.55] tracking-[0.01em] text-[#e8d5b5] md:text-[17px]">
                Beauty Platform Brand
              </p>
              <p className="mt-6 max-w-[52ch] font-sans text-[15px] font-light leading-[1.92] text-white/88 break-keep [text-wrap:pretty] md:text-[16px]">
                DIVALINE은 제품, 서비스, 교육을 하나의 흐름으로 연결하는 통합 뷰티 브랜드입니다.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#e8e4dc] bg-[#fcfbf9] py-10 md:py-12">
          <div className="mx-auto max-w-[880px] px-6 md:px-8">
            <DivalineSubNav active={null} />
          </div>
        </section>

        <section className="mx-auto max-w-[880px] px-6 pb-24 pt-14 md:px-8 md:pb-28 md:pt-16">
          <h2 className="mb-6 border-b border-[#dddddd] pb-4 font-serif text-[26px] tracking-[0.02em] md:text-[30px]">
            Brand Introduction
          </h2>
          <div className="mb-12 flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
            <div className="min-w-0 flex-1 space-y-5 md:max-w-[65ch]">
              <p className="font-sans text-[15px] font-light leading-[1.92] tracking-[-0.01em] text-[#383838] break-keep [text-wrap:pretty] md:text-[16px]">
                DIVALINE은 제품, 서비스, 교육을 하나의 흐름으로 연결하는 통합 뷰티 브랜드입니다.
              </p>
              <p className="font-sans text-[15px] font-light leading-[1.92] tracking-[-0.01em] text-[#383838] break-keep [text-wrap:pretty] md:text-[16px]">
                디바이스와 스킨케어를 중심으로 홈케어와 전문가 시장을 동시에 확장하고, 서비스와 교육까지 연결된 브랜드 경험을 제공합니다.
              </p>
            </div>
            <figure className="w-full shrink-0 overflow-hidden rounded-sm border border-[#e8e4dc]/80 bg-[#f2efe9] md:w-[42%] md:max-w-[408px]">
              <div className="relative aspect-[5/4] w-full">
                <img
                  src="/images/about-rnd/handpiece.jpg"
                  alt="Divaline representative visual"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </figure>
          </div>

          <h2 className="mb-6 border-b border-[#dddddd] pb-4 font-serif text-[26px] tracking-[0.02em] md:text-[30px]">Core Direction</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:gap-6">
            {values.map((value) => (
              <article key={value.title} className="border border-[#e4dfd6] bg-[#faf8f4] px-6 py-7">
                <h3 className="font-serif text-[20px] tracking-[0.02em] text-[#111111] md:text-[22px]">{value.title}</h3>
                <p className="mt-4 font-sans text-[14px] font-light leading-[1.85] tracking-[-0.01em] text-[#4a4a4a] md:text-[15px]">
                  {value.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-14">
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
        </section>
      </div>
    </main>
  );
}
