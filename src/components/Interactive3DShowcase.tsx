import { useState } from 'react';
import { Sparkles, ShoppingBag, BookOpen, Layers, CheckCircle2, MessageSquare, Phone, ArrowRight, Star } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface Interactive3DShowcaseProps {
  onOpenEnquiry: (productName?: string) => void;
}

export function Interactive3DShowcase({ onOpenEnquiry }: Interactive3DShowcaseProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'paper' | 'notebook' | 'exam'>('all');

  const showcaseItems = [
    {
      id: 'paper',
      title: 'Double A® Premium Copier Paper (80 GSM)',
      category: 'Paper Dealership',
      badge: 'Bestseller · Dealer Stock',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
      tagColor: 'text-blue-700',
      borderColor: 'border-blue-300 hover:border-blue-500',
      price: '₹220 / Ream',
      mrp: '₹280 MRP',
      desc: '30 million farmed eucalyptus fibers per gram. Guaranteed zero paper jams, ultra-smooth feeding, and deep black contrast for legal, office & academic documents.',
      features: ['500 Sheets / Ream', '80 GSM Extra Bright', 'Acid-Free Long Life', 'Carton of 5 Reams Available'],
      actionLabel: 'Order Double A Paper',
      accentBg: 'bg-blue-50',
    },
    {
      id: 'notebook',
      title: 'Classmate Long Notebook & Registers',
      category: 'Student Notebooks',
      badge: 'School & College Pick',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      tagColor: 'text-amber-700',
      borderColor: 'border-amber-300 hover:border-amber-500',
      price: 'From ₹20 to ₹70',
      mrp: 'Genuine Classmate',
      desc: 'Elemental chlorine-free paper with smooth ruling for effortless handwriting. Durable covers in King Size, Long Size, and Graph/Record formats.',
      features: ['192 / 240 Pages Ruled', 'Thick Zero-Bleed Paper', 'Brown & Colorful Covers', 'Single Line & Unruled'],
      actionLabel: 'Enquire Notebooks',
      accentBg: 'bg-amber-50',
    },
    {
      id: 'exam',
      title: 'Apsara & Doms Complete Exam Kit',
      category: 'Writing & Geometry',
      badge: 'Exam Season Favorite',
      badgeColor: 'bg-orange-100 text-orange-900 border-orange-300',
      tagColor: 'text-indigo-600',
      borderColor: 'border-orange-300 hover:border-orange-500',
      price: '₹120 / Kit',
      mrp: '₹160 MRP',
      desc: 'Pre-packed student examination bundle: Apsara Platinum Dark Pencils, dust-free erasers, metallic compass box, exam pads, and long-flow ball pens.',
      features: ['Dark & Smooth Lead', 'Self-Centering Compass', 'Transparent Exam Pouch', 'Board-Approved Supplies'],
      actionLabel: 'Order Exam Bundle',
      accentBg: 'bg-orange-50',
    },
    {
      id: 'paper',
      title: 'High-Speed Xerox & Spiral Project Binding',
      category: 'In-Store Service',
      badge: 'Instant & Crisp',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      tagColor: 'text-emerald-700',
      borderColor: 'border-emerald-300 hover:border-emerald-500',
      price: '₹1.50 / Page onwards',
      mrp: 'Instant Service',
      desc: 'Sharp digital photocopy, college thesis printing, Aadhaar/certificate xerox, and heavy-duty spiral or soft binding done right in front of you.',
      features: ['600 DPI Laser Clarity', 'Spiral & Strip Binding', 'Colour & B/W Copies', 'WhatsApp File Printout'],
      actionLabel: 'Enquire Xerox Desk',
      accentBg: 'bg-emerald-50',
    },
  ];

  const filteredItems = selectedFilter === 'all' 
    ? showcaseItems 
    : showcaseItems.filter(item => item.id === selectedFilter);

  return (
    <section id="showcase" className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      
      {/* Background accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>FEATURED HIGHLIGHTS</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Hand-Picked Essentials &amp; <br />
            <span className="text-indigo-600">
              Student Bundles
            </span>
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Reliable daily items, official Double A cartons, and classroom favorites curated by proprietor Ashok Kumar B.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'btn-primary shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Highlights
            </button>
            <button
              onClick={() => setSelectedFilter('paper')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                selectedFilter === 'paper'
                  ? 'btn-primary-blue shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Double A Paper &amp; Xerox
            </button>
            <button
              onClick={() => setSelectedFilter('notebook')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                selectedFilter === 'notebook'
                  ? 'btn-primary-gold shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Notebooks &amp; Registers
            </button>
            <button
              onClick={() => setSelectedFilter('exam')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                selectedFilter === 'exam'
                  ? 'btn-primary shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Exam Kits &amp; Pens
            </button>
          </div>
        </div>

        {/* Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl bg-white border-2 p-6 sm:p-7 shadow-md flex flex-col justify-between transition-all duration-200 ${item.borderColor}`}
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-black uppercase tracking-wider ${item.tagColor}`}>
                    {item.category}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-black border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 leading-snug mb-2">
                  {item.title}
                </h3>

                {/* Price Pill */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-heading font-black text-2xl text-slate-950">
                    {item.price}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold line-through">
                    {item.mrp}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {item.desc}
                </p>

                {/* Feature Tags */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${item.tagColor}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry(item.title)}
                  className={`flex-1 py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all ${
                    item.id === 'paper' 
                      ? 'btn-primary-blue' 
                      : item.id === 'notebook' 
                      ? 'btn-primary-gold' 
                      : 'btn-primary-whatsapp'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{item.actionLabel}</span>
                </button>

                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="px-3.5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs flex items-center gap-1.5 transition-colors"
                  title="Call Shop"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Call</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Local Guarantee Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-black">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <h4 className="font-heading font-black text-slate-900 text-sm">
                Genuine Brand Assurance
              </h4>
              <p className="text-xs text-slate-600">
                100% authentic Classmate, Double A, Doms, Camlin, Apsara, &amp; Parker products.
              </p>
            </div>
          </div>

          <a
            href="#price-list"
            className="btn-primary px-5 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 shrink-0 shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>View All 164 Items</span>
          </a>
        </div>

      </div>
    </section>
  );
}
