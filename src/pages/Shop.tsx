import { useEffect, useRef, useState, useMemo } from 'react';
import {
  Heart, ShoppingCart, Eye, X, MessageCircle,
  ShoppingBag, Filter,
} from 'lucide-react';
import { Seo, JsonLd, localBusinessSchema } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { businessInfo } from '@/lib/businessInfo';
import { products, type Product, type Category } from '@/lib/products';
import { useCart } from '@/lib/useCart';
import { useWishlist } from '@/lib/useWishlist';
import { whatsappLink } from '@/lib/whatsapp';

const CATEGORIES: Array<'All' | Category> = ['All', 'Eyeglasses', 'Sunglasses', 'Contact Lenses'];

function buildWhatsAppMsg(product: Product) {
  const msg = `Hello Vision Optics,

I would like to enquire about:

Product: ${product.name}
Brand: ${product.brand}
Category: ${product.category}
Code: ${product.code}
Price: ₹${product.price.toLocaleString('en-IN')}

Please let me know availability and how to order.`;
  return `${businessInfo.whatsappLink}?text=${encodeURIComponent(msg)}`;
}

// ── Quick View Modal ─────────────────────────────────────────
function QuickView({ product, onClose }: { product: Product; onClose: () => void }) {
  const { add } = useCart();
  const { toggle, has } = useWishlist();
  const liked = has(product.id);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view: ${product.name}`}
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-violet-lg">
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-white/80 p-2 text-charcoal-700 backdrop-blur-sm hover:bg-violet-50 hover:text-violet-700"
          aria-label="Close quick view"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="grid sm:grid-cols-2">
          <div className="bg-lavender-50">
            <img
              src={product.image}
              alt={product.imageAlt}
              width={600}
              height={400}
              className="aspect-[3/2] w-full object-cover sm:h-full sm:aspect-auto"
            />
          </div>
          <div className="flex flex-col p-6">
            <span className="section-label">{product.category}</span>
            <p className="mt-1 text-sm font-semibold text-violet-600">{product.brand}</p>
            <h2 className="mt-1 font-display text-xl font-bold text-charcoal-900">{product.name}</h2>
            <p className="mt-1 text-xs text-charcoal-600">Code: {product.code}</p>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-700">{product.description}</p>
            <p className="mt-4 font-display text-2xl font-bold text-violet-800">₹{product.price.toLocaleString('en-IN')}</p>
            <div className="mt-5 flex gap-2">
              <button
                onClick={() => { add(product); }}
                className="btn-primary flex-1 py-2.5 text-xs"
              >
                <ShoppingCart className="h-4 w-4" />Add to Cart
              </button>
              <button
                onClick={() => toggle(product)}
                className={`rounded-lg border px-3 py-2.5 transition-colors ${liked ? 'border-violet-400 bg-violet-50 text-violet-700' : 'border-violet-200 text-charcoal-600 hover:bg-violet-50'}`}
                aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={`h-4 w-4 ${liked ? 'fill-violet-600 text-violet-600' : ''}`} />
              </button>
            </div>
            <a
              href={buildWhatsAppMsg(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-2 py-2.5 text-xs"
            >
              <MessageCircle className="h-4 w-4" />Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Product Card ─────────────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const { toggle, has } = useWishlist();
  const [qv, setQv] = useState(false);
  const liked = has(product.id);

  return (
    <>
      {qv && <QuickView product={product} onClose={() => setQv(false)} />}
      <div className="product-card group flex flex-col overflow-hidden">
        {/* Image */}
        <div className="relative overflow-hidden bg-lavender-50">
          <img
            src={product.image}
            alt={product.imageAlt}
            width={600}
            height={400}
            className="product-card-img aspect-[3/2] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* Wishlist */}
          <button
            onClick={() => toggle(product)}
            className={`absolute top-3 right-3 rounded-full p-2 shadow-sm transition-all ${liked ? 'bg-violet-600 text-white' : 'bg-white/90 text-charcoal-500 hover:bg-violet-50 hover:text-violet-600'}`}
            aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={`h-4 w-4 ${liked ? 'fill-white' : ''}`} />
          </button>
          {/* Quick View overlay */}
          <button
            onClick={() => setQv(true)}
            className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-violet-900/80 py-2.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 backdrop-blur-sm"
          >
            <Eye className="h-4 w-4" />Quick View
          </button>
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-semibold text-violet-600">{product.brand}</p>
              <h3 className="mt-0.5 text-sm font-semibold text-charcoal-900">{product.name}</h3>
              <p className="mt-0.5 text-xs text-charcoal-600">{product.category} · {product.code}</p>
            </div>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-charcoal-600 line-clamp-2">{product.description}</p>
          <p className="mt-3 font-display text-lg font-bold text-violet-800">₹{product.price.toLocaleString('en-IN')}</p>

          <div className="mt-3 flex gap-2">
            <button
              onClick={() => add(product)}
              className="btn-primary flex-1 py-2 text-xs"
            >
              <ShoppingCart className="h-3.5 w-3.5" />Add to Cart
            </button>
            <a
              href={buildWhatsAppMsg(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex-1 py-2 text-xs"
            >
              <MessageCircle className="h-3.5 w-3.5" />Order Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Cart Drawer ──────────────────────────────────────────────
function CartDrawer({ onClose }: { onClose: () => void }) {
  const { items, remove, increment, decrement, clear, total } = useCart();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const whatsAppCart = () => {
    if (items.length === 0) return;
    const lines = items.map((i) => `- ${i.product.name} (${i.product.code}) x${i.qty} = ₹${(i.product.price * i.qty).toLocaleString('en-IN')}`).join('\n');
    const msg = `Hello Vision Optics,\n\nI would like to enquire about the following items:\n\n${lines}\n\nTotal: ₹${total.toLocaleString('en-IN')}\n\nPlease advise on availability.`;
    window.open(`${businessInfo.whatsappLink}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="absolute inset-0 bg-charcoal-900/40" aria-hidden="true" />
      <div role="dialog" aria-modal="true" aria-labelledby="cart-title" className="relative z-10 flex h-full w-full max-w-sm flex-col bg-white shadow-violet-lg">
        <div className="flex items-center justify-between border-b border-violet-100 p-5">
          <h2 id="cart-title" className="font-display text-lg font-bold text-charcoal-900">Your Cart</h2>
          <button ref={closeButtonRef} onClick={onClose} className="rounded-lg p-2 text-charcoal-600 hover:bg-violet-50" aria-label="Close cart"><X className="h-5 w-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center text-charcoal-500">
              <ShoppingBag className="h-12 w-12 text-violet-200" />
              <p className="mt-3 text-sm">Your cart is empty.</p>
            </div>
          ) : items.map((item) => (
            <div key={item.product.id} className="flex gap-3 rounded-xl border border-violet-100 p-3">
              <img src={item.product.image} alt={item.product.imageAlt} width={64} height={44} className="h-11 w-16 rounded-lg object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-charcoal-900 truncate">{item.product.name}</p>
                <p className="text-xs text-violet-600">{item.product.brand}</p>
                <p className="text-xs font-bold text-violet-800">₹{(item.product.price * item.qty).toLocaleString('en-IN')}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <button onClick={() => decrement(item.product.id)} aria-label={`Decrease quantity of ${item.product.name}`} className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-200 text-xs text-charcoal-700 hover:bg-violet-50">−</button>
                  <span className="text-xs font-semibold" aria-label={`Quantity ${item.qty}`}>{item.qty}</span>
                  <button onClick={() => increment(item.product.id)} aria-label={`Increase quantity of ${item.product.name}`} className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-200 text-xs text-charcoal-700 hover:bg-violet-50">+</button>
                  <button onClick={() => remove(item.product.id)} aria-label={`Remove ${item.product.name} from cart`} className="ml-auto text-xs text-charcoal-400 hover:text-red-500">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div className="border-t border-violet-100 p-5 space-y-3">
            <div className="flex justify-between text-sm font-semibold">
              <span className="text-charcoal-700">Total</span>
              <span className="text-violet-800">₹{total.toLocaleString('en-IN')}</span>
            </div>
            <button onClick={whatsAppCart} className="btn-whatsapp w-full">
              <MessageCircle className="h-4 w-4" />Order via WhatsApp
            </button>
            <button onClick={clear} className="w-full rounded-lg border border-red-200 py-2 text-xs font-semibold text-red-500 hover:bg-red-50">Clear Cart</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Shop Page ────────────────────────────────────────────────
export function Shop() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<'All' | Category>('All');
  const [cartOpen, setCartOpen] = useState(false);
  const { items: cartItems, total } = useCart();

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  const filtered = useMemo(() =>
    activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <Seo
        title="Shop Eyewear — Vision Optics Velachery | Spectacles, Sunglasses, Contact Lenses"
        description="Shop quality eyewear at Vision Optics, Velachery. Browse Ray-Ban sunglasses, Arcadio frames, Bausch + Lomb contact lenses and more. Order via WhatsApp or visit our Nethaji Road store."
        path="/shop"
      />
      <JsonLd data={localBusinessSchema()} />

      <Breadcrumbs crumbs={[{ label: 'Shop' }]} />

      {cartOpen && <CartDrawer onClose={() => setCartOpen(false)} />}

      {/* Page header */}
      <section className="bg-violet-900 py-12 sm:py-14">
        <div className="container-x flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">Shop Eyewear</h1>
            <p className="mt-2 text-sm text-violet-300">Quality eyewear from trusted brands — available at our Velachery store.</p>
          </div>
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            Cart
            {cartCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-400 text-xs font-bold">{cartCount}</span>
            )}
          </button>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white border-b border-violet-100 sticky top-16 z-30">
        <div className="container-x py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <Filter className="h-4 w-4 flex-shrink-0 text-violet-500" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-violet-700 text-white shadow-violet-sm'
                    : 'bg-lavender-50 text-charcoal-700 hover:bg-violet-50 hover:text-violet-700 border border-violet-100'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 opacity-70">
                    ({products.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
            {cartCount > 0 && (
              <button
                onClick={() => setCartOpen(true)}
                className="ml-auto flex-shrink-0 rounded-lg border border-violet-300 bg-violet-50 px-4 py-1.5 text-xs font-semibold text-violet-700 hover:bg-violet-100"
              >
                View Cart ({cartCount}) · ₹{total.toLocaleString('en-IN')}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-lavender-50 py-10 sm:py-14">
        <div className="container-x">
          <p className="text-xs text-charcoal-500 mb-4">{filtered.length} products</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* In-store note */}
      <section className="bg-white py-12">
        <div className="container-x">
          <div className="mx-auto max-w-2xl rounded-2xl border border-violet-100 bg-lavender-50 p-8 text-center">
            <ShoppingBag className="mx-auto h-8 w-8 text-violet-600" />
            <h2 className="mt-3 font-display text-lg font-bold text-charcoal-900">Visit Our Store</h2>
            <p className="mt-2 text-sm text-charcoal-600">
              Product availability and exact pricing are subject to confirmation at our Velachery store. Click <strong>Order via WhatsApp</strong> on any product to enquire, or visit us at No. 36, Nethaji Road, TNHB Colony, Velachery.
            </p>
            <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-4 inline-flex">
              <MessageCircle className="h-4 w-4" />WhatsApp for Enquiry
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
