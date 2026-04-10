
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BusinessEcosystem = () => {
  const divisions = [
    { 
      title: "Beauty Devices", 
      subtitle: "Professional & Home Aesthetics",
      desc: "Engineering precision beauty technology for uncompromising aesthetic results.",
      img: "https://images.unsplash.com/photo-1570172619644-84d4ae8224dc?q=80&w=1200&auto=format&fit=crop"
    },
    { 
      title: "Functional Skincare", 
      subtitle: "Performance Formulations",
      desc: "High-efficacy product lines developed through rigorous R&D and clinical standards.",
      img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop"
    },
    { 
      title: "Professional Education", 
      subtitle: "Global Masterclass Systems",
      desc: "Cultivating the next generation of global beauty experts through structured curricula.",
      img: "https://images.unsplash.com/photo-1574681657879-1fcd0bd2de99?q=80&w=1200&auto=format&fit=crop"
    },
    { 
      title: "Premium PMU Programs", 
      subtitle: "Advanced Semi-Permanent Architecture",
      desc: "Operating top-tier PMU divisions with world-class German technology.",
      img: "https://images.unsplash.com/photo-1512496015851-a908384f4f37?q=80&w=1200&auto=format&fit=crop"
    },
    { 
      title: "Global Brand Expansion", 
      subtitle: "Strategic Market Entry",
      desc: "Executing scalable distribution models across Asian and international markets.",
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="business" className="py-32 bg-warm-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, width: "0%" }}
              whileInView={{ opacity: 1, width: "100%" }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-px bg-gold"></span>
              <p className="text-gold font-sans text-xs tracking-[0.2em] uppercase font-medium">Business Portfolio</p>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl lg:text-5xl text-charcoal-dark leading-[1.2]"
            >
              Building the Future of <br className="hidden md:block"/>
              <span className="text-bronze italic">Premium Beauty Infrastructure.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="font-sans text-charcoal-light max-w-sm text-sm leading-relaxed mb-4">
              C&B Lab structures beauty as a comprehensive business system?봲panning hardware, formulations, and advanced education.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`group cursor-pointer ${index === 0 || index === 3 ? 'lg:col-span-2' : 'col-span-1'}`}
            >
              <div className="relative h-[400px] sm:h-[450px] w-full overflow-hidden bg-charcoal/5 mb-6">
                <div className="absolute inset-0 bg-charcoal-dark/20 z-10 transition-opacity duration-500 group-hover:bg-charcoal-dark/10" />
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Floating Content inside image */}
                <div className="absolute bottom-0 left-0 p-8 w-full z-20 bg-gradient-to-t from-charcoal-dark/80 via-charcoal-dark/40 to-transparent flex justify-between items-end pb-8">
                  <div>
                    <p className="text-gold/90 font-sans text-[10px] uppercase tracking-[0.2em] mb-2">{item.subtitle}</p>
                    <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-charcoal transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
              <p className="font-sans text-charcoal-light text-sm leading-relaxed pl-2 border-l border-gold/30">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessEcosystem;
