import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Kwality Restaurant, Civil Lines, Near Clock Tower, Uttar Pradesh 226001, India',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'reservations@kwalityrestaurant.in',
    href: 'mailto:reservations@kwalityrestaurant.in',
  },
];

const hours = [
  { day: 'Monday - Friday', time: '12:00 PM - 11:00 PM' },
  { day: 'Saturday', time: '11:00 AM - 11:30 PM' },
  { day: 'Sunday', time: '11:00 AM - 11:30 PM' },
];

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding bg-dark-600 noise-overlay">
      <div className="container-luxury relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold-400/70 mb-3 block">
            Find Us
          </span>
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Location & <span className="text-gradient-gold">Contact</span>
          </h2>
          <div className="divider-gold mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden gold-border h-[400px]">
              <iframe
                title="Kwality Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d80.9!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4MMKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                className="w-full h-full border-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass gold-border rounded-lg p-6">
              <h3 className="heading-serif text-xl text-gold-400 mb-5">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-gold-400/20 flex items-center justify-center shrink-0">
                      <info.icon className="text-gold-400" size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm text-gray-300 hover:text-gold-400 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass gold-border rounded-lg p-6">
              <h3 className="heading-serif text-xl text-gold-400 mb-5 flex items-center gap-2">
                <Clock size={18} />
                Opening Hours
              </h3>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{h.day}</span>
                    <span className="text-sm text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
