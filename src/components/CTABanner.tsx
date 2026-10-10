import { useState } from 'react';
import { MapPin, Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { businessInfo } from '@/lib/businessInfo';
import { whatsappLink } from '@/lib/whatsapp';
import { EnquiryModal } from '@/components/EnquiryModal';

export function CTABanner({
  title = 'Looking for a Trusted Optical Shop in Velachery?',
  text = 'Visit Vision Optics on Nethaji Road for computerised eye testing and quality eyewear at affordable prices.',
}: {
  title?: string;
  text?: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="cta-banner relative overflow-hidden bg-violet-900 py-16 sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-lavender-400/10 blur-3xl" />
        </div>
        <div className="container-x relative text-center">
          <h2 className="reveal font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="reveal mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-violet-200 sm:text-base lg:text-lg">{text}</p>
          <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => setModalOpen(true)} className="btn-primary shadow-lg shadow-violet-900/40">
              <CalendarCheck className="h-4 w-4" />Book Eye Test
            </button>
            <a href={businessInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
              <MapPin className="h-4 w-4" />Get Directions
            </a>
            <a href={businessInfo.phoneLink} className="btn-ghost-dark">
              <Phone className="h-4 w-4" />Call Now
            </a>
            <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="h-4 w-4" />WhatsApp
            </a>
          </div>
        </div>
      </section>
      <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
