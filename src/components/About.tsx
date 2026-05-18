import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  { year: 'The Beginning', text: 'Founded with a vision to bring authentic North Indian flavors to Uttar Pradesh, Kwality began as a humble eatery with extraordinary ambition.' },
  { year: 'Growing Legacy', text: 'Word spread of our unmatched flavors and warm hospitality. Families made us their go-to destination for celebrations and everyday dining alike.' },
  { year: 'Royal Standards', text: 'We elevated every aspect — from sourcing the finest ingredients to crafting an ambiance that echoes the grandeur of Indian royalty.' },
  { year: 'Today & Beyond', text: 'Kwality stands as a symbol of culinary excellence, trusted by generations. Our commitment to taste, hygiene, and hospitality remains unwavering.' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-dark-400">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold-400/70 mb-3 block">
              Our Story
            </span>
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              A Heritage of <span className="text-gradient-gold">Taste</span>
            </h2>
            <div className="w-16 h-[1px] bg-gradient-gold mb-6" />

            <p className="text-gray-400 leading-relaxed mb-4">
              At Kwality Restaurant, every dish tells a story — a story of tradition, passion, and an unwavering commitment to excellence. Rooted in the rich culinary heritage of Uttar Pradesh, we have been serving authentic North Indian cuisine that celebrates the flavors of our land.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Our kitchen is where age-old recipes meet modern hygiene standards. Every spice is handpicked, every ingredient is fresh, and every meal is crafted with the love and care that only a family-owned establishment can provide.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From intimate family dinners to grand celebrations, Kwality is where memories are made over food that touches the soul. We don't just serve meals — we serve experiences.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden gold-border">
                <img
                  src="https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Kwality Restaurant heritage"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="heading-serif text-2xl text-gold-400 italic">
                    "Where tradition meets taste"
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold-400/20 rounded-lg" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold-400/10 rounded-lg" />
            </motion.div>
          </div>
        </div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="heading-serif text-2xl sm:text-3xl text-white">
              Our <span className="text-gradient-gold">Journey</span>
            </h3>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gold-400/20 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <MilestoneCard key={milestone.year} {...milestone} index={i} isInView={isInView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneCard({ year, text, index, isInView }: {
  year: string;
  text: string;
  index: number;
  isInView: boolean;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
      className={`flex items-center gap-6 md:gap-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div className="glass gold-border rounded-lg p-6 card-lift">
          <h4 className="heading-serif text-lg text-gold-400 mb-2">{year}</h4>
          <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center w-4 shrink-0">
        <div className="w-3 h-3 rounded-full bg-gold-400 border-2 border-dark-400" />
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
