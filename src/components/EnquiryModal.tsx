import { useEffect, useRef, useState } from 'react';
import { CalendarCheck, X, MessageCircle } from 'lucide-react';
import { businessInfo } from '@/lib/businessInfo';

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
}

export function EnquiryModal({ open, onClose }: EnquiryModalProps) {
  const [form, setForm] = useState({ name: '', phone: '', location: '', concern: '', date: '', time: '' });
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    const focusFrame = requestAnimationFrame(() => closeButtonRef.current?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button, input, select, textarea, a[href]')).filter((element) => !element.hasAttribute('disabled'));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', onKey);
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hello Vision Optics,\n\nI would like to enquire about an eye testing appointment.\n\nCustomer Name: ${form.name}\nContact Number: ${form.phone}\nLocation: ${form.location}\n\nConcern:\n${form.concern || 'Not specified'}\n\nPreferred Date: ${form.date || 'Not specified'}\nPreferred Time: ${form.time || 'Not specified'}\n\nPlease confirm the availability.`;
    window.open(`${businessInfo.whatsappLink}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    onClose();
    setForm({ name: '', phone: '', location: '', concern: '', date: '', time: '' });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal-900/60 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="enquiry-title" className="w-full max-w-lg animate-modal-in rounded-3xl bg-white shadow-violet-lg">
        <div className="flex items-start justify-between border-b border-violet-100 p-5 sm:p-6">
          <div>
            <div className="flex items-center gap-2 text-violet-700"><CalendarCheck className="h-5 w-5" /><span className="section-label">Eye Testing</span></div>
            <h2 id="enquiry-title" className="mt-2 font-display text-xl font-bold text-charcoal-900">Book an appointment enquiry</h2>
            <p className="mt-1 text-sm text-charcoal-600">We will open WhatsApp with your details ready to send.</p>
          </div>
          <button ref={closeButtonRef} onClick={onClose} className="rounded-lg p-2 text-charcoal-500 hover:bg-violet-50 hover:text-violet-700" aria-label="Close enquiry form"><X className="h-5 w-5" /></button>
        </div>
        <form onSubmit={submit} className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
          <label htmlFor="enquiry-name" className="text-sm font-medium text-charcoal-800">Customer Name<input id="enquiry-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="form-input mt-1" placeholder="Your name" /></label>
          <label htmlFor="enquiry-phone" className="text-sm font-medium text-charcoal-800">Contact Number<input id="enquiry-phone" required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="form-input mt-1" placeholder="Your phone number" /></label>
          <label htmlFor="enquiry-location" className="text-sm font-medium text-charcoal-800">Location<input id="enquiry-location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="form-input mt-1" placeholder="Area / locality" /></label>
          <label htmlFor="enquiry-date" className="text-sm font-medium text-charcoal-800">Preferred Date<input id="enquiry-date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="form-input mt-1" /></label>
          <label htmlFor="enquiry-time" className="text-sm font-medium text-charcoal-800">Preferred Time<select id="enquiry-time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="form-input mt-1"><option value="">Choose a time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
          <label htmlFor="enquiry-concern" className="text-sm font-medium text-charcoal-800 sm:col-span-2">Problem / Concern<textarea id="enquiry-concern" value={form.concern} onChange={(e) => setForm({ ...form, concern: e.target.value })} className="form-input mt-1 min-h-20 resize-y" placeholder="Tell us briefly what you need help with" /></label>
          <button type="submit" className="btn-whatsapp sm:col-span-2"><MessageCircle className="h-4 w-4" />Send Enquiry on WhatsApp</button>
        </form>
      </div>
    </div>
  );
}
