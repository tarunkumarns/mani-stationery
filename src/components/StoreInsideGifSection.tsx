import { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Store, 
  Sparkles, 
  Printer, 
  BookOpen, 
  ShieldCheck, 
  Layers, 
  Info,
  Maximize2
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { ManiStationeryLogo } from './ManiStationeryLogo';

interface StoreInsideGifSectionProps {
  onOpenEnquiry: (productName?: string) => void;
}

export function StoreInsideGifSection({ onOpenEnquiry }: StoreInsideGifSectionProps) {
  const [activeHotspot, setActiveHotspot] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'tour' | 'details'>('tour');

  const tourHotspots = [
    {
      id: 1,
      x: '24%',
      y: '65%',
      title: 'Yellow Service Counter & Pen Stand',
      badge: 'Welcoming Counter',
      desc: 'Our signature bright yellow wooden counter where Ashok Kumar B greets customers. Features a full pen testing stand with cello, flair, and gel pens ready for trial.',
      tag: 'Customer Desk',
      color: 'bg-amber-400 text-slate-950',
    },
    {
      id: 2,
      x: '68%',
      y: '45%',
      title: 'Rainbow Cubby Shelves (Notebooks & Registers)',
      badge: 'Classroom Stock',
      desc: 'Vibrant floor-to-ceiling multi-colored cubby shelves stacked with thousands of long size, king size, ruled, unruled, single line, four line, and account registers.',
      tag: 'Over 1,000 Notebooks',
      color: 'bg-emerald-500 text-white',
    },
    {
      id: 3,
      x: '82%',
      y: '68%',
      title: 'Shape Stationery Items (Official Dealer)',
      badge: 'Official Dealer',
      desc: 'Genuine Shape mathematical instrument boxes, 15cm & 30cm precision transparent rulers, compass sets, and durable clear student exam pouches.',
      tag: 'Shape Brand Dealer',
      color: 'bg-orange-500 text-white',
    },
    {
      id: 4,
      x: '50%',
      y: '30%',
      title: 'Double A® Paper Stock (Official Dealer)',
      badge: 'Authorized Stockist',
      desc: 'Authorized dealership reams and bulk cartons of world-class Double A 80 GSM & 75 GSM paper, ready for instant doorstep delivery across Theni district.',
      tag: 'Double A 80 & 75 GSM',
      color: 'bg-blue-600 text-white',
    },
    {
      id: 5,
      x: '38%',
      y: '78%',
      title: 'Xerox & Instant Document Station',
      badge: 'Fast Service',
      desc: 'High-speed photocopiers for crisp black & white and colour copies, student project printouts, fast spiral comb binding, and exam certificate lamination.',
      tag: 'Instant Xerox & Print',
      color: 'bg-indigo-600 text-white',
    },
  ];

  const currentSpot = tourHotspots.find(h => h.id === activeHotspot) || tourHotspots[0];

  return (
    <section id="inside-tour" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      
      {/* Ambient decorative gradients */}
      <div className="absolute top-1/4 right-[-5%] w-[450px] h-[450px] bg-amber-100/50 dark:bg-amber-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[500px] h-[500px] bg-orange-100/50 dark:bg-orange-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800 text-xs font-black uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>AUTHENTIC STORE TOUR &bull; INSIDE THE SHOP</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Take a Look <br />
            <span className="text-indigo-600 dark:text-indigo-400">
              Inside Mani Stationery
            </span>
          </h2>

          <p className="mt-3 text-slate-600 dark:text-amber-100/80 text-sm sm:text-base leading-relaxed">
            Step right into our shop at Vaigai Road, Andippatti. A warm, brightly stocked neighbourhood haven
            where school children, college students, and local businesses find everyday essentials.
          </p>
        </div>

        {/* INTERACTIVE STORE TOUR STAGE */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-[#1e120b] p-3 sm:p-4 border-2 border-amber-900/30 dark:border-amber-900/50 shadow-2xl overflow-hidden">
            
            {/* Top Bar with Official Shop Crest */}
            <div className="flex flex-wrap items-center justify-between px-3 py-2 text-xs text-white/90 mb-2 gap-2 border-b border-amber-950/60 pb-2">
              <div className="flex items-center gap-3">
                <ManiStationeryLogo variant="icon" size="sm" />
                <div>
                  <span className="font-heading font-black text-xs sm:text-sm tracking-wide text-white block leading-none">
                    MANI STATIONERY &bull; SHOP FLOOR
                  </span>
                  <span className="text-[10px] text-amber-300 font-bold">
                    Vaigai Road, Andippatti &bull; Authentic Interior
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full text-[11px] font-bold text-amber-300 border border-amber-500/30">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Interactive Hotspot Map</span>
                </span>
                <span className="bg-emerald-500 text-slate-950 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                  Open Now
                </span>
              </div>
            </div>

            {/* VISUAL TOUR CANVAS: Realistic recreation of the user's inside shop photo */}
            <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[16/8] shadow-inner select-none">
              
              {/* The Actual Inside Shop Photo */}
              <img 
                src="/7a6f2dd4-e896-4ca6-bd7f-9d2241a358bc.jpg"
                alt="Inside Mani Stationery"
                className="absolute inset-0 w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity"
              />

            </div>

            {/* Bottom info strip with address & call */}
            <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-amber-200/80 text-center sm:text-left">
                <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>
                  Bus stop, AA Complex Aalamara, Vaigai Road, Andippatti &bull; Open today until 8:30 PM
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="btn-primary flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-black text-center flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {STORE_INFO.ownerName}</span>
                </a>
                <button
                  onClick={() => onOpenEnquiry("Shop Visit & Directions")}
                  className="btn-primary-whatsapp flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-black text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Ask Directions</span>
                </button>
              </div>
            </div>

          </div>

          {/* Quick Feature Cards below Video / Tour */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950 text-indigo-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-black text-slate-900 dark:text-white text-xs sm:text-sm">
                  Over 164 Stationery Items
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-amber-100/70 mt-0.5">
                  Notebooks, long size, ledgers, pens, school kits, and art colors in stock.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/40 flex items-start gap-3 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
                <Printer className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-black text-slate-900 dark:text-white text-xs sm:text-sm">
                  Instant Xerox &amp; Spiral Binding
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-amber-100/70 mt-0.5">
                  High-speed crisp black &amp; white copies, printouts, and exam document lamination.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/40 flex items-start gap-3 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-black text-slate-900 dark:text-white text-xs sm:text-sm">
                  Official Double A &amp; Shape Dealer
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-amber-100/70 mt-0.5">
                  Authorized dealer for Double A copier paper &amp; Shape brand geometry instruments.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
