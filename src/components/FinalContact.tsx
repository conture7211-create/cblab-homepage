<<<<<<< HEAD
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ctaPrimary =
  'inline-flex min-h-[58px] items-center justify-center border border-[#d8c1a0]/90 bg-[#d8c1a0] px-10 py-4 text-[16px] font-semibold tracking-[0.08em] text-[#111111] transition hover:bg-[#e5d4bc] hover:border-[#e5d4bc]';

const FinalContact = () => {
  useEffect(() => {
    if (window.location.hash !== '#kakao-inquiry') return;
    const el = document.getElementById('kakao-inquiry');
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

=======
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FinalContact = () => {
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
  return (
    <section id="contact" className="py-32 lg:py-48 bg-deep-black text-elegant-white relative border-t border-white/5">
      
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col justify-between min-h-[60vh]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start mb-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-8"
          >
            <h2 className="font-serif text-[48px] md:text-[72px] lg:text-[88px] text-elegant-white leading-[1.08] tracking-tight mb-6">
              CONTACT
            </h2>
            <p className="font-serif text-[26px] md:text-[34px] text-elegant-white leading-[1.25] tracking-[0.01em] mb-10">
              Let&rsquo;s Build the Next Beauty Standard Together
            </p>
<<<<<<< HEAD
            <p className="font-sans text-[16px] md:text-[18px] text-soft-stone/95 font-light leading-[1.75] break-keep max-w-[36rem] mb-10 whitespace-pre-line">
              브랜드 협업, 교육 제휴, 제품 및 디바이스 파트너십,{'\n'}글로벌 확장 및 비즈니스 문의
            </p>

            <div
              id="kakao-inquiry"
              className="mb-10 max-w-[36rem] scroll-mt-[120px] md:scroll-mt-[140px] lg:scroll-mt-[156px]"
            >
              <p className="font-sans text-[15px] md:text-[16px] text-soft-stone/95 font-light leading-[1.75] break-keep mb-2">
                빠른 상담은 카카오톡으로 문의해주세요
              </p>
              <p className="font-sans text-[13px] md:text-[14px] text-soft-stone/70 font-light leading-[1.6] break-keep mb-5">
                디바라인 카카오톡 채널 · 가벼운 상담
              </p>
              <a
                href="https://pf.kakao.com/_bPFyxj"
                target="_blank"
                rel="noopener noreferrer"
                className={ctaPrimary}
              >
                KakaoTalk 상담하기
              </a>
            </div>

            <p className="font-sans text-[13px] md:text-[14px] text-soft-stone/75 font-light leading-[1.6] break-keep max-w-[36rem] mb-4">
              제휴·비즈니스 등 주요 문의는 이메일로 부탁드립니다
            </p>
=======
            <p className="font-sans text-[16px] md:text-[18px] text-soft-stone/95 font-light leading-[1.75] break-keep max-w-[36rem] mb-12 whitespace-pre-line">
              브랜드 협업, 교육 제휴, 제품 및 디바이스 파트너십,{'\n'}글로벌 확장 및 비즈니스 문의
            </p>
>>>>>>> 25d8a9cb2c91a56dfbc60efcee5a26d96b0c3ad7
            <a
              href="mailto:info@cnb-lab.com"
              className="inline-flex min-h-[48px] items-center justify-center border border-white/40 bg-white/[0.06] px-8 py-3 text-[12px] font-semibold tracking-[0.14em] text-elegant-white backdrop-blur-[2px] transition hover:border-[#d8c1a0]/55 hover:bg-white/10 md:text-[13px]"
            >
              Contact / Partnership
            </a>
          </motion.div>

          {/* Quick links & Direct contacts */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1.5 }}
            className="lg:col-span-4 flex flex-col space-y-20 mt-8 lg:mt-0"
          >
            <div>
              <p className="font-inter text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-muted-gold mb-8 pb-3 border-b border-muted-gold/20">Email</p>
              <a href="mailto:info@cnb-lab.com" className="group font-sans text-[28px] md:text-[36px] font-light text-warm-ivory flex items-center justify-between hover:text-muted-gold transition-colors break-all">
                info@cnb-lab.com
                <ArrowUpRight size={32} strokeWidth={1} className="opacity-0 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 shrink-0 ml-4" />
              </a>
              <p className="block mt-6 font-sans text-[18px] md:text-[20px] text-soft-stone font-light opacity-90 tracking-[0.12em]">
                Brand / Education / Partnership
              </p>
            </div>

            <div>
              <p className="font-inter text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-warm-taupe mb-8 pb-3 border-b border-warm-taupe/20">Based in</p>
              <p className="font-sans text-[16px] md:text-[18px] text-soft-stone leading-[2] font-light opacity-90">
                Seoul, Korea
              </p>
            </div>
          </motion.div>

        </div>

        {/* Footer Base */}
        <div className="w-full pt-10 border-t border-white/10 font-sans text-soft-stone/80">
          <div className="space-y-3 text-[13px] md:text-[14px] leading-[1.8] break-keep">
            <p>C&amp;B LAB Co., Ltd. | 대표 김정연</p>
            <p>사업자등록번호 467-81-01685</p>
            <p>통신판매업 신고번호 제 2020-강원원주-00950호</p>
            <p>주소 강원도 원주시 지정면 기업도시로 200, 710호 (의료기기종합지원센터)</p>
            <p>고객센터 02-582-4411</p>
            <p>이메일 info@cnb-lab.com</p>
            <p>운영시간 평일 09:00 - 18:00 (토, 일 및 공휴일 휴무)</p>
            <p className="pt-2 text-soft-stone/60">© C&amp;B LAB. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalContact;
