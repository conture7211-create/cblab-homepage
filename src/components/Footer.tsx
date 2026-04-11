

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark text-white/80 border-t border-white/10 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-12 gap-8">
          <div>
            <h2 className="font-serif text-2xl font-bold tracking-widest text-white mb-2">C&B <span className="text-gold">LAB</span> Co., Ltd.</h2>
            <p className="font-sans text-sm text-white/50 tracking-wide uppercase mt-4 max-w-sm">
              Beauty Technology 쨌 Professional Education 쨌 Premium Brand Collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 font-sans text-sm">
            <ul>
              <li className="mb-4"><a href="#about" className="hover:text-gold transition-colors uppercase tracking-widest text-xs">About</a></li>
              <li className="mb-4"><a href="/#business" className="hover:text-gold transition-colors uppercase tracking-widest text-xs">Business Ecosystem</a></li>
              <li><a href="#technology" className="hover:text-gold transition-colors uppercase tracking-widest text-xs">Technology & R&D</a></li>
            </ul>
            <ul>
              <li className="mb-4"><a href="/#product-ecosystem" className="hover:text-gold transition-colors uppercase tracking-widest text-xs">Brands</a></li>
              <li className="mb-4"><a href="/brands/brand-platform/partnership" className="hover:text-gold transition-colors uppercase tracking-widest text-xs">Global</a></li>
              <li className="mb-4">
                <a
                  href="https://smartstore.naver.com/longtimebeauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors uppercase tracking-widest text-xs"
                >
                  스마트스토어
                </a>
              </li>
              <li><a href="/contact#kakao-inquiry" className="hover:text-gold transition-colors uppercase tracking-widest text-xs">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-sans text-white/40">
          <p>짤 {new Date().getFullYear()} C&B Lab Co., Ltd. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
