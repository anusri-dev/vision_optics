import { businessInfo } from '@/lib/businessInfo';

export type WhatsAppIntent = 'general' | 'eyeTest' | 'contactLenses' | 'sunglasses' | 'spectacles';

const messages: Record<WhatsAppIntent, string> = {
  general: 'Hello Vision Optics,\n\nI would like to enquire about your eyewear and eye care services.\n\nPlease share more details.',
  eyeTest: 'Hello Vision Optics,\n\nI would like to enquire about an eye testing appointment.\n\nPlease share the available timings.',
  contactLenses: 'Hello Vision Optics,\n\nI would like to enquire about contact lenses.\n\nPlease share the available options and guidance.',
  sunglasses: 'Hello Vision Optics,\n\nI am interested in your sunglasses collection.\n\nPlease share the available options.',
  spectacles: 'Hello Vision Optics,\n\nI would like to enquire about spectacles and frames.\n\nPlease share the available options.',
};

export function whatsappLink(intent: WhatsAppIntent = 'general') {
  return `${businessInfo.whatsappLink}?text=${encodeURIComponent(messages[intent])}`;
}

export function openWhatsApp(intent: WhatsAppIntent = 'general') {
  window.open(whatsappLink(intent), '_blank', 'noopener,noreferrer');
}
