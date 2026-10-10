import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { businessInfo } from '@/lib/businessInfo';

export function PrivacyPolicy() {
  useScrollReveal();
  return (
    <>
      <Seo title="Privacy Policy | Vision Optics, Velachery" description="Read the privacy policy of Vision Optics, Velachery, Chennai. Learn how we handle your information and protect your privacy." path="/privacy-policy" />
      <Breadcrumbs crumbs={[{ label: 'Privacy Policy' }]} />
      <section className="bg-white py-12 sm:py-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <h1 className="reveal font-display text-3xl font-bold text-charcoal-900 sm:text-4xl">Privacy Policy</h1>
            <p className="reveal mt-2 text-sm text-charcoal-500">Last updated: January 2025</p>
            <div className="reveal mt-8 space-y-6 text-sm leading-relaxed text-charcoal-700">
              <section><h2 className="font-display text-lg font-semibold text-violet-900">1. Introduction</h2><p className="mt-2">{businessInfo.name} (&ldquo;we&rdquo;) is an optical store at {businessInfo.fullAddress}. This privacy policy explains how we handle your information when you visit our website or use our services.</p></section>
              <section><h2 className="font-display text-lg font-semibold text-violet-900">2. Information We Collect</h2><p className="mt-2">We may collect: contact information (name, phone, email), eye prescription details when you use our services, and basic analytics about website visits.</p></section>
              <section><h2 className="font-display text-lg font-semibold text-violet-900">3. How We Use Your Information</h2><p className="mt-2">We use your information to provide eye testing and eyewear services, communicate about appointments, and improve our website and services.</p></section>
              <section><h2 className="font-display text-lg font-semibold text-violet-900">4. Information Sharing</h2><p className="mt-2">We do not sell, rent, or share your personal information with third parties for marketing. Your information is used solely to provide our services.</p></section>
              <section><h2 className="font-display text-lg font-semibold text-violet-900">5. Data Security</h2><p className="mt-2">We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure.</p></section>
              <section><h2 className="font-display text-lg font-semibold text-violet-900">6. Contact</h2><p className="mt-2">Questions? Contact us at {businessInfo.phones[0].number} or {businessInfo.email}.</p></section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
