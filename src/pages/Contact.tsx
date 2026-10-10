import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, CalendarCheck, Mail } from 'lucide-react';
import { Seo, JsonLd, localBusinessSchema } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LazyMap } from '@/components/LazyMap';
import { EnquiryModal } from '@/components/EnquiryModal';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { businessInfo } from '@/lib/businessInfo';
import { whatsappLink } from '@/lib/whatsapp';

const FAQ = [
  { q: 'Where is Vision Optics?', a: 'No. 36, Nethaji Road, TNHB Colony, Velachery, Chennai – 600042. Near St. Britto\'s School, Union Bank Back Side.' },
  { q: 'What are the opening hours?', a: '9:00 AM – 10:00 PM. Sunday Working.' },
  { q: 'Do you provide eye testing?', a: 'Yes. We offer computerised eye testing at our Velachery store. Please visit us or call to enquire.' },
  { q: 'Do you sell Ray-Ban sunglasses?', a: 'Yes. We carry Ray-Ban sunglasses along with other eyewear brands. Visit our store to see the current collection.' },
  { q: 'How do I place an order?', a: 'You can order via WhatsApp using the Order Now button on any product, call us directly, or visit our Nethaji Road store in person.' },
];

export function Contact() {
  useScrollReveal();
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Vision Optics',
    url: `${businessInfo.website}/contact`,
  };

  return (
    <>
      <Seo
        title="Contact Vision Optics — Velachery, Chennai | Phone, WhatsApp & Directions"
        description="Contact Vision Optics at No. 36, Nethaji Road, TNHB Colony, Velachery, Chennai. Phone: 044-43560772 / 94455 69786. Open 9AM–10PM, Sunday Working. Get directions and book eye testing."
        path="/contact"
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={contactSchema} />
      <Breadcrumbs crumbs={[{ label: 'Contact' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-violet-900 py-14 sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        </div>
        <div className="container-x relative text-center">
          <h1 className="reveal font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Contact Vision Optics</h1>
          <p className="reveal mx-auto mt-4 max-w-xl text-sm leading-relaxed text-violet-200 sm:text-base lg:text-lg">
            We are located on Nethaji Road, TNHB Colony, Velachery, Chennai. Open 9:00 AM – 10:00 PM including Sundays.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            {/* Details */}
            <div>
              <h2 className="reveal section-title">Get in Touch</h2>
              <div className="reveal mt-6 space-y-5">
                {/* Address */}
                <div className="group flex gap-4 rounded-xl border border-violet-100 p-4 transition-all duration-300 hover:border-violet-300 hover:shadow-violet-sm">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700 transition-colors group-hover:bg-violet-700 group-hover:text-white"><MapPin className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal-900">Address</p>
                    <address className="not-italic mt-1 text-sm text-charcoal-600">
                      <strong>VISION OPTICS</strong><br />
                      No. 36, Nethaji Road,<br />
                      TNHB Colony, Velachery,<br />
                      Chennai – 600042
                    </address>
                    <p className="mt-1 text-xs text-violet-500">{businessInfo.address.landmark}</p>
                    <a href={businessInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 hover:text-violet-700">
                      <Navigation className="h-3.5 w-3.5" />Get Directions
                    </a>
                  </div>
                </div>

                {/* Phones */}
                <div className="group flex gap-4 rounded-xl border border-violet-100 p-4 transition-all duration-300 hover:border-violet-300 hover:shadow-violet-sm">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700 transition-colors group-hover:bg-violet-700 group-hover:text-white"><Phone className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal-900">Phone</p>
                    {businessInfo.phones.map((p) => (
                      <a key={p.label} href={p.link} className="mt-1 block text-sm text-charcoal-600 hover:text-violet-700">{p.label}: {p.number}</a>
                    ))}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="group flex gap-4 rounded-xl border border-violet-100 p-4 transition-all duration-300 hover:border-violet-300 hover:shadow-violet-sm">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#1da851]"><MessageCircle className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal-900">WhatsApp</p>
                    <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-charcoal-600 hover:text-violet-700">Chat with us on WhatsApp</a>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex gap-4 rounded-xl border border-violet-100 p-4 transition-all duration-300 hover:border-violet-300 hover:shadow-violet-sm">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700 transition-colors group-hover:bg-violet-700 group-hover:text-white"><Mail className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal-900">Email</p>
                    <a href={`mailto:${businessInfo.email}`} className="mt-1 block text-sm text-charcoal-600 hover:text-violet-700">{businessInfo.email}</a>
                  </div>
                </div>

                {/* Hours */}
                <div className="group flex gap-4 rounded-xl border border-violet-100 p-4 transition-all duration-300 hover:border-violet-300 hover:shadow-violet-sm">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700 transition-colors group-hover:bg-violet-700 group-hover:text-white"><Clock className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal-900">Opening Hours</p>
                    <p className="mt-1 text-sm text-charcoal-600">{businessInfo.hours[0].time}</p>
                    <p className="text-sm font-medium text-violet-600">{businessInfo.hoursNote}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="reveal mt-8 flex flex-wrap gap-3">
                <button onClick={() => setEnquiryOpen(true)} className="btn-primary">
                  <CalendarCheck className="h-4 w-4" />Book Eye Test
                </button>
                <a href={businessInfo.phoneLink} className="btn-outline">
                  <Phone className="h-4 w-4" />Call Now
                </a>
                <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle className="h-4 w-4" />WhatsApp
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="reveal"><LazyMap /></div>
          </div>
        </div>
      </section>

      {/* Book eye test — enquiry form CTA */}
      <section className="bg-lavender-50 py-16">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl rounded-3xl bg-violet-900 p-8 text-center shadow-violet-lg sm:p-12">
            <CalendarCheck className="mx-auto h-10 w-10 text-violet-300" />
            <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">Book Your Eye Test</h2>
            <p className="mt-3 text-sm text-violet-200 sm:text-base">
              Fill in a quick enquiry form and we will send your details directly via WhatsApp. We will confirm your appointment right away.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button onClick={() => setEnquiryOpen(true)} className="btn-primary shadow-lg shadow-violet-900/40">
                <CalendarCheck className="h-4 w-4" />Open Enquiry Form
              </button>
              <a href={businessInfo.phoneLink} className="btn-ghost-dark">
                <Phone className="h-4 w-4" />Call to Book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <h2 className="reveal section-title text-center">Quick Answers</h2>
            <div className="mt-8 space-y-3">
              {FAQ.map((item) => (
                <details key={item.q} className="reveal group rounded-xl border border-violet-100 bg-white p-4 transition-all duration-300 open:border-violet-300 open:bg-lavender-50 open:shadow-violet-sm">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-charcoal-900 marker:content-none">
                    {item.q}
                    <span className="ml-4 text-xl font-light text-violet-400 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  );
}
