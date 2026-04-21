
import { motion } from 'framer-motion';

const Technology = () => {
  const items = [
    { title: "Product Development", desc: "Scientific foundation for aesthetic excellence." },
    { title: "Functional Formulation", desc: "Active ingredients mapped to clinical efficacy." },
    { title: "Quality Structure", desc: "Uncompromising standards in manufacturing." },
    { title: "Market Scalability", desc: "Engineered for international compliance and volume." }
  ];

  return (
    <section id="technology-legacy-block" className="py-24 bg-charcoal-dark text-warm-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-charcoal hidden lg:block opacity-50 transform skew-x-12 translate-x-32 z-0"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-sans text-xs uppercase tracking-[0.2em] mb-4"
            >
              R&D Focus
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl mb-8 leading-tight text-white"
            >
              Technology Is the<br />Foundation of Trust
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-white/70 text-lg leading-relaxed xl:pr-12"
            >
              From product development to operational systems, C&B Lab is focused on building solutions that can be trusted, scaled, and sustained in real markets.
            </motion.p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-charcoal p-12 hover:bg-white/5 transition-colors duration-500"
              >
                <div className="text-bronze font-serif text-lg mb-4 opacity-70 border-b border-white/10 pb-4 inline-block">
                  0{index + 1}
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                <p className="font-sans text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
