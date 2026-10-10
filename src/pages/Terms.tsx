import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { businessInfo } from '@/lib/businessInfo';

export function Terms() {
  useScrollReveal();
  return (
    <>
      <Seo title="Terms & Conditions | Vision Optics, Velachery" description="Read the terms and conditions of Vision Optics, Velachery, Chennai." path="/terms" />
      <Breadcrumbs crumbs={[{ label: 'Terms & Conditions' }]} />
      <section className="bg-white py-12 sm:py-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <h1 className="reveal font-display text-3xl font-bold text-charcoal-900 sm:text-4xl">Terms &amp; Conditions</h1>
            <p className="reveal mt-2 text-sm text-charcoal-500">Last updated: January 2025</p>
            <div className="reveal mt-8 space-y-6 text-sm leading-relaxed text-charcoal-700">
              <section><h2 className="font-display text-lg font-semibold text-violet-900">1. Acceptance of Terms</h2><p className="mt-2">By using the {businessInfo.name} website, you accept these terms and conditions. If you do not agree, please do not use our website.</p></section>
              <section><h2 className="font-display text-lg font-semibold text-violet-900">2. Services</h2><p className="mt-2">{businessInfo.name} provides computerised eye testing, spectacles, frames, contact lenses, and sunglasses at our Velachery store. Service availability and pricing are confirmed in-store.</p></section>
              <section><h2 className="font-display text-lg font-semibold text-violet-900">3. Product Information</h2><p className="mt-2">We strive for accurate product information on our website. Actual products may vary in appearance, availability, and pricing. Visit our store for current details.</p></section>
              <section><h2 className="font-display text-lg font-semibold text-violet-900">4. Eye Testing</h2><p className="mt-2">Our eye testing is conducted by experienced professionals using computerised equipment. It provides a prescription for eyewear. It is not a substitute for a comprehensive medical eye examination by an ophthalmologist.</p></section>
              <section><h2 className="font-display text-lg font-semibold text-violet-900">5. Contact</h2><p className="mt-2">Questions? Contact us at {businessInfo.phones[0].number} or {businessInfo.email}.</p></section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
