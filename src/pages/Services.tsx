import { Eye, Glasses, Frame, Contact, Sun, Sparkles, CheckCircle, Monitor, Shield } from 'lucide-react';
import { Seo, JsonLd, localBusinessSchema } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { businessInfo } from '@/lib/businessInfo';
import { products } from '@/lib/products';
import { brandAssets } from '@/lib/assets';

const SERVICES = [
  {
    icon: <Eye className="h-6 w-6" />,
    title: 'Computerised Eye Testing',
    items: ['Professional computerised eye examination', 'Accurate prescription assessment', 'Suitable for all ages', 'Personalized guidance on vision correction'],
    image: 'https://images.pexels.com/photos/5201875/pexels-photo-5201875.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: <Glasses className="h-6 w-6" />,
    title: 'Spectacles & Frames',
    items: ['Prescription spectacles', 'Wide frame selection', 'Various materials and styles', 'Frame adjustment and fitting'],
    image: 'https://images.pexels.com/photos/5752270/pexels-photo-5752270.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: <Frame className="h-6 w-6" />,
    title: 'Prescription Lenses',
    items: ['Single vision lenses', 'Progressive / bifocal lenses', 'Anti-reflective coatings', 'Blue-light filter options'],
    image: 'https://images.pexels.com/photos/6011443/pexels-photo-6011443.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: <Contact className="h-6 w-6" />,
    title: 'Contact Lenses',
    items: ['Daily disposable lenses', 'Monthly replacement lenses', 'Bausch + Lomb range', 'Usage and care guidance'],
    image: 'https://images.pexels.com/photos/5843338/pexels-photo-5843338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: <Sun className="h-6 w-6" />,
    title: 'Sunglasses',
    items: ['UV400 protection options', 'Polarized lenses', 'Ray-Ban and other brands', 'Prescription sunglasses'],
    image: 'https://images.pexels.com/photos/5202048/pexels-photo-5202048.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Eyewear Consultation',
    items: ['Face shape assessment', 'Frame selection guidance', 'Lens recommendation', 'Lifestyle-based advice'],
    image: 'https://images.pexels.com/photos/5621829/pexels-photo-5621829.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
];

const FACE_SHAPES = [
  { shape: 'Round Face', recommendation: 'Angular, rectangular, or browline frames', guidance: 'Structured frames add definition and create a balanced contrast with softer facial curves.', productName: 'Slim Rectangular' },
  { shape: 'Oval Face', recommendation: 'Most frame shapes; keep the frame width balanced', guidance: 'Naturally balanced proportions suit a wide range of frame shapes and styles.', productName: 'Classic Clubmaster' },
  { shape: 'Square Face', recommendation: 'Round, oval, or softly curved frames', guidance: 'Softer curves help balance a strong jawline and create a more relaxed appearance.', productName: 'Classic Oval' },
  { shape: 'Heart Face', recommendation: 'Lightweight, rounded, or aviator frames', guidance: 'Balanced lower rims and lightweight styles complement a broader forehead and narrower chin.', productName: 'Aviator Classic' },
  { shape: 'Diamond Face', recommendation: 'Oval, cat-eye, or softly detailed frames', guidance: 'Gentle curves complement prominent cheekbones while keeping the overall look balanced.', productName: 'Fashion Round' },
  { shape: 'Oblong Face', recommendation: 'Deeper frames with stronger top lines', guidance: 'Deeper frame shapes add visual width and help balance longer facial proportions.', productName: 'Modern Square' },
  { shape: "Kids / Children's Eyewear", recommendation: 'Flexible, lightweight, child-friendly frames', guidance: 'Comfortable, durable frames designed for growing eyes and active everyday wear.', productName: 'Kids Eyewear', kids: true, image: 'https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
].map((shape) => ({
  ...shape,
  image: 'image' in shape && shape.image ? shape.image : products.find((product) => product.name === shape.productName)?.image ?? brandAssets.shop,
}));

const LENS_TYPES = [
  { name: 'Single Vision', desc: 'Correct one distance — near or far. The most common lens type.', icon: <Eye className="h-5 w-5" /> },
  { name: 'Progressive / Varifocal', desc: 'Multiple prescription zones in one seamless lens.', icon: <Frame className="h-5 w-5" /> },
  { name: 'Anti-Reflective', desc: 'Reduces glare from screens and lights. Ideal for computer users.', icon: <Shield className="h-5 w-5" /> },
  { name: 'Blue-Light Filter', desc: 'Filters a portion of blue light from digital screens.', icon: <Monitor className="h-5 w-5" /> },
  { name: 'UV Protection', desc: 'Lens coating that blocks harmful ultraviolet rays.', icon: <Sun className="h-5 w-5" /> },
  { name: 'Polarized', desc: 'Eliminates glare from reflective surfaces. Ideal for driving.', icon: <Sun className="h-5 w-5" /> },
];

export function Services() {
  useScrollReveal();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: { '@type': 'OpticalStore', name: businessInfo.name },
    serviceType: 'Optical Services',
    areaServed: 'Velachery, Chennai',
    description: 'Computerised eye testing, prescription spectacles, contact lenses, sunglasses, and eyewear consultation at Vision Optics, Velachery.',
  };

  return (
    <>
      <Seo
        title="Services — Computerised Eye Testing & Eyewear | Vision Optics Velachery"
        description="Vision Optics in Velachery offers computerised eye testing, prescription spectacles, eyeglass frames, contact lenses, sunglasses, and personalized eyewear guidance at affordable prices."
        path="/services"
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={serviceSchema} />
      <Breadcrumbs crumbs={[{ label: 'Services' }]} />

      {/* Hero */}
      <section className="bg-violet-900 py-14 sm:py-20">
        <div className="container-x text-center">
          <h1 className="reveal font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Services & Vision Solutions</h1>
          <p className="reveal mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-violet-200 sm:text-base lg:text-lg">
            Complete optical care at Vision Optics, Velachery. From computerised eye testing to premium eyewear — everything you need under one roof.
          </p>
        </div>
      </section>

      {/* Services with images */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <p className="reveal section-label text-center">Our Services</p>
          <h2 className="reveal mt-2 section-title text-center">What We Provide</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="service-card reveal group flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img src={s.image} alt={s.title} width={600} height={400}
                    className="service-card-img h-full w-full object-cover"
                    loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-950/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-violet-700 backdrop-blur-sm transition-all duration-300 group-hover:bg-violet-700 group-hover:text-white group-hover:scale-110">
                    {s.icon}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold text-charcoal-900 transition-colors group-hover:text-violet-800">{s.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-charcoal-600">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-violet-500 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Guidance — Face Shapes with images */}
      <section className="bg-lavender-50 py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal section-label">Vision Guidance</p>
            <h2 className="reveal mt-2 section-title">Find Your Better Vision</h2>
            <p className="reveal mt-3 section-subtitle">Guidance to help you choose eyewear that suits your face, lifestyle, and vision needs.</p>
          </div>

          {/* Face shape guide with images */}
          <div className="mt-12">
            <h3 className="reveal font-display text-lg font-semibold text-charcoal-900 sm:text-xl mb-6">Frame Selection by Face Shape</h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FACE_SHAPES.map((f) => (
                <div key={f.shape} className={`service-card reveal group flex aspect-square flex-col p-0 overflow-hidden ${f.kids ? 'border-amber-300 ring-2 ring-amber-100' : ''}`}>
                  <div className="relative min-h-0 flex-1 overflow-hidden">
                    <img src={f.image} alt={`${f.shape} eyewear frame example`} width={400} height={400}
                      className="service-card-img h-full w-full object-cover"
                      loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-950/90 via-violet-950/10 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-800">{f.kids ? 'Growing Eyes' : 'Frame Guide'}</div>
                    <h4 className="absolute bottom-3 left-4 right-4 text-base font-semibold text-white">{f.shape}</h4>
                  </div>
                  <div className="bg-white p-3.5 sm:p-4">
                    <p className="text-xs font-semibold text-violet-700">Try: {f.recommendation}</p>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-charcoal-600">{f.guidance}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="reveal mt-4 text-xs text-charcoal-500 italic">
              Frame recommendations are general styling guidance. Our team at Vision Optics can help you find what works best for you personally.
            </p>
          </div>

          {/* Lens guide — icon cards */}
          <div className="mt-14">
            <h3 className="reveal font-display text-lg font-semibold text-charcoal-900 sm:text-xl mb-6">Lens Selection Guide</h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {LENS_TYPES.map((l) => (
                <div key={l.name} className="card reveal group p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 transition-all duration-300 group-hover:bg-violet-700 group-hover:text-white group-hover:scale-110">{l.icon}</div>
                  <h4 className="text-sm font-semibold text-violet-800 transition-colors group-hover:text-violet-900">{l.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTABanner title="Book Your Eye Test Today" text="Visit Vision Optics on Nethaji Road, Velachery for professional computerised eye testing and personalized eyewear guidance." />
    </>
  );
}
