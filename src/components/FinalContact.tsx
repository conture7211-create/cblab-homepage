export default function FinalContact() {
  return (
    <section
      id="contact"
      className="bg-black text-white scroll-mt-28 border-t border-white/10 lg:scroll-mt-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="mb-6 text-[11px] font-medium tracking-[0.28em] text-[#c8a96b]">
              GET IN TOUCH
            </p>

            <h2 className="font-serif text-[26px] leading-[1.25] tracking-[-0.03em] break-keep sm:text-[34px] lg:text-[48px]">
              CONTACT
            </h2>

            <p className="mt-8 font-serif text-[20px] leading-[1.6] text-white break-keep sm:text-[26px] lg:text-[32px]">
              Let&apos;s Build the Next Beauty Standard Together
            </p>

            <div className="mt-10 space-y-4 text-[15px] leading-[1.6] text-white/78 break-keep sm:text-base">
              <p>
                브랜드 협업, 교육 제휴, 제품 및 디바이스 파트너십,
                <br className="hidden sm:block" />
                글로벌 확장 및 비즈니스 문의
              </p>
            </div>

            <div
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
              style={{ position: 'relative', zIndex: 10 }}
            >
              <a
                href="http://pf.kakao.com/_bPFyxj/chat"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[54px] items-center justify-center bg-[#d7bea0] px-8 text-[13px] font-semibold tracking-[0.08em] text-black transition hover:opacity-90"
              >
                KakaoTalk 상담하기
              </a>

              <a
                href="mailto:info@cnb-lab.com"
                className="contact-btn"
                style={{ position: 'relative', zIndex: 10 }}
              >
                Contact / Partnership
              </a>
            </div>
          </div>

          <div className="space-y-12 pt-1">
            <div>
              <p className="mb-4 text-[11px] font-medium tracking-[0.28em] text-[#c8a96b]">
                EMAIL
              </p>
              <div className="h-px w-full bg-white/12" />
              <p className="mt-8 break-keep font-serif text-[22px] leading-[1.25] text-white sm:text-[30px] lg:text-[36px]">
                info@cnb-lab.com
              </p>
              <p className="mt-5 text-[15px] leading-[1.6] tracking-[0.12em] text-white/60 break-keep">
                Brand / Education / Partnership
              </p>
            </div>

            <div>
              <p className="mb-4 text-[11px] font-medium tracking-[0.28em] text-[#c8a96b]">
                BASED IN
              </p>
              <div className="h-px w-full bg-white/12" />
              <p className="mt-8 text-[18px] leading-[1.6] text-white/85 break-keep">Seoul, Korea</p>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-3 text-[13px] leading-7 text-white/60 sm:text-[13px] lg:text-[14px]">
              <p>C&amp;B LAB Co., Ltd. | 대표 김정연</p>
              <p>사업자등록번호 487-81-01685</p>
              <p>통신판매업 신고번호 제 2020-강원원주-00950호</p>
              <p>주소 강원특별자치도 원주시 기업도시로 200, 710호 (원주의료기기산업진흥원)</p>
              <p>우편번호 26354</p>
              <p>고객센터 02-582-4411</p>
              <p>이메일 info@cnb-lab.com</p>
              <p>운영시간 평일 09:00 - 18:00 (주말 및 공휴일 휴무)</p>
              <p>© C&amp;B LAB. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
