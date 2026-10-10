import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useScrollReveal } from '@/lib/useScrollReveal';

export function Sitemap() {
  useScrollReveal();

  const pages = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services & Vision Solutions', path: '/services' },
    { label: 'Shop Eyewear', path: '/shop' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Eye Care & Guidance', path: '/eye-care' },
    { label: 'Brands', path: '/brands' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms' },
  ];

  return (
    <>
      <Seo title="Sitemap | Vision Optics, Velachery" description="Complete sitemap of Vision Optics website. Find all pages including services, shop, eye care, brands, and contact." path="/sitemap" />
      <Breadcrumbs crumbs={[{ label: 'Sitemap' }]} />
      <section className="bg-white py-12 sm:py-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <h1 className="reveal font-display text-3xl font-bold text-charcoal-900 sm:text-4xl">Sitemap</h1>
            <p className="reveal mt-2 text-sm text-violet-600"><a href="/sitemap.xml" className="hover:underline">View XML Sitemap</a></p>
            <div className="reveal mt-8">
              <h2 className="font-display text-lg font-semibold text-violet-900">Pages</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {pages.map((p) => (
                  <li key={p.path}><Link to={p.path} className="text-sm text-violet-600 hover:text-violet-800 hover:underline">{p.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
