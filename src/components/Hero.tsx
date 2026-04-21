import { useEffect, useState } from "react";

const heroSlides = [
  { id: "essence", video: "/videos/hero-main-01-serum.mp4" },
  { id: "rnd", video: "/videos/hero-main-02-rnd.mp4" },
  { id: "device", video: "/videos/hero-main-03-ltl-machine.mp4" },
  { id: "global", video: "/videos/hero-main-04-global-map.mp4" },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex];
  const isGlobalMapSlide = activeSlide?.id === "global";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const ctaPrimary =
    "inline-flex min-h-[48px] items-center justify-center bg-[#d7bea0] px-6 text-[15px] font-semibold text-black transition hover:opacity-90";
  const ctaGhost =
    "inline-flex min-h-[48px] items-center justify-center border border-white/35 px-6 text-[15px] font-semibold text-white transition hover:border-white hover:bg-white/5";

  return (
    <section
      id="hero"
      className="hero relative h-[820px] max-h-[100dvh] w-full scroll-mt-28 overflow-hidden bg-black text-white sm:h-[860px] sm:max-h-none lg:scroll-mt-32 lg:h-screen"
    >
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <video
            key={slide.id}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              slide.id === "global"
                ? "object-[58%_46%] max-lg:object-[56%_48%] [filter:brightness(1.14)_contrast(1.06)_saturate(1.08)]"
                : ""
            } ${index === activeIndex ? "z-0 opacity-100" : "-z-10 opacity-0"}`}
            src={slide.video}
            autoPlay
            muted
            playsInline
            preload="auto"
            loop
          />
        ))}
      </div>

      {/* 오버레이: 이미지·영상이 더 살아 보이도록 전체적으로 완화 */}
      <div
        className={`pointer-events-none absolute inset-0 z-10 transition-colors duration-[1200ms] ease-in-out ${
          isGlobalMapSlide ? "bg-[#050a14]/24" : "bg-black/24"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-r transition-opacity duration-[1200ms] ease-in-out ${
          isGlobalMapSlide
            ? "from-black/30 via-black/12 to-transparent"
            : "from-black/40 via-black/16 to-black/4"
        }`}
      />
      {isGlobalMapSlide && (
        <>
          <div
            className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_50%_48%_at_68%_40%,rgba(216,193,160,0.12),transparent_58%)] mix-blend-screen opacity-70"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_28%_34%_at_12%_20%,rgba(200,180,145,0.08),transparent_50%)] mix-blend-screen opacity-80"
            aria-hidden
          />
        </>
      )}

      <div className="pointer-events-none absolute inset-0 z-10 bg-black/28" aria-hidden />

      <div className="absolute inset-x-0 top-[29%] bottom-0 z-20 flex flex-col px-6 sm:top-[27%] sm:px-8 lg:top-[30%] lg:px-12">
        <div className="mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col justify-center pb-4 sm:pb-6">
          <div className="shrink-0">
            <h1 className="font-serif max-w-[300px] text-[28px] leading-[1.22] tracking-[-0.02em] break-keep text-white sm:max-w-[520px] sm:text-[44px] lg:max-w-[900px] lg:text-[88px]">
              Beauty · Technology · Education Connected as One
            </h1>

            <p className="mt-4 max-w-[290px] text-[14px] leading-[1.7] break-keep text-white/88 sm:mt-5 sm:max-w-[520px] sm:text-[17px] lg:max-w-[680px] lg:text-[20px]">
              C&B LAB은 브랜드, 기술, 교육을 하나의 구조로 연결하는 프리미엄 뷰티 플랫폼입니다.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-12">
            <a
              href="https://smartstore.naver.com/longtimebeauty"
              target="_blank"
              rel="noopener noreferrer"
              className={ctaPrimary}
            >
              Official Store
            </a>

            <a
              href="https://long-time-liner.com"
              target="_blank"
              rel="noopener noreferrer"
              className={ctaGhost}
            >
              Long-Time-Liner
            </a>
            <a
              href="#contact"
              className={ctaGhost}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
