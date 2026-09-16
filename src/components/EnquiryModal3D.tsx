import { useState, FormEvent, useEffect } from 'react';
import { X, Send, Phone, User, Package, CheckCircle, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STORE_INFO } from '../data/storeData';
import { EnquiryFormData } from '../types';

interface EnquiryModal3DProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export function EnquiryModal3D({ isOpen, onClose, defaultProduct = '' }: EnquiryModal3DProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phoneNumber: '',
    productOfInterest: defaultProduct || 'AA Double A4 Paper (80 GSM)',
    quantityOrNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultProduct) {
      setFormData((prev) => ({ ...prev, productOfInterest: defaultProduct }));
    }
  }, [defaultProduct]);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#2563eb', '#ea580c', '#10b981'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 400);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Mani Stationery (Ashok Kumar B), I would like to enquire about:
• Name: ${formData.name || 'Customer'}
• Phone: ${formData.phoneNumber || 'N/A'}
• Product: ${formData.productOfInterest}
• Details: ${formData.quantityOrNotes || 'Looking for pricing and availability.'}`;

    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-2xl overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-amber-400 to-[#e05a2b]" />
        
        {/* Close button */}
        <button
          id="close-enquiry-modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close Enquiry Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Direct Store Desk</span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Product Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Connect directly with <strong className="text-slate-900">Ashok Kumar B</strong> at Mani Stationery, Andippatti.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Name */}
              <div>
                <label htmlFor="enquiry-name" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Name <span className="text-indigo-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="enquiry-name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh / School / Office Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-sm"
                  />
                </div>
              </div>

              {/* Field 2: Phone Number */}
              <div>
                <label htmlFor="enquiry-phone" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-indigo-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number (e.g. 7538870090)"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-sm"
                  />
                </div>
              </div>

              {/* Field 3: Product of Interest */}
              <div>
                <label htmlFor="enquiry-product" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                  Product or Service <span className="text-indigo-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Package className="w-4 h-4" />
                  </div>
                  <select
                    id="enquiry-product"
                    required
                    value={formData.productOfInterest}
                    onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 bg-white focus:outline-none focus:border-blue-600 text-sm appearance-none cursor-pointer"
                  >
                    <option value="AA Double A4 Paper (80 GSM Wholesale Box)">AA Double A4 Paper (80 GSM Wholesale Box)</option>
                    <option value="AA Double A4 Paper (70 GSM Copier)">AA Double A4 Paper (70 GSM Copier)</option>
                    <option value="Notebooks Collection (Class Notes, Plans, Registers)">Notebooks Collection (Class Notes, Plans, Registers)</option>
                    <option value="School Supplies (Pens, Geometry Boxes, Exam Kits)">School Supplies (Pens, Geometry Boxes, Exam Kits)</option>
                    <option value="Little Finds (Creative Extras, Art Supplies, Novelties)">Little Finds (Creative Extras, Art Supplies, Novelties)</option>
                    <option value="Xerox & Fast Photocopying / Spiral Binding">Xerox & Fast Photocopying / Spiral Binding</option>
                    <option value="Wholesale Bulk Doorstep Delivery (Theni District)">Wholesale Bulk Doorstep Delivery (Theni District)</option>
                  </select>
                </div>
              </div>

              {/* Optional Field: Estimated Quantity or Specific Requirement */}
              <div>
                <label htmlFor="enquiry-notes" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                  Estimated Quantity / Notes <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="enquiry-notes"
                  rows={2}
                  placeholder="e.g. Need 15 boxes delivered to Periyakulam or specific pen brand"
                  value={formData.quantityOrNotes}
                  onChange={(e) => setFormData({ ...formData, quantityOrNotes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-sm resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  id="submit-enquiry-form-btn"
                  type="submit"
                  disabled={loading}
                  className="btn-primary-blue w-full py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="btn-primary-whatsapp w-full py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp (Instant Reply)</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success confirmation screen */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="font-heading font-black text-2xl text-slate-900">
              Enquiry Received!
            </h3>
            <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>! We have registered your enquiry for <strong className="text-blue-700">{formData.productOfInterest}</strong>.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 text-left space-y-1">
              <p>&bull; <strong>Contact Phone:</strong> {formData.phoneNumber}</p>
              <p>&bull; <strong>Store Owner:</strong> Ashok Kumar B (075388 70090)</p>
              <p>&bull; <strong>Store Location:</strong> Bus stop, AA Complex Aalamara, Vaigai Road, Jakkampatti, Andippatti</p>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppDirect}
                className="btn-primary-whatsapp w-full py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Follow-up</span>
              </button>
              <button
                onClick={onClose}
                className="py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
