import { Star, ExternalLink } from 'lucide-react';
import { Seo, JsonLd, localBusinessSchema } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { businessInfo } from '@/lib/businessInfo';

// ============================================================
//  TESTIMONIALS CONTENT
//  Replace these placeholder testimonials with genuine customer
//  reviews from the business's Google profile before launch.
//  [VERIFY WITH CLIENT]
// ============================================================
const TESTIMONIALS = [
  { name: 'Rajesh Kumar', rating: 5, text: 'Excellent service and professional eye testing. The team helped me choose the perfect frames. Highly recommended for anyone in Velachery.', service: 'Eye Testing & Spectacles', date: 'Dec 2024' },
  { name: 'Priya Sundaram', rating: 5, text: 'Got my first contact lenses here. The process was explained patiently and the experience was very professional. Great shop on Nethaji Road.', service: 'Contact Lenses', date: 'Nov 2024' },
  { name: 'Mohammed Arif', rating: 5, text: 'Best optical shop in Velachery. Been coming here for years. Quality frames and personalized service. They never push expensive products you don\'t need.', service: 'Eyeglass Frames', date: 'Nov 2024' },
  { name: 'Lakshmi Narayanan', rating: 5, text: 'Very satisfied with my sunglasses. Good collection and the staff helped me pick one with proper UV protection. Competitive pricing.', service: 'Sunglasses', date: 'Oct 2024' },
  { name: 'Deepak Venkat', rating: 5, text: 'The eye testing was thorough and they explained my prescription clearly. Got my spectacles the same day. Excellent experience at Vision Optics.', service: 'Eye Testing & Spectacles', date: 'Oct 2024' },
  { name: 'Saravanan Krishnan', rating: 5, text: 'The experience and expertise really shows. The team guided me through frame selection based on my face shape. Very trustworthy optical store in Velachery.', service: 'Eyewear Consultation', date: 'Sep 2024' },
  { name: 'Anitha Raj', rating: 5, text: 'Took my mother for an eye test. The staff was patient and kind. The prescription was accurate and the spectacles are perfect. Thank you Vision Optics.', service: 'Eye Testing', date: 'Sep 2024' },
  { name: 'Karthik Subramanian', rating: 5, text: 'Great place for quality eyewear at affordable prices. The frame collection is excellent and they have something for every budget. Highly recommend.', service: 'Eyeglass Frames', date: 'Aug 2024' },
  { name: 'Meena Durairaj', rating: 5, text: 'Very professional and honest. They gave me a straightforward assessment and genuine recommendation. That kind of honesty is rare. Trusted optician in Velachery.', service: 'Eye Testing', date: 'Aug 2024' },
  { name: 'Vijay Anand', rating: 5, text: 'Bought prescription sunglasses here. The quality is excellent and the pricing was fair. The location on Nethaji Road is very convenient.', service: 'Sunglasses', date: 'Jul 2024' },
  { name: 'Geetha Srinivasan', rating: 5, text: 'The eye test was very comprehensive. The staff took time to answer all my questions about different lens types. Got progressive lenses and they work perfectly.', service: 'Eye Testing & Spectacles', date: 'Jul 2024' },
  { name: 'Suresh Babu', rating: 5, text: 'Excellent customer service and quality products. Been a customer for over 10 years. Vision Optics is the most trusted optical store in Velachery, no doubt.', service: 'Spectacles', date: 'Jun 2024' },
  { name: 'Revathi Raman', rating: 5, text: 'Very happy with my contact lenses. They gave proper guidance on how to use and maintain them. The whole process was smooth and professional.', service: 'Contact Lenses', date: 'Jun 2024' },
  { name: 'Arumugam Pillai', rating: 5, text: 'Affordable, professional, and trustworthy. I compared prices with other shops and Vision Optics was the best value. The frame quality is top-notch.', service: 'Eyeglass Frames', date: 'May 2024' },
  { name: 'Kavitha Murali', rating: 5, text: 'Wonderful experience. They understood my needs and recommended the perfect frames for my face. The professional eye testing was also very thorough.', service: 'Eyewear Consultation', date: 'May 2024' },
  { name: 'Prakash Nair', rating: 5, text: 'Quick, efficient, and professional. Got my eye test done and received my spectacles quickly. The staff is knowledgeable and friendly. Best optician near me.', service: 'Eye Testing & Spectacles', date: 'Apr 2024' },
  { name: 'Shanthi Krishnamurthy', rating: 5, text: 'Took my daughter for her first eye test. They made her feel comfortable and the whole process was stress-free. The frames we got are durable and stylish.', service: 'Eye Testing & Spectacles', date: 'Apr 2024' },
  { name: 'Ramesh Iyer', rating: 5, text: 'Quality eyewear at honest prices. No pushy sales, just genuine recommendations. This is why Vision Optics has been my go-to optical shop in Velachery for years.', service: 'Spectacles', date: 'Mar 2024' },
];

export function Testimonials() {
  useScrollReveal();

  return (
    <>
      <Seo
        title="Customer Testimonials — Vision Optics, Velachery | What Our Customers Say"
        description="Read customer testimonials for Vision Optics in Velachery, Chennai. Our customers share their experiences with eye testing, spectacles, contact lenses, and sunglasses."
        path="/testimonials"
      />
      <JsonLd data={localBusinessSchema()} />
      <Breadcrumbs crumbs={[{ label: 'Testimonials' }]} />

      <section className="bg-violet-900 py-14 sm:py-20">
        <div className="container-x text-center">
          <h1 className="reveal font-display text-3xl font-bold text-white sm:text-4xl">What Our Customers Say</h1>
          <p className="reveal mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-violet-200">
            We are proud to have earned the trust of hundreds of customers in Velachery. Here is what they say about Vision Optics.
          </p>
          <div className="reveal mt-6 inline-flex items-center gap-3 rounded-xl border border-violet-700 bg-violet-800/50 px-6 py-3">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((i) => <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />)}
            </div>
            <span className="text-lg font-bold text-white">{businessInfo.stats.rating}</span>
            <span className="text-sm text-violet-300">({businessInfo.stats.reviews} reviews)</span>
          </div>
        </div>
      </section>

      <section className="bg-lavender-50 py-14 sm:py-20">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((r) => (
              <div key={r.name} className="card reveal flex flex-col p-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-700">&ldquo;{r.text}&rdquo;</p>
                <div className="mt-4 flex items-center justify-between border-t border-violet-50 pt-4">
                  <div>
                    <p className="text-sm font-semibold text-charcoal-900">{r.name}</p>
                    <p className="text-xs text-violet-600">{r.service}</p>
                  </div>
                  {r.date && <p className="text-xs text-charcoal-400">{r.date}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="reveal mt-12 text-center">
            <a
              href={businessInfo.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View Google Reviews <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <CTABanner title="Join Our Happy Customers" text="Visit Vision Optics on Nethaji Road, Velachery for professional eye testing and quality eyewear." />
    </>
  );
}
