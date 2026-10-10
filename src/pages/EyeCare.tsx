import { Eye, Glasses, Contact, Sun, Monitor, BookOpen } from 'lucide-react';
import { Seo, JsonLd, localBusinessSchema } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { brandAssets } from '@/lib/assets';

const SECTIONS = [
  {
    icon: <Monitor className="h-6 w-6" />,
    title: 'Eye Health & Screen Time',
    id: 'eye-health',
    image: 'https://images.pexels.com/photos/5996647/pexels-photo-5996647.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tips: [
      { heading: '20-20-20 Rule', body: 'Every 20 minutes, look at something 20 feet away for at least 20 seconds to reduce digital eye strain.' },
      { heading: 'Proper Lighting', body: 'Ensure your workspace is well-lit. Avoid screens directly in front of windows or bright lights.' },
      { heading: 'Screen Distance', body: 'Position your screen at arm\'s length and slightly below eye level to reduce strain.' },
      { heading: 'Regular Eye Exams', body: 'Routine eye tests help detect vision changes early. Visit an optician if you notice changes.' },
    ],
  },
  {
    icon: <Glasses className="h-6 w-6" />,
    title: 'Spectacle Care',
    id: 'spectacle-care',
    image: brandAssets.owner,
    tips: [
      { heading: 'Correct Cleaning', body: 'Rinse with lukewarm water first. Apply mild soap, gently rub, rinse, and dry with a microfiber cloth.' },
      { heading: 'Proper Storage', body: 'Always store glasses in a protective case when not in use. Place them lens-side up.' },
      { heading: 'What to Avoid', body: 'Never use paper towels, tissue, or clothing on lenses — these scratch the surface.' },
      { heading: 'Frame Adjustments', body: 'Visit our store for professional adjustments. Avoid bending frames yourself.' },
    ],
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: 'Lens Guidance',
    id: 'lens-guidance',
    image: 'https://images.pexels.com/photos/6011443/pexels-photo-6011443.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tips: [
      { heading: 'Choosing Your Lens Type', body: 'Single vision corrects one distance. Progressive allows clear vision at multiple distances.' },
      { heading: 'Anti-Reflective Coatings', body: 'AR coatings reduce glare from screens, headlights, and bright lights for added comfort.' },
      { heading: 'Blue-Light Filter Options', body: 'Blue-light filtering lenses reduce blue light from digital screens. Consult our team for advice.' },
      { heading: 'Lens Care', body: 'Keep lenses clean with proper technique. Replace if significantly scratched or damaged.' },
    ],
  },
  {
    icon: <Contact className="h-6 w-6" />,
    title: 'Contact Lens Hygiene',
    id: 'contact-lenses',
    image: 'https://images.pexels.com/photos/5843338/pexels-photo-5843338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tips: [
      { heading: 'Hygiene is Essential', body: 'Always wash and dry hands thoroughly before handling contact lenses.' },
      { heading: 'Proper Cleaning & Storage', body: 'Clean reusable lenses daily with fresh solution. Never reuse old solution.' },
      { heading: 'Follow Wearing Schedule', body: 'Follow the replacement schedule — daily, bi-weekly, or monthly. Never extend use.' },
      { heading: 'Do Not Sleep in Lenses', body: 'Avoid sleeping in contact lenses unless specifically approved for extended wear.' },
    ],
  },
  {
    icon: <Sun className="h-6 w-6" />,
    title: 'Sunglasses & UV Protection',
    id: 'sunglasses',
    image: 'https://images.pexels.com/photos/5202048/pexels-photo-5202048.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tips: [
      { heading: 'UV Protection is Essential', body: 'Choose sunglasses with UV400 protection, blocking 99–100% of UVA and UVB rays.' },
      { heading: 'Polarized vs UV Protection', body: 'Polarized reduces glare. This is separate from UV protection — look for both.' },
      { heading: 'Children Need Protection Too', body: 'Children\'s eyes are more susceptible to UV damage. Ensure they wear proper sunglasses.' },
      { heading: 'Year-Round Protection', body: 'UV rays are present even on cloudy days. Wear sunglasses regularly for long-term eye health.' },
    ],
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'When to Seek Professional Eye Care',
    id: 'professional-care',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tips: [
      { heading: 'Vision Changes', body: 'If you notice blurriness, difficulty focusing, or frequent headaches, visit an eye care professional.' },
      { heading: 'Eye Discomfort', body: 'Persistent redness, dryness, or pain should be examined by a professional promptly.' },
      { heading: 'Regular Check-ups', body: 'Even without symptoms, routine eye examinations help maintain long-term eye health.' },
      { heading: 'Age-Related Care', body: 'After age 40, regular eye exams become increasingly important for detecting age-related changes.' },
    ],
  },
];

export function EyeCare() {
  useScrollReveal();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Eye Care & Eyewear Guidance — Vision Optics, Velachery',
    description: 'Comprehensive eye care and eyewear guidance covering screen habits, spectacle care, lens selection, contact lens hygiene, and UV protection.',
    author: { '@type': 'Organization', name: 'Vision Optics' },
    publisher: { '@type': 'Organization', name: 'Vision Optics' },
  };

  return (
    <>
      <Seo
        title="Eye Care & Eyewear Guidance — Vision Optics Velachery"
        description="Helpful eye care tips and eyewear guidance from Vision Optics, Velachery. Screen habits, spectacle care, lens selection, contact lens hygiene, and UV protection advice."
        path="/eye-care"
        type="article"
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={articleSchema} />
      <Breadcrumbs crumbs={[{ label: 'Eye Care & Guidance' }]} />

      {/* Hero */}
      <section className="bg-violet-900 py-14 sm:py-20">
        <div className="container-x text-center">
          <h1 className="reveal font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Eye Care &amp; Eyewear Guidance</h1>
          <p className="reveal mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-violet-200 sm:text-base lg:text-lg">
            Helpful information on protecting your eyes, choosing the right eyewear, and maintaining your spectacles and contact lenses.
          </p>
          <p className="reveal mt-3 text-xs text-violet-400">
            Educational guidance only. Not a substitute for professional medical advice.
          </p>
        </div>
      </section>

      {/* Jump links */}
      <section className="bg-white border-b border-violet-100 py-4 sticky top-16 z-30">
        <div className="container-x">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="flex-shrink-0 rounded-lg border border-violet-100 bg-lavender-50 px-3 py-1.5 text-xs font-semibold text-charcoal-700 hover:border-violet-300 hover:text-violet-700 transition-colors">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content — alternating image/text layout */}
      <div>
        {SECTIONS.map((section, idx) => (
          <section key={section.id} id={section.id} className={`py-16 sm:py-20 lg:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-lavender-50'}`}>
            <div className="container-x">
              <div className={`grid items-center gap-10 lg:grid-cols-2 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`reveal ${idx % 2 === 1 ? 'lg:order-2' : ''} relative overflow-hidden rounded-2xl shadow-violet-md`}>
                  <img
                    src={section.image}
                    alt={section.title}
                    width={600} height={400}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy" decoding="async"
                  />
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-violet-700 backdrop-blur-sm">
                    {section.icon}
                  </div>
                </div>
                {/* Tips */}
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="reveal font-display text-xl font-bold text-charcoal-900 sm:text-2xl lg:text-3xl">{section.title}</h2>
                  <div className="mt-6 space-y-4">
                    {section.tips.map((tip) => (
                      <div key={tip.heading} className="reveal group eye-care-tip rounded-xl border border-violet-100 bg-white p-4 transition-all duration-300 hover:border-violet-300 hover:shadow-violet-sm">
                        <h3 className="text-sm font-semibold text-violet-800 transition-colors group-hover:text-violet-900">{tip.heading}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-charcoal-600">{tip.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTABanner title="Questions About Your Eye Health?" text="Visit Vision Optics on Nethaji Road, Velachery for professional computerised eye testing and personalized eyewear guidance." />
    </>
  );
}
