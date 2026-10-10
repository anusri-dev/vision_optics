import { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { businessInfo } from '@/lib/businessInfo';

export function LazyMap() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-violet-100">
      {showMap ? (
        <iframe
          title="Map showing Vision Optics location in Velachery, Chennai"
          src={businessInfo.googleMapsEmbed}
          width="100%" height="360"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="flex flex-col items-center justify-center bg-lavender-50 px-6 py-14 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-600">
            <MapPin className="h-7 w-7" />
          </div>
          <p className="mt-4 text-sm font-semibold text-charcoal-900">{businessInfo.name}</p>
          <p className="mt-1 max-w-xs text-sm text-charcoal-600">{businessInfo.fullAddress}</p>
          <p className="mt-1 text-xs text-violet-500">{businessInfo.address.landmark}</p>
          <button onClick={() => setShowMap(true)} className="btn-primary mt-5">Show Map</button>
          <a href={businessInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700">
            <Navigation className="h-4 w-4" />Get Directions
          </a>
        </div>
      )}
    </div>
  );
}
