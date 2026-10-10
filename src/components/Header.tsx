import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, MapPin, ShoppingCart, Heart } from 'lucide-react';
import { navLinks, businessInfo } from '@/lib/businessInfo';
import { useCart } from '@/lib/useCart';
import { useWishlist } from '@/lib/useWishlist';
import { BrandLogo } from '@/components/BrandLogo';
import { whatsappLink } from '@/lib/whatsapp';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { items: cartItems } = useCart();
  const { items: wishItems } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      {/* Mobile action bar — fixed bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-violet-100 bg-white/95 backdrop-blur-sm md:hidden">
        <a href={businessInfo.phoneLink} className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs font-medium text-charcoal-700" aria-label="Call Vision Optics">
          <Phone className="h-5 w-5 text-violet-600" />
          Call
        </a>
        <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer" className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs font-medium text-[#1da851]" aria-label="WhatsApp Vision Optics">
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <a href={businessInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs font-medium text-violet-600" aria-label="Get directions">
          <MapPin className="h-5 w-5" />
          Directions
        </a>
        <Link to="/shop" className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs font-medium text-charcoal-700 relative" aria-label="Shopping cart">
          <ShoppingCart className="h-5 w-5 text-violet-600" />
          {cartCount > 0 && (
            <span className="absolute top-1.5 right-5 flex h-4 w-4 items-center justify-center rounded-full bg-violet-600 text-[9px] font-bold text-white">{cartCount}</span>
          )}
          Cart
        </Link>
      </div>

      <header className={`sticky top-0 z-40 border-b transition-all duration-300 ${scrolled ? 'border-violet-100 bg-white/95 shadow-violet-sm backdrop-blur-md' : 'border-transparent bg-white'}`}>
        <div className="container-x flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Vision Optics Home">
            <BrandLogo size="sm" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
              return (
                <Link key={link.path} to={link.path} className={`nav-link group relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${active ? 'text-violet-800' : 'text-charcoal-700 hover:text-violet-800'}`}>
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-violet-600 transition-all duration-300 ${active ? 'w-6' : 'w-0 group-hover:w-6'}`} />
                </Link>
              );
            })}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link to="/shop" className="relative rounded-lg p-3 text-charcoal-600 hover:bg-violet-50 hover:text-violet-700" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-violet-600 text-[9px] font-bold text-white">{cartCount}</span>}
            </Link>
            <Link to="/shop" className="relative rounded-lg p-3 text-charcoal-600 hover:bg-violet-50 hover:text-violet-700" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
              {wishItems.length > 0 && <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-violet-600 text-[9px] font-bold text-white">{wishItems.length}</span>}
            </Link>
            <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-2 text-xs">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <Link to="/contact" className="btn-primary py-2 text-xs">
              Book Eye Test
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(!open)} className="rounded-md p-3 text-charcoal-700 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <nav className="border-t border-violet-100 bg-white lg:hidden animate-drawer-in" aria-label="Mobile navigation">
            <div className="container-x flex flex-col py-4">
              {navLinks.map((link) => {
                const active = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
                return (
                  <Link key={link.path} to={link.path} className={`rounded-md px-3 py-3 text-sm font-medium ${active ? 'bg-violet-50 text-violet-800' : 'text-charcoal-700'}`}>
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-3 flex gap-2">
                <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex-1 py-2 text-xs">
                  <MessageCircle className="h-4 w-4" />WhatsApp
                </a>
                <Link to="/contact" className="btn-primary flex-1 py-2 text-xs">
                  Book Eye Test
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
