import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    "inline-flex min-h-[58px] items-center justify-center border border-[#d8c1a0]/90 bg-[#d8c1a0] px-10 py-4 text-[16px] font-semibold tracking-[0.08em] text-[#111111] transition hover:bg-[#e5d4bc] hover:border-[#e5d4bc]";
  const ctaGhost =
    "inline-flex min-h-[58px] items-center justify-center border border-white/40 bg-white/[0.06] px-10 py-4 text-[16px] font-semibold tracking-[0.08em] text-white/95 backdrop-blur-[2px] transition hover:border-[#d8c1a0]/55 hover:bg-white/10";

  return (
    <section
      id="hero"
      className="hero relative h-screen w-full overflow-hidden bg-black text-white"
    >
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

      <div className="relative z-20 mx-auto flex h-full max-w-[1400px] items-center px-6 pb-14 pt-[8.5rem] md:px-12 md:pb-16 md:pt-44 lg:px-20 lg:pt-48">
        <div className="max-w-2xl pl-2 md:pl-8 lg:pl-12">
          <h1 className="mb-8 font-serif text-[64px] [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]">
            Beauty · Technology · Education
            <br />
            Connected as One
          </h1>

          <p className="mb-12 text-[28px] font-medium leading-[1.45] tracking-[0.01em] text-white/88">
            C&B LAB은 브랜드, 기술, 교육을 하나의 구조로 연결하는 프리미엄 뷰티 플랫폼입니다.
          </p>

          <div className="flex max-w-xl flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-5">
            <Link to="/brands/divaline" className={ctaPrimary}>
              Official Store
            </Link>
            <Link to="/brands/long-time-liner" className={ctaGhost}>
              Long-Time-Liner
            </Link>
            <a href="/#contact" className={ctaGhost}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";

const heroSlides = [
  { id: "device", video: "/videos/hero-main-03-ltl-machine.mp4" },
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
    "inline-flex min-h-[58px] items-center justify-center border border-[#d8c1a0]/90 bg-[#d8c1a0] px-10 py-4 text-[16px] font-semibold tracking-[0.08em] text-[#111111] transition hover:bg-[#e5d4bc] hover:border-[#e5d4bc]";
  const ctaGhost =
    "inline-flex min-h-[58px] items-center justify-center border border-white/40 bg-white/[0.06] px-10 py-4 text-[16px] font-semibold tracking-[0.08em] text-white/95 backdrop-blur-[2px] transition hover:border-[#d8c1a0]/55 hover:bg-white/10";

  return (
    <section
      id="hero"
      className="hero relative h-screen w-full overflow-hidden bg-black text-white"
    >
      {heroSlides.map((slide, index) => (
        <video
          key={slide.id}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${slide.id === "global"
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

      {/* 오버레이: 이미지·영상이 더 살아 보이도록 전체적으로 완화 */}
      <div
        className={`pointer-events-none absolute inset-0 z-10 transition-colors duration-[1200ms] ease-in-out ${isGlobalMapSlide ? "bg-[#050a14]/24" : "bg-black/24"
          }`}
      />
      <div
        className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-r transition-opacity duration-[1200ms] ease-in-out ${isGlobalMapSlide
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

      <div className="relative z-20 mx-auto flex h-full max-w-[1400px] items-center px-6 pb-14 pt-[8.5rem] md:px-12 md:pb-16 md:pt-44 lg:px-20 lg:pt-48">
        <div className="max-w-2xl pl-2 md:pl-8 lg:pl-12">
          <h1 className="mb-8 font-serif text-[64px] [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]">
            Beauty · Technology · Education
            <br />
            Connected as One
          </h1>

          <p className="mb-12 text-[28px] font-medium leading-[1.45] tracking-[0.01em] text-white/88">
            C&B LAB은 브랜드, 기술, 교육을 하나의 구조로 연결하는 프리미엄 뷰티 플랫폼입니다.
          </p>

          <div className="flex max-w-xl flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-5">
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
