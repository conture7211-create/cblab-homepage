
import { motion } from 'framer-motion';

const WhyCblab = () => {
  const cards = [
    { title: "Technology-Based Development", desc: "Scientific approach to product and device formulation." },
    { title: "Professional Education System", desc: "Building scalable standards for professionals worldwide." },
    { title: "Premium Brand Collaboration", desc: "Partnerships with trusted international beauty platforms." },
    { title: "Global Expansion Readiness", desc: "Structured for seamless scaling across Asian markets and beyond." }
  ];

  return (
    <section className="py-24 bg-warm-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl text-charcoal-dark mb-6"
          >
            Built on Structure, Not Hype.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-charcoal-light leading-relaxed text-lg"
          >
            C&B Lab is built to operate beyond product sales. We develop systems that connect technology, professional education, brand trust, and long-term market expansion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-ivory p-8 border border-charcoal/5 hover:border-gold/30 transition-colors duration-300 group"
            >
              <div className="w-8 h-8 flex items-center justify-center mb-6 border-b border-gold/30 text-gold font-serif text-xl">
                0{index + 1}
              </div>
              <h3 className="font-serif text-lg text-charcoal-dark mb-3 group-hover:text-bronze transition-colors">
                {card.title}
              </h3>
              <p className="text-charcoal-light text-sm font-sans">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCblab;
