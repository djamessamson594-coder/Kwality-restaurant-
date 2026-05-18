import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reservations', href: '#reservation' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-200 border-t border-gold-400/10">
      <div className="container-luxury px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold-400">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 4Z" fill="currentColor" />
                </svg>
              </span>
              <div>
                <h3 className="heading-serif text-lg text-gold-400 font-semibold">Kwality</h3>
                <p className="text-[8px] tracking-[0.25em] uppercase text-gold-400/50">Restaurant</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              A Legacy of Taste & Royal Hospitality. Serving authentic North Indian cuisine in Uttar Pradesh since generations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-gold-400/20 flex items-center justify-center text-gray-500 hover:text-gold-400 hover:border-gold-400/50 hover:shadow-[0_0_12px_rgba(212,168,83,0.2)] transition-all duration-300"
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="heading-serif text-sm text-gold-400 tracking-wider uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="heading-serif text-sm text-gold-400 tracking-wider uppercase mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-400/60 shrink-0 mt-0.5" size={14} />
                <span className="text-sm text-gray-500">Civil Lines, Near Clock Tower, Uttar Pradesh 226001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-400/60 shrink-0" size={14} />
                <a href="tel:+919876543210" className="text-sm text-gray-500 hover:text-gold-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-400/60 shrink-0" size={14} />
                <a href="mailto:reservations@kwalityrestaurant.in" className="text-sm text-gray-500 hover:text-gold-400 transition-colors">
                  reservations@kwalityrestaurant.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="heading-serif text-sm text-gold-400 tracking-wider uppercase mb-5">Hours</h4>
            <ul className="space-y-2.5">
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">Mon - Fri</span>
                <span className="text-gray-400">12 PM - 11 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">Saturday</span>
                <span className="text-gray-400">11 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">Sunday</span>
                <span className="text-gray-400">11 AM - 11:30 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gold-400/5">
        <div className="container-luxury px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Kwality Restaurant. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Crafted with passion for taste & tradition
          </p>
        </div>
      </div>
    </footer>
  );
}
