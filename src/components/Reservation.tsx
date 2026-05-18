import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, User, Phone, Check } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="reservation" className="section-padding bg-dark-600 noise-overlay">
      <div className="container-luxury relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold-400/70 mb-3 block">
            Reserve Your Experience
          </span>
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Book a <span className="text-gradient-gold">Table</span>
          </h2>
          <div className="divider-gold mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass gold-border rounded-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mb-6"
                  >
                    <Check className="text-dark-900" size={28} />
                  </motion.div>
                  <h3 className="heading-serif text-2xl text-white mb-2">Reservation Confirmed!</h3>
                  <p className="text-gray-400 text-sm">We look forward to welcoming you at Kwality.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <User
                        className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                          focused === 'name' ? 'text-gold-400' : 'text-gray-600'
                        }`}
                        size={16}
                      />
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className="w-full pl-10 pr-4 py-3.5 bg-dark-200 border border-gold-400/10 rounded text-white placeholder-gray-600 text-sm focus:outline-none focus:border-gold-400/40 transition-all duration-300"
                      />
                    </div>

                    <div className="relative">
                      <Phone
                        className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                          focused === 'phone' ? 'text-gold-400' : 'text-gray-600'
                        }`}
                        size={16}
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                        className="w-full pl-10 pr-4 py-3.5 bg-dark-200 border border-gold-400/10 rounded text-white placeholder-gray-600 text-sm focus:outline-none focus:border-gold-400/40 transition-all duration-300"
                      />
                    </div>

                    <div className="relative">
                      <Calendar
                        className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                          focused === 'date' ? 'text-gold-400' : 'text-gray-600'
                        }`}
                        size={16}
                      />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => handleChange('date', e.target.value)}
                        onFocus={() => setFocused('date')}
                        onBlur={() => setFocused(null)}
                        className="w-full pl-10 pr-4 py-3.5 bg-dark-200 border border-gold-400/10 rounded text-white text-sm focus:outline-none focus:border-gold-400/40 transition-all duration-300 [color-scheme:dark]"
                      />
                    </div>

                    <div className="relative">
                      <Clock
                        className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                          focused === 'time' ? 'text-gold-400' : 'text-gray-600'
                        }`}
                        size={16}
                      />
                      <select
                        required
                        value={formData.time}
                        onChange={(e) => handleChange('time', e.target.value)}
                        onFocus={() => setFocused('time')}
                        onBlur={() => setFocused(null)}
                        className="w-full pl-10 pr-4 py-3.5 bg-dark-200 border border-gold-400/10 rounded text-white text-sm focus:outline-none focus:border-gold-400/40 transition-all duration-300 appearance-none"
                      >
                        <option value="">Select Time</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="12:30">12:30 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="13:30">1:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <Users
                      className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                        focused === 'guests' ? 'text-gold-400' : 'text-gray-600'
                      }`}
                      size={16}
                    />
                    <select
                      value={formData.guests}
                      onChange={(e) => handleChange('guests', e.target.value)}
                      onFocus={() => setFocused('guests')}
                      onBlur={() => setFocused(null)}
                      className="w-full pl-10 pr-4 py-3.5 bg-dark-200 border border-gold-400/10 rounded text-white text-sm focus:outline-none focus:border-gold-400/40 transition-all duration-300 appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                      <option value="10+">10+ Guests (Private Dining)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-gold text-dark-900 font-semibold rounded text-sm tracking-wide hover:shadow-lg hover:shadow-gold-400/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Confirm Reservation
                  </button>

                  <p className="text-center text-xs text-gray-600">
                    For groups of 10+, please call us directly at +91 98765 43210
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
