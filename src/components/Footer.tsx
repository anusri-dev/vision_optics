import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { navLinks, businessInfo } from '@/lib/businessInfo';
import { BrandLogo } from '@/components/BrandLogo';
import { whatsappLink } from '@/lib/whatsapp';

const services = [
  { label: 'Eye Testing', path: '/services' },
  { label: 'Spectacles & Frames', path: '/services' },
  { label: 'Prescription Lenses', path: '/services' },
  { label: 'Contact Lenses', path: '/services' },
  { label: 'Sunglasses', path: '/services' },
  { label: 'Shop', path: '/shop' },
];

export function Footer() {
  return (
    <footer className="border-t border-violet-900 bg-violet-950 text-violet-200">
      <div className="container-x py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="rounded-xl bg-white p-3 inline-block">
              <BrandLogo size="sm" showName={false} />
            </div>
            <div className="mt-3">
              <div className="font-display text-sm font-bold tracking-wider text-white">VISION OPTICS</div>
              <div className="text-[9px] tracking-wider text-violet-300">EYE CARE SPECIALISTS</div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-violet-300">
              Trusted optical store in Velachery, Chennai. Computerised eye testing, quality eyewear and personalized optical care.
            </p>
            <div className="mt-4 flex gap-2">
              <a href={businessInfo.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-violet-900 p-3 text-violet-300 hover:bg-violet-800 hover:text-white transition-colors" aria-label="Google"><MapPin className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white">Navigation</h2>
            <ul className="mt-4 space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-violet-300 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white">Services</h2>
            <ul className="mt-4 space-y-2 text-xs">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={s.path} className="text-violet-300 hover:text-white transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-6 text-xs font-semibold uppercase tracking-widest text-white">Brands</h2>
            <ul className="mt-3 space-y-1.5 text-xs">
              {businessInfo.brands.map((b) => (
                <li key={b}><Link to="/brands" className="text-violet-300 hover:text-white transition-colors">{b}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white">Contact</h2>
            <ul className="mt-4 space-y-3 text-xs">
              <li className="flex gap-2.5">
                <MapPin className="h-4 w-4 flex-shrink-0 text-violet-400 mt-0.5" />
                <span className="text-violet-300">{businessInfo.fullAddress}</span>
              </li>
              {businessInfo.phones.map((p) => (
                <li key={p.label}>
                  <a href={p.link} className="flex gap-2.5 text-violet-300 hover:text-white transition-colors">
                    <Phone className="h-4 w-4 flex-shrink-0 text-violet-400" />
                    {p.number}
                  </a>
                </li>
              ))}
              <li>
                <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer" className="flex gap-2.5 text-violet-300 hover:text-white transition-colors">
                  <MessageCircle className="h-4 w-4 flex-shrink-0 text-violet-400" />
                  WhatsApp Us
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock className="h-4 w-4 flex-shrink-0 text-violet-400 mt-0.5" />
                <div className="text-violet-300">
                  {businessInfo.hours[0].time}<br/>
                  <span className="text-violet-400">{businessInfo.hoursNote}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-violet-900 pt-6 text-xs text-violet-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Vision Optics. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
