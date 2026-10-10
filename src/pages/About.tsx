import { Link } from 'react-router-dom';
import { Eye, Award, Heart, MapPin, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { Seo, JsonLd, localBusinessSchema } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { CountUp } from '@/components/CountUp';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { businessInfo } from '@/lib/businessInfo';
import { brandAssets } from '@/lib/assets';

export function About() {
  useScrollReveal();

  return (
    <>
      <Seo
        title="About Vision Optics — Trusted Optical Store in Velachery, Chennai"
        description="Learn about Vision Optics at No. 36, Nethaji Road, Velachery, Chennai. Trusted optical store offering computerised eye testing, quality eyewear, and personalized care."
        path="/about"
      />
      <JsonLd data={localBusinessSchema()} />
      <Breadcrumbs crumbs={[{ label: 'About' }]} />

      {/* Hero */}
      <section className="bg-violet-900 py-14 sm:py-20">
        <div className="container-x text-center">
          <h1 className="reveal font-display text-3xl font-bold text-white sm:text-4xl">About Vision Optics</h1>
          <p className="reveal mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-violet-200 sm:text-base">
            A trusted optical store in Velachery, Chennai — dedicated to quality eye care, honest advice, and affordable eyewear.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="reveal section-label">Our Story</p>
              <h2 className="reveal mt-2 section-title">Who We Are</h2>
              <p className="reveal mt-4 section-subtitle">
                Vision Optics is located at No. 36, Nethaji Road, TNHB Colony, Velachery, Chennai – 600042. We have been serving the Velachery community with professional optical care, quality eyewear, and personalized service.
              </p>
              <p className="reveal mt-4 section-subtitle">
                Our store is near St. Britto's School and the Union Bank back side, making it easy to find and visit. We are open 9:00 AM to 10:00 PM, including Sundays, because we believe eye care should be accessible and convenient.
              </p>
              <p className="reveal mt-4 section-subtitle">
                At Vision Optics, we combine computerised eye testing with a wide range of quality eyewear options — from prescription spectacles and frames to contact lenses and sunglasses. Brands such as Ray-Ban, Bausch + Lomb, Hoya, Crizal, Varilux, Kodak Lens, and Arcadio are part of our offering.
              </p>
            </div>
            <div className="reveal relative overflow-hidden rounded-2xl shadow-violet-md">
              <img
                src={brandAssets.shop}
                alt="Vision Optics shop exterior on Nethaji Road, Velachery"
                width={800} height={550}
                className="aspect-[3/2] w-full object-cover"
                loading="lazy" decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-lavender-50 py-16 sm:py-20">
        <div className="container-x">
          <p className="reveal section-label text-center">Our Values</p>
          <h2 className="reveal mt-2 section-title text-center">What We Stand For</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Eye className="h-6 w-6" />, title: 'Professional Eye Care', desc: 'Computerised eye testing with accurate prescription assessment and honest, personalized guidance.' },
              { icon: <Award className="h-6 w-6" />, title: 'Experience & Expertise', desc: `Serving the Velachery community with optical expertise and a deep commitment to quality care.` },
              { icon: <Heart className="h-6 w-6" />, title: 'Affordable Pricing', desc: 'Quality eyewear at competitive, honest prices. We believe clear vision should be accessible to all.' },
              { icon: <Users className="h-6 w-6" />, title: 'Personalized Service', desc: 'We take time to understand your needs and recommend the best eyewear for your lifestyle and budget.' },
              { icon: <ShieldCheck className="h-6 w-6" />, title: 'Trusted & Honest', desc: 'Genuine recommendations and honest advice. We only suggest what you actually need.' },
              { icon: <MapPin className="h-6 w-6" />, title: 'Local Presence', desc: 'Proudly serving Velachery from our Nethaji Road location, open daily including Sundays.' },
            ].map((v) => (
              <div key={v.title} className="card reveal flex flex-col p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-700">{v.icon}</div>
                <h3 className="text-base font-semibold text-charcoal-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats with count-up */}
      <section className="bg-violet-900 py-14">
        <div className="container-x grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            <div className="reveal">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl"><CountUp value={900} suffix="+" /></p>
              <p className="mt-1 text-xs text-violet-300">Google Reviews</p>
            </div>
            <div className="reveal">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl"><CountUp value={5} suffix="★" /></p>
              <p className="mt-1 text-xs text-violet-300">Rating</p>
            </div>
            <div className="reveal">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl"><CountUp value={30} suffix="+ Yrs" /></p>
              <p className="mt-1 text-xs text-violet-300">Years Experience</p>
            </div>
            <div className="reveal">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl"><CountUp value={100} suffix="%" /></p>
              <p className="mt-1 text-xs text-violet-300">Customer Care</p>
            </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container-x text-center">
          <h2 className="reveal section-title">Visit Vision Optics in Velachery</h2>
          <p className="reveal mt-3 section-subtitle mx-auto max-w-xl">
            {businessInfo.fullAddress}<br />
            <span className="text-violet-500 text-xs">{businessInfo.address.landmark}</span>
          </p>
          <div className="reveal mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary">Contact Us <ArrowRight className="h-4 w-4" /></Link>
            <a href={businessInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">Get Directions</a>
          </div>
        </div>
      </section>

      <CTABanner title="Ready for Quality Eye Care?" text="Visit Vision Optics on Nethaji Road, Velachery for computerised eye testing and quality eyewear." />
    </>
  );
}
