import { Link } from 'react-router-dom';
import { Home, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { businessInfo } from '@/lib/businessInfo';

export function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | Vision Optics, Velachery" description="The page you are looking for could not be found. Visit Vision Optics in Velachery for computerised eye testing and quality eyewear." path="/404" />
      <section className="flex min-h-[70vh] items-center justify-center bg-violet-950 py-20">
        <div className="container-x text-center">
          <p className="font-display text-7xl font-bold text-violet-800 sm:text-9xl">404</p>
          <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">Page Not Found</h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-violet-300">The page you are looking for does not exist or has been moved. Let us help you find what you need.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="btn-primary"><Home className="h-4 w-4" />Back to Home</Link>
            <a href={businessInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark"><MapPin className="h-4 w-4" />Directions</a>
            <a href={businessInfo.phoneLink} className="btn-ghost-dark"><Phone className="h-4 w-4" />Call</a>
            <a href={businessInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><MessageCircle className="h-4 w-4" />WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
