import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Leaf, Shield, Users } from 'lucide-react';

const experiences = [
  {
    icon: Flame,
    title: 'Authentic Recipes',
    description: 'Time-honored recipes passed down through generations, preserving the true essence of North Indian cuisine.',
  },
  {
    icon: Leaf,
    title: 'Premium Ingredients',
    description: 'Handpicked spices, farm-fresh produce, and the finest ingredients sourced from trusted suppliers.',
  },
  {
    icon: Shield,
    title: 'Hygienic Kitchen',
    description: 'State-of-the-art kitchen with rigorous hygiene standards ensuring every dish is prepared with utmost care.',
  },
  {
    icon: Users,
    title: 'Family Ambience',
    description: 'A warm, elegant space designed for families to create cherished memories over exceptional meals.',
  },
];

function ExperienceCard({ icon: Icon, title, description, index }: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative p-8 rounded-lg glass gold-border card-lift text-center"
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-5 rounded-full border border-gold-400/20 flex items-center justify-center group-hover:border-gold-400/50 transition-colors duration-500">
          <Icon className="text-gold-400 group-hover:scale-110 transition-transform duration-500" size={28} />
        </div>

        <h3 className="heading-serif text-xl text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function SignatureExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding bg-dark-600 noise-overlay">
      <div className="container-luxury relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold-400/70 mb-3 block">
            Why Choose Us
          </span>
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            The Signature <span className="text-gradient-gold">Experience</span>
          </h2>
          <div className="divider-gold mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.title} {...exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
