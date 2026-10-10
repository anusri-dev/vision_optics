import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Seo, JsonLd, localBusinessSchema } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { products } from '@/lib/products';
import { brandAssets } from '@/lib/assets';

// ============================================================
//  BRANDS — based on brands shown on the Vision Optics
//  visiting card. [VERIFY WITH CLIENT] before publishing.
// ============================================================
const BRAND_DETAILS = [
  {
    name: 'Ray-Ban',
    category: 'Eyeglasses & Sunglasses',
    description: 'Ray-Ban is one of the world\'s most recognised eyewear brands, known for iconic designs like the Aviator and Wayfarer. Available at Vision Optics in various frame and sunglass styles.',
  },
  {
    name: 'Arcadio',
    category: 'Eyeglasses & Sunglasses',
    description: 'Arcadio offers a range of affordable and stylish eyeglass frames and sunglasses. A popular choice for everyday wear at Vision Optics, Velachery.',
  },
  {
    name: 'Bausch + Lomb',
    category: 'Contact Lenses',
    description: 'Bausch + Lomb is a leading contact lens brand offering daily disposable and monthly replacement lenses. Available at Vision Optics with proper guidance on usage and care.',
  },
  {
    name: 'Crizal',
    category: 'Lens Coatings',
    description: 'Crizal is renowned for its premium anti-reflective lens coatings. Crizal-coated lenses reduce glare, resist smudges, and offer UV protection.',
  },
  {
    name: 'Varilux',
    category: 'Progressive Lenses',
    description: 'Varilux is a trusted name in progressive (varifocal) lenses, offering seamless multi-distance vision correction without visible lines.',
  },
  {
    name: 'Kodak Lens',
    category: 'Prescription Lenses',
    description: 'Kodak Lens offers a range of quality prescription lenses known for optical clarity and durability. Available at Vision Optics, Velachery.',
  },
  {
    name: 'HOYA',
    category: 'Prescription Lenses',
    description: 'HOYA is a global leader in optical lens manufacturing, producing high-quality prescription lenses including single vision, progressive, and specialty lenses.',
  },
];

const MARQUEE_LINES = [
  ['Ray-Ban', 'Crizal', 'HOYA', 'Varilux', 'Kodak Lens'],
  ['Bausch + Lomb', 'Arcadio', 'Ray-Ban', 'HOYA', 'Crizal'],
  ['Varilux', 'Kodak Lens', 'Bausch + Lomb', 'Arcadio', 'Ray-Ban'],
];

function brandSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z]/g, '');
}

export function Brands() {
  useScrollReveal();

  return (
    <>
      <Seo
        title="Eyewear Brands — Vision Optics Velachery | Ray-Ban, Bausch + Lomb, Hoya & More"
        description="Explore eyewear brands available at Vision Optics, Velachery. Ray-Ban, Arcadio, Bausch + Lomb, Crizal, Varilux, Kodak Lens, and HOYA — quality eyewear for every need."
        path="/brands"
      />
      <JsonLd data={localBusinessSchema()} />
      <Breadcrumbs crumbs={[{ label: 'Brands' }]} />

      <section className="bg-violet-900 py-14 sm:py-20">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="text-center lg:text-left">
            <p className="section-label text-violet-300">A considered collection</p>
            <h1 className="reveal mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Our Eyewear Brands</h1>
            <p className="reveal mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-violet-200 sm:text-base lg:mx-0">
              Vision Optics carries quality eyewear brands to suit every need and budget. Visit our store in Velachery to explore our current collection.
            </p>
          </div>
          <div className="reveal overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-violet-lg">
            <img src={brandAssets.shop} alt="Authentic brand signage inside Vision Optics Velachery store" width={900} height={700} className="aspect-[4/3] w-full rounded-xl object-cover" decoding="async" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-violet-100 bg-lavender-50 py-8 sm:py-10" aria-label="Featured eyewear brands">
        <div className="space-y-3">
          {MARQUEE_LINES.map((line, lineIndex) => (
            <div key={lineIndex} className="brand-marquee relative overflow-hidden border-y border-violet-200/70 py-3">
              <div className="brand-marquee-track" style={{ animationDuration: `${26 + lineIndex * 4}s` }}>
                {[...line, ...line].map((brand, index) => (
                  <span key={`${brand}-${index}`} className="brand-marquee-item">
                    <span className={`brand-marquee-name brand-${brandSlug(brand)}`}>{brand}</span>
                    <span className="brand-marquee-separator" aria-hidden="true">—</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BRAND_DETAILS.map((brand) => {
              const brandProducts = products.filter((p) => p.brand === brand.name);
              return (
                <div key={brand.name} className="card reveal flex flex-col p-6">
                  <div className="flex min-h-24 items-center justify-center rounded-xl border border-violet-100 bg-white px-4 py-5 shadow-violet-sm">
                    <span className={`brand-wordmark brand-${brand.name.toLowerCase().replace(/[^a-z]/g, '')}`}>{brand.name}</span>
                  </div>
                  <p className="mt-5 section-label">{brand.category}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-600">{brand.description}</p>
                  {brandProducts.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-charcoal-700 mb-2">
                        Available Products ({brandProducts.length})
                      </p>
                      <div className="flex gap-2 overflow-x-auto pb-1">
                        {brandProducts.slice(0, 3).map((p) => (
                          <img
                            key={p.id}
                            src={p.image}
                            alt={p.imageAlt}
                            width={80}
                            height={54}
                            className="h-14 w-20 flex-shrink-0 rounded-lg object-cover border border-violet-100"
                            loading="lazy"
                            decoding="async"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <Link to="/shop" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-violet-700 hover:text-violet-900">
                    View Products <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
          <p className="reveal mt-10 text-center text-xs text-charcoal-500">
            Brand availability and authorized dealer status should be confirmed at the Vision Optics store.
          </p>
        </div>
      </section>

      <CTABanner title="Find Your Perfect Eyewear" text="Visit Vision Optics on Nethaji Road, Velachery to explore our brand collection in person." />
    </>
  );
}
