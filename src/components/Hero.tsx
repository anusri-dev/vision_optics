import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, ShoppingBag, CalendarCheck, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { whatsappLink } from '@/lib/whatsapp';
import { businessInfo } from '@/lib/businessInfo';
import { brandAssets } from '@/lib/assets';

const SLIDES = [
  {
    eyebrow: 'Professional Eye Testing',
    heading: 'See Clearly with\nComputerised Eye Testing',
    text: 'Accurate prescriptions, personalized guidance, and professional care at our Velachery store. Open 9AM–10PM, Sunday Working.',
    image: 'https://images.pexels.com/photos/5201875/pexels-photo-5201875.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    imageAlt: 'Professional computerised eye testing at Vision Optics Velachery',
    primary: { label: 'Book Eye Test', to: '/contact', icon: CalendarCheck },
    secondary: { label: 'WhatsApp Us', href: whatsappLink('eyeTest'), icon: MessageCircle, external: true },
  },
  {
    eyebrow: 'Eyewear Collection',
    heading: 'Quality Frames,\nSunglasses & Lenses',
    text: 'Explore premium eyewear from Ray-Ban, Arcadio, Bausch + Lomb and more. Find the perfect pair for your face and lifestyle.',
    image: 'https://images.pexels.com/photos/5752270/pexels-photo-5752270.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    imageAlt: 'Eyewear display at Vision Optics Velachery',
    primary: { label: 'Shop Now', to: '/shop', icon: ShoppingBag },
    secondary: { label: 'View Brands', to: '/brands', icon: Star },
  },
  {
    eyebrow: 'Visit Our Store',
    heading: 'Find Us on\nNethaji Road, Velachery',
    text: 'No. 36, Nethaji Road, TNHB Colony, Velachery, Chennai. Near St. Britto\'s School. Easy to find and visit.',
    image: brandAssets.shop,
    imageAlt: 'Customers at Vision Optics eyewear store Velachery',
    primary: { label: 'Get Directions', href: businessInfo.googleMapsUrl, icon: MapPin, external: true },
    secondary: { label: 'Call Now', href: businessInfo.phoneLink, icon: MessageCircle },
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next, paused]);

  // Touch swipe
  const touchStartX = { current: 0 };
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) { if (diff < 0) next(); else prev(); }
  };

  return (
    <section
      className="relative overflow-hidden bg-violet-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') next();
        if (event.key === 'ArrowLeft') prev();
      }}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Vision Optics highlights"
    >
      {SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          aria-hidden={idx !== current}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.imageAlt}
              width={1200}
              height={675}
              className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${idx === current ? 'scale-110' : 'scale-100'}`}
              fetchPriority={idx === 0 ? 'high' : 'low'}
              loading={idx === 0 ? 'eager' : 'lazy'}
              decoding="async"
              srcSet={idx === 0 ? 'https://images.pexels.com/photos/5201875/pexels-photo-5201875.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&fit=crop 640w, https://images.pexels.com/photos/5201875/pexels-photo-5201875.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop 1200w' : undefined}
              sizes={idx === 0 ? '100vw' : undefined}
            />
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-950/90 via-violet-950/70 to-violet-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-violet-950/80 via-transparent to-violet-950/30" />
        </div>
      ))}

      {/* Content */}
      <div className="container-x relative z-20 flex min-h-[420px] items-center py-16 sm:min-h-[500px] sm:py-20 lg:min-h-[560px] lg:py-28" aria-live="polite">
        <div className="max-w-xl">
          {SLIDES.map((slide, idx) => (
            <div key={idx} className={`${idx === current ? 'block' : 'hidden'}`}>
              {/* Eyebrow */}
              <div className={`hero-anim-1 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-800/40 px-4 py-1.5 text-xs font-medium text-violet-200 backdrop-blur-sm ${idx === current ? 'is-anim' : ''}`}>
                <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                {slide.eyebrow}
              </div>
              {/* Heading */}
              <h1 className={`hero-anim-2 mt-5 whitespace-pre-line font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl ${idx === current ? 'is-anim' : ''}`}>
                {slide.heading}
              </h1>
              {/* Text */}
              <p className={`hero-anim-3 mt-4 max-w-lg text-sm leading-relaxed text-violet-200 sm:text-base lg:text-lg ${idx === current ? 'is-anim' : ''}`}>
                {slide.text}
              </p>
              {/* CTAs */}
              <div className={`hero-anim-4 mt-8 flex flex-wrap items-center gap-3 ${idx === current ? 'is-anim' : ''}`}>
                {slide.primary.to ? (
                  <Link to={slide.primary.to} className="btn-primary shadow-lg shadow-violet-900/40">
                    <slide.primary.icon className="h-4 w-4" />
                    {slide.primary.label}
                  </Link>
                ) : (
                  <a href={slide.primary.href} target={slide.primary.external ? '_blank' : undefined} rel={slide.primary.external ? 'noopener noreferrer' : undefined} className="btn-primary shadow-lg shadow-violet-900/40">
                    <slide.primary.icon className="h-4 w-4" />
                    {slide.primary.label}
                  </a>
                )}
                {slide.secondary.to ? (
                  <Link to={slide.secondary.to} className="btn-ghost-dark">
                    <slide.secondary.icon className="h-4 w-4" />
                    {slide.secondary.label}
                  </Link>
                ) : (
                  <a href={slide.secondary.href} target={slide.secondary.external ? '_blank' : undefined} rel={slide.secondary.external ? 'noopener noreferrer' : undefined} className={slide.secondary.label === 'WhatsApp Us' ? 'btn-whatsapp' : 'btn-ghost-dark'}>
                    <slide.secondary.icon className="h-4 w-4" />
                    {slide.secondary.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-violet-900/50 p-3 text-white backdrop-blur-sm transition-all hover:bg-violet-800/80 hover:scale-110 sm:left-4" aria-label="Previous slide">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-violet-900/50 p-3 text-white backdrop-blur-sm transition-all hover:bg-violet-800/80 hover:scale-110 sm:right-4" aria-label="Next slide">
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="flex h-11 w-11 items-center justify-center"
            aria-label={`Go to slide ${idx + 1}`}
          ><span aria-hidden="true" className={`block h-2 rounded-full transition-all duration-300 ${idx === current ? 'w-8 bg-violet-400' : 'w-2 bg-violet-400/40 hover:bg-violet-400/70'}`} /></button>
        ))}
      </div>
    </section>
  );
}
