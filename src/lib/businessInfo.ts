// ============================================================
//  VISION OPTICS — Business Information
//  Edit this file to update details site-wide.
//  [VERIFY WITH CLIENT] markers = not yet confirmed.
// ============================================================

export const businessInfo = {
  name: 'Vision Optics',
  tagline: 'Computerised Eye Testing & Contact Lens Clinic',
  description:
    'Vision Optics is a trusted optical store at No. 36, Nethaji Road, TNHB Colony, Velachery, Chennai. We offer computerised eye testing, prescription spectacles, eyeglass frames, contact lenses, and sunglasses at affordable prices.',

  address: {
    line1: 'No. 36, Nethaji Road',
    line2: 'TNHB Colony, Velachery',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600042',
    country: 'India',
    landmark: 'Near St. Britto\'s School, Union Bank Back Side',
  },
  fullAddress: 'No. 36, Nethaji Road, TNHB Colony, Velachery, Chennai – 600042',

  phones: [
    { label: 'Landline', number: '044-43560772', link: 'tel:04443560772' },
    { label: 'Mobile', number: '94455 69786', link: 'tel:+919445569786' },
  ],
  // Primary phone for CTAs
  phoneLink: 'tel:+919445569786',
  phonePrimary: '94455 69786',

  whatsapp: '919445569786',
  whatsappLink: 'https://wa.me/919445569786',

  email: 'visionopticsvelachery@gmail.com', // [VERIFY WITH CLIENT]

  hours: [
    { day: 'Monday – Sunday', time: '9:00 AM – 10:00 PM' },
  ],
  hoursNote: 'Sunday Working',

  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Vision+Optics+No+36+Nethaji+Road+TNHB+Colony+Velachery+Chennai+600042',
  googleMapsEmbed: 'https://www.google.com/maps?q=Vision+Optics+36+Nethaji+Road+Velachery+Chennai&output=embed',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Vision+Optics+Velachery+Chennai',

  website: 'https://www.visionopticsvelachery.com',

  stats: {
    reviews: '900+',       // [VERIFY WITH CLIENT]
    rating: '5.0',         // [VERIFY WITH CLIENT]
    experience: '30+',     // [VERIFY WITH CLIENT]
  },

  brands: ['Ray-Ban', 'Arcadio', 'Bausch + Lomb', 'Crizal', 'Varilux', 'Kodak Lens', 'HOYA'],
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Shop', path: '/shop' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Eye Care', path: '/eye-care' },
  { label: 'Brands', path: '/brands' },
  { label: 'Contact', path: '/contact' },
];
