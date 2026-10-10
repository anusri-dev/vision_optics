import { useEffect } from 'react';
import { businessInfo } from '@/lib/businessInfo';
import { brandAssets } from '@/lib/assets';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
}

export function Seo({ title, description, path, type = 'website' }: SeoProps) {
  const url = `${businessInfo.website}${path}`;

  useEffect(() => {
    document.title = title;

    const set = (sel: string, attr: 'name' | 'property', key: string, val: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute('content', val);
    };

    set('', 'name', 'description', description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = url;

    set('', 'property', 'og:type', type);
    set('', 'property', 'og:title', title);
    set('', 'property', 'og:description', description);
    set('', 'property', 'og:url', url);
    set('', 'property', 'og:site_name', businessInfo.name);
    set('', 'property', 'og:locale', 'en_IN');
    set('', 'property', 'og:image', `${businessInfo.website}${brandAssets.logo}`);
    set('', 'property', 'og:image:alt', `${businessInfo.name} optical store logo`);
    set('', 'name', 'twitter:card', 'summary_large_image');
    set('', 'name', 'twitter:title', title);
    set('', 'name', 'twitter:description', description);
    set('', 'name', 'twitter:image', `${businessInfo.website}${brandAssets.logo}`);
    set('', 'name', 'twitter:image:alt', `${businessInfo.name} optical store logo`);
    set('', 'name', 'robots', 'index, follow, max-image-preview:large');
  }, [title, description, url, type]);

  return null;
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const serialized = JSON.stringify(data);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = serialized;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [serialized]);
  return null;
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OpticalStore',
    name: businessInfo.name,
    description: businessInfo.description,
    url: businessInfo.website,
    telephone: businessInfo.phonePrimary,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.line1,
      addressLocality: 'Velachery',
      addressRegion: 'Tamil Nadu',
      postalCode: businessInfo.address.pincode,
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '09:00', closes: '22:00' },
    ],
    priceRange: '₹₹',
    areaServed: 'Velachery, Chennai',
  };
}
