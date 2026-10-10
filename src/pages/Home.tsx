import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Eye, Glasses, Sun, Contact, Sparkles, Frame,
  Star, Award, Heart, MapPin, ShieldCheck, Users, HandHeart,
  Phone, MessageCircle, CalendarCheck, ArrowRight, BookOpen,
} from 'lucide-react';
import { Seo, JsonLd, localBusinessSchema } from '@/components/Seo';
import { Hero } from '@/components/Hero';
import { CTABanner } from '@/components/CTABanner';
import { LazyMap } from '@/components/LazyMap';
import { CountUp } from '@/components/CountUp';
import { EnquiryModal } from '@/components/EnquiryModal';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { businessInfo } from '@/lib/businessInfo';
import { products } from '@/lib/products';
import { whatsappLink } from '@/lib/whatsapp';
import { brandAssets } from '@/lib/assets';

const TESTIMONIALS_PREVIEW = [
  { name: 'Rajesh Kumar', rating: 5, text: 'Excellent service and very professional eye testing. Helped me choose the perfect frames. Highly recommended in Velachery.', service: 'Eye Testing & Spectacles' },
  { name: 'Priya Sundaram', rating: 5, text: 'Got my first contact lenses here. They explained everything patiently and the free eye test was thorough and professional.', service: 'Contact Lenses' },
  { name: 'Saravanan Krishnan', rating: 5, text: '30 years of experience really shows. The owner personally guided me through frame selection. Very trustworthy optical store.', service: 'Eyewear Consultation' },
];

const FAQ_PREVIEW = [
  { q: 'Where is Vision Optics located?', a: 'Vision Optics is at No. 36, Nethaji Road, TNHB Colony, Velachery, Chennai – 600042. Near St. Britto\'s School, Union Bank Back Side.' },
  { q: 'Does Vision Optics provide computerised eye testing?', a: 'Yes. We provide professional computerised eye testing. The service is available at our Velachery store on Nethaji Road.' },
  { q: 'Is eye testing free?', a: 'Eye testing is available at our store. Please contact us or visit us directly to enquire about current services.' },
  { q: 'What eyewear does Vision Optics offer?', a: 'We offer prescription spectacles, eyeglass frames, contact lenses (including Bausch + Lomb), and sunglasses (including Ray-Ban).' },
  { q: 'What are the opening hours?', a: '9:00 AM – 10:00 PM. Sunday Working.' },
];

const SERVICE_CARDS = [
  { icon: <Eye className="h-6 w-6" />, title: 'Computerised Eye Testing', desc: 'Professional eye testing using computerised equipment for accurate prescriptions.', link: '/services', image: 'https://images.pexels.com/photos/5201875/pexels-photo-5201875.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { icon: <Glasses className="h-6 w-6" />, title: 'Spectacles & Frames', desc: 'Prescription spectacles and stylish frames for every face shape and budget.', link: '/services', image: 'https://images.pexels.com/photos/5752270/pexels-photo-5752270.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { icon: <Frame className="h-6 w-6" />, title: 'Prescription Lenses', desc: 'Quality lenses including single vision, progressive, anti-reflective, and blue-light options.', link: '/services', image: 'https://images.pexels.com/photos/6011443/pexels-photo-6011443.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { icon: <Contact className="h-6 w-6" />, title: 'Contact Lenses', desc: 'Daily and monthly contact lenses with proper guidance on usage and care.', link: '/services', image: 'https://images.pexels.com/photos/5843338/pexels-photo-5843338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { icon: <Sun className="h-6 w-6" />, title: 'Sunglasses', desc: 'Stylish sunglasses with UV protection, including premium Ray-Ban options.', link: '/services', image: 'https://images.pexels.com/photos/5202048/pexels-photo-5202048.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { icon: <Sparkles className="h-6 w-6" />, title: 'Eyewear Consultation', desc: 'Personalized assistance to help you select eyewear that suits you perfectly.', link: '/contact', image: 'https://images.pexels.com/photos/5621829/pexels-photo-5621829.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
];

export function Home() {
  useScrollReveal();
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: businessInfo.name,
    url: businessInfo.website,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_PREVIEW.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Seo
        title="Vision Optics — Computerised Eye Testing & Eyewear in Velachery, Chennai"
        description="Vision Optics is a trusted optical store at No. 36, Nethaji Road, Velachery, Chennai. Computerised eye testing, prescription spectacles, contact lenses, sunglasses. Open 9AM–10PM, Sunday Working."
        path="/"
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema} />

      <Hero />

      {/* Trust stats with count-up */}
      <section className="border-b border-violet-100 bg-white py-12">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="reveal text-center">
              <p className="font-display text-3xl font-bold text-violet-800 sm:text-4xl"><CountUp value={900} suffix="+" /></p>
              <p className="mt-1 text-sm text-charcoal-600">Google Reviews</p>
            </div>
            <div className="reveal text-center">
              <p className="font-display text-3xl font-bold text-violet-800 sm:text-4xl"><CountUp value={5} suffix="★" /></p>
              <p className="mt-1 text-sm text-charcoal-600">Average Rating</p>
            </div>
            <div className="reveal text-center">
              <p className="font-display text-3xl font-bold text-violet-800 sm:text-4xl"><CountUp value={30} suffix="+ Yrs" /></p>
              <p className="mt-1 text-sm text-charcoal-600">Experience</p>
            </div>
            <div className="reveal text-center">
              <p className="font-display text-3xl font-bold text-violet-800 sm:text-4xl"><CountUp value={100} suffix="%" /></p>
              <p className="mt-1 text-sm text-charcoal-600">Customer Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-lavender-50 py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="reveal section-label">About Us</p>
              <h2 className="reveal mt-2 section-title">About Vision Optics</h2>
              <p className="reveal mt-4 section-subtitle">
                Vision Optics is a trusted optical store located at No. 36, Nethaji Road, TNHB Colony, Velachery, Chennai. For over {businessInfo.stats.experience} years, we have served the Velachery community with professional eye testing, quality eyewear, and honest, personalized service.
              </p>
              <p className="reveal mt-3 section-subtitle">
                Our commitment to affordable pricing, accurate prescriptions, and customer-first care has earned us a strong reputation as one of the most reliable optical shops in Velachery. We are located near St. Britto's School on Nethaji Road — easy to find and visit.
              </p>
              <Link to="/about" className="reveal btn-outline mt-6">
                Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="reveal grid grid-cols-2 gap-3 sm:gap-4">
              <div className="group relative col-span-2 overflow-hidden rounded-2xl shadow-violet-md">
                <img
                  src={brandAssets.shop}
                  alt="Vision Optics optical shop exterior on Nethaji Road, Velachery"
                  width={900} height={700}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy" decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-violet-950/80 to-transparent p-4 pt-12">
                  <p className="text-sm font-semibold text-white">Our Nethaji Road store</p>
                  <p className="text-xs text-violet-200">Easy to find in Velachery</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl shadow-violet-md">
                <img
                  src={brandAssets.owner}
                  alt="Vision Optics owner welcoming a customer inside the optical store"
                  width={700} height={900}
                  className="aspect-square w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy" decoding="async"
                />
              </div>
              <div className="flex min-h-full flex-col justify-center overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-violet-sm">
                <img
                  src={brandAssets.personalCare}
                  alt="Vision Optics team member inside the optical store"
                  width={700}
                  height={900}
                  className="aspect-square w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-4 sm:p-6">
                  <HandHeart className="h-7 w-7 text-violet-700" />
                  <p className="mt-3 font-display text-sm font-bold text-charcoal-900 sm:text-base">Personal care, every visit</p>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal-600 sm:text-sm">Meet a team that takes time to understand your vision and help you choose with confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eye Testing highlight */}
      <section className="relative overflow-hidden bg-violet-900 py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        </div>
        <div className="container-x relative">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="reveal order-2 lg:order-1 overflow-hidden rounded-2xl shadow-violet-lg">
              <img
                src="https://images.pexels.com/photos/5201875/pexels-photo-5201875.jpeg?auto=compress&cs=tinysrgb&w=800&h=550&fit=crop"
                alt="Computerised eye testing at Vision Optics Velachery Chennai"
                width={800} height={550}
                className="aspect-[3/2] w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy" decoding="async"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="reveal text-xs font-semibold uppercase tracking-widest text-violet-300">Eye Testing</p>
              <h2 className="reveal mt-2 font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Computerised Eye Testing in Velachery
              </h2>
              <p className="reveal mt-4 text-sm leading-relaxed text-violet-200 sm:text-base lg:text-lg">
                Vision Optics provides professional computerised eye testing to accurately assess your vision. Our eye-testing service includes prescription assessment and personalized guidance to help you find the right eyewear.
              </p>
              <div className="reveal mt-5 grid gap-3 sm:grid-cols-2">
                {['Computerised Equipment', 'Prescription Assessment', 'Personalized Guidance', 'All Age Groups'].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-violet-200">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-violet-700 text-violet-300">✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <div className="reveal mt-6 flex flex-wrap gap-3">
                <button onClick={() => setEnquiryOpen(true)} className="btn-primary shadow-lg shadow-violet-900/40">
                  <CalendarCheck className="h-4 w-4" />Book Eye Test
                </button>
                <a href={whatsappLink('eyeTest')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle className="h-4 w-4" />WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services with images */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal section-label">Our Services</p>
            <h2 className="reveal mt-2 section-title">What We Offer</h2>
            <p className="reveal mt-3 section-subtitle">Complete optical care services at our Nethaji Road, Velachery store.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CARDS.map((s) => (
              <Link key={s.title} to={s.link} className="service-card reveal group flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={600} height={400}
                    className="service-card-img h-full w-full object-cover"
                    loading="lazy" decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-950/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-violet-700 backdrop-blur-sm transition-all duration-300 group-hover:bg-violet-700 group-hover:text-white group-hover:scale-110">
                    {s.icon}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold text-charcoal-900 transition-colors group-hover:text-violet-800">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-600">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-700 group-hover:text-violet-900">
                    Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link to="/services" className="btn-outline">View All Services <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-lavender-50 py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal section-label">Shop</p>
            <h2 className="reveal mt-2 section-title">Featured Eyewear</h2>
            <p className="reveal mt-3 section-subtitle">Explore our collection of quality eyewear from trusted brands.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((p) => (
              <Link key={p.id} to="/shop" className="product-card reveal group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img src={p.image} alt={p.imageAlt} width={600} height={400}
                    className="product-card-img aspect-[3/2] w-full object-cover"
                    loading="lazy" decoding="async" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-violet-600">{p.brand}</p>
                  <p className="mt-0.5 text-sm font-semibold text-charcoal-900">{p.name}</p>
                  <p className="mt-0.5 text-xs text-charcoal-600">{p.category}</p>
                  <p className="mt-2 text-base font-bold text-violet-800">₹{p.price.toLocaleString('en-IN')}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link to="/shop" className="btn-primary">View All Products <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="overflow-hidden bg-white py-14 sm:py-16">
        <div className="container-x">
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="reveal overflow-hidden rounded-2xl border border-violet-100 bg-lavender-50 p-2 shadow-violet-sm">
              <img
                src={brandAssets.shop}
                alt="Vision Optics store brand display featuring trusted optical brands"
                width={900}
                height={700}
                className="aspect-[4/3] w-full rounded-xl object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <p className="reveal section-label">Brands We Carry</p>
              <h2 className="reveal mt-2 section-title">Trusted names for clearer vision</h2>
              <p className="reveal mt-3 section-subtitle">Explore carefully selected eyewear, lens, and contact-lens brands available at our Velachery store.</p>
              <div className="reveal mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {businessInfo.brands.map((b) => (
                  <Link key={b} to="/brands" className="group flex min-h-20 items-center justify-center rounded-xl border border-violet-100 bg-white px-3 py-4 text-center shadow-violet-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-lavender-50 hover:shadow-violet-md">
                    <span className={`brand-wordmark brand-${b.toLowerCase().replace(/[^a-z]/g, '')} text-base sm:text-lg`}>{b}</span>
                  </Link>
                ))}
              </div>
              <div className="reveal mt-7">
                <Link to="/brands" className="btn-outline">Explore All Brands <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-lavender-50 py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal section-label">Why Vision Optics</p>
            <h2 className="reveal mt-2 section-title">Why Choose Vision Optics?</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Star className="h-5 w-5" />, title: 'Highly Rated', desc: 'Strong customer reputation through genuine Google reviews.' },
              { icon: <Eye className="h-5 w-5" />, title: 'Computerised Testing', desc: 'Professional computerised eye testing for accurate prescriptions.' },
              { icon: <Award className="h-5 w-5" />, title: 'Experienced', desc: `${businessInfo.stats.experience} years of optical expertise in Velachery.` },
              { icon: <Heart className="h-5 w-5" />, title: 'Affordable', desc: 'Quality eyewear at honest, competitive prices.' },
              { icon: <HandHeart className="h-5 w-5" />, title: 'Personalized', desc: 'Helpful guidance tailored to your individual needs.' },
              { icon: <MapPin className="h-5 w-5" />, title: 'Conveniently Located', desc: 'Nethaji Road, TNHB Colony, Velachery — easy to access.' },
              { icon: <ShieldCheck className="h-5 w-5" />, title: 'Trusted', desc: 'Honest advice, quality products, and real customer care.' },
              { icon: <Users className="h-5 w-5" />, title: 'Sunday Working', desc: 'Open 9AM–10PM including Sundays for your convenience.' },
            ].map((c) => (
              <div key={c.title} className="card reveal group flex flex-col p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 transition-all duration-300 group-hover:bg-violet-700 group-hover:text-white group-hover:scale-110">{c.icon}</div>
                <h3 className="text-sm font-semibold text-charcoal-900 transition-colors group-hover:text-violet-800">{c.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-charcoal-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal section-label">Testimonials</p>
            <h2 className="reveal mt-2 section-title">What Our Customers Say</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS_PREVIEW.map((r) => (
              <div key={r.name} className="card reveal group flex flex-col p-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-base leading-relaxed text-charcoal-700">&ldquo;{r.text}&rdquo;</p>
                <div className="mt-4 border-t border-violet-50 pt-4">
                  <p className="text-sm font-semibold text-charcoal-900">{r.name}</p>
                  <p className="text-xs text-violet-600">{r.service}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link to="/testimonials" className="btn-outline">View All Testimonials <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* Eye Care preview */}
      <section className="bg-lavender-50 py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal section-label">Eye Care & Guidance</p>
            <h2 className="reveal mt-2 section-title">Eye Care Knowledge</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Screen-Time & Eye Health', desc: 'Practical habits to protect your eyes during extended screen use.' },
              { title: 'How to Clean Your Spectacles', desc: 'Correct cleaning techniques to keep your lenses clear and scratch-free.' },
              { title: 'Choosing the Right Contact Lenses', desc: 'Guidance on daily vs monthly lenses and proper hygiene.' },
              { title: 'UV Protection & Sunglasses', desc: 'Why UV400 protection matters and how to choose sunglasses correctly.' },
              { title: 'Frame Selection by Face Shape', desc: 'Styling guidance for selecting frames that complement your features.' },
              { title: 'Signs You May Need an Eye Test', desc: 'Common indicators that it may be time to visit your optician.' },
            ].map((a) => (
              <Link key={a.title} to="/eye-care" className="card reveal group flex flex-col p-5">
                <BookOpen className="h-5 w-5 text-violet-600 transition-transform group-hover:scale-110" />
                <h3 className="mt-3 text-sm font-semibold text-charcoal-900 transition-colors group-hover:text-violet-800">{a.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-charcoal-600">{a.desc}</p>
                <span className="mt-3 text-xs font-semibold text-violet-700 group-hover:text-violet-900">Read More →</span>
              </Link>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link to="/eye-care" className="btn-outline">View Eye Care Guide <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <p className="reveal section-label text-center">FAQ</p>
            <h2 className="reveal mt-2 section-title text-center">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-3">
              {FAQ_PREVIEW.map((item) => (
                <details key={item.q} className="reveal group rounded-xl border border-violet-100 bg-white p-4 transition-all duration-300 open:border-violet-300 open:bg-lavender-50 open:shadow-violet-sm">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-charcoal-900 marker:content-none">
                    {item.q}
                    <span className="ml-4 flex-shrink-0 text-xl font-light text-violet-400 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-lavender-50 py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="reveal section-label">Visit Us</p>
              <h2 className="reveal mt-2 section-title">Visit Vision Optics in Velachery</h2>
              <div className="reveal mt-6 space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-violet-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-charcoal-900">Address</p>
                    <p className="text-charcoal-600">{businessInfo.fullAddress}</p>
                    <p className="mt-1 text-xs text-violet-500">{businessInfo.address.landmark}</p>
                  </div>
                </div>
                {businessInfo.phones.map((p) => (
                  <div key={p.label} className="flex gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-violet-600" />
                    <div>
                      <p className="font-semibold text-charcoal-900">{p.label}</p>
                      <a href={p.link} className="text-charcoal-600 hover:text-violet-700">{p.number}</a>
                    </div>
                  </div>
                ))}
                <div className="flex gap-3">
                  <CalendarCheck className="h-5 w-5 flex-shrink-0 text-violet-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-charcoal-900">Hours</p>
                    <p className="text-charcoal-600">{businessInfo.hours[0].time} · {businessInfo.hoursNote}</p>
                  </div>
                </div>
              </div>
              <div className="reveal mt-6 flex flex-wrap gap-3">
                <a href={businessInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MapPin className="h-4 w-4" />Get Directions
                </a>
                <a href={businessInfo.phoneLink} className="btn-outline">
                  <Phone className="h-4 w-4" />Call Now
                </a>
                <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle className="h-4 w-4" />WhatsApp
                </a>
              </div>
            </div>
            <div className="reveal space-y-4">
              <div className="group overflow-hidden rounded-2xl shadow-violet-md">
                <img
                  src={brandAssets.shop}
                  alt="Vision Optics shop entrance on Nethaji Road in Velachery"
                  width={900} height={700}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy" decoding="async"
                />
              </div>
              <LazyMap />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  );
}
