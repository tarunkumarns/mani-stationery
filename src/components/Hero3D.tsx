import { motion } from 'motion/react';
import { Sparkles, MessageSquare, ArrowRight, Navigation, MapPin, CheckCircle2, Download, Video, Phone, Star, ShieldCheck, Printer, BookOpen, Layers, Compass, Check } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { ManiStationeryLogo } from './ManiStationeryLogo';

interface Hero3DProps {
  onOpenEnquiry: (prefillProduct?: string) => void;
  onOpenDownloadPriceList: () => void;
}

export function Hero3D({ onOpenEnquiry, onOpenDownloadPriceList }: Hero3DProps) {
  const servicePills = [
    { label: 'Double A® Official Dealer', color: 'bg-blue-100 dark:bg-blue-950/80 text-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-800' },
    { label: 'Shape Stationery Official Dealer', color: 'bg-amber-100 dark:bg-amber-950/80 text-amber-950 dark:text-amber-200 border-amber-300 dark:border-amber-800' },
    { label: 'Notebooks & Registers', color: 'bg-orange-100 dark:bg-orange-950/80 text-orange-900 dark:text-orange-200 border-orange-300 dark:border-orange-800' },
    { label: 'Xerox & Printing Service', color: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800' },
    { label: 'School Supplies & Geometry', color: 'bg-purple-100 dark:bg-purple-950/80 text-purple-900 dark:text-purple-200 border-purple-300 dark:border-purple-800' },
    { label: 'Office Stationery', color: 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 border-slate-300 dark:border-slate-700' },
  ];

  return (
    <section 
      id="hero"
      className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 border-b border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-200 bg-transparent"
    >
      {/* Warm Ambient Accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-200/40 dark:bg-amber-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-left flex flex-col items-start"
          >
            
            {/* Eyebrow & Brand Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4e2d1d] text-[#f8ede2] text-xs font-bold uppercase tracking-wider shadow-sm border border-[#6f3f29]">
                <ManiStationeryLogo variant="icon" size="sm" />
                <span className="text-indigo-500 font-black">{STORE_INFO.tagline}</span>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{STORE_INFO.operatingHours.statusText}</span>
              </span>
            </div>

            {/* BOLD SIDE HEADING: MANI STATIONERY */}
            <div className="mb-3">
              <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Double A® Dealer
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-100 dark:bg-amber-950 text-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                  Shape Stationery Dealer
                </span>
              </div>
              <h2 
                className="font-heading font-black uppercase tracking-tight leading-none text-indigo-600 dark:text-indigo-400 text-3xl sm:text-5xl"
              >
                MANI <span className="text-slate-900 dark:text-white">STATIONERY</span>
              </h2>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-indigo-600 dark:text-amber-400 mt-1 block">
                AA Complex Aalamara &bull; Vaigai Road, Andippatti
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-5xl sm:text-7xl text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-5">
              Small things. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-500 dark:from-indigo-400 dark:to-amber-400 drop-shadow-xs">
                Big ideas.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-6 font-normal">
              {STORE_INFO.heroSubtitle}
            </p>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {servicePills.map((pill, i) => (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  key={pill.label}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border shadow-xs ${pill.color}`}
                >
                  {pill.label}
                </motion.span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              {/* Call Button */}
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="btn-primary flex-1 sm:flex-none px-6 py-3.5 rounded-2xl text-sm font-black flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-transform"
              >
                <Phone className="w-4 h-4" />
                <span>Call the shop</span>
              </a>

              {/* WhatsApp / Enquiry Button */}
              <button
                onClick={() => onOpenEnquiry()}
                className="btn-primary-whatsapp flex-1 sm:flex-none px-6 py-3.5 rounded-2xl text-sm font-black flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-transform cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </button>

              {/* Download 164 Item Price List Button */}
              <button
                onClick={onOpenDownloadPriceList}
                className="btn-primary-gold w-full sm:w-auto px-5 py-3.5 rounded-2xl text-sm font-black flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-transform cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Price List (164 Items)</span>
              </button>
            </motion.div>

            {/* Landmark and Local Trust Pill */}
            <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-amber-200/80 font-medium">
              <span className="flex items-center gap-1.5 bg-white dark:bg-slate-800 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                <span>{STORE_INFO.address.landmark}, Andippatti</span>
              </span>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Mani+Stationery+Andippatti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 font-bold hover:bg-amber-100 transition-colors shadow-sm"
              >
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>5.0 Star Rated Store (Ashok Kumar B)</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Organized & Colorful Stationery Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="w-full max-w-md rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-2 border-amber-200/50 dark:border-slate-700 p-6 sm:p-7 shadow-2xl relative overflow-hidden transition-colors">
              
              {/* Colorful Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm" />
                  <span className="ml-2 font-heading font-black text-slate-800 dark:text-white text-sm tracking-wide">
                    OFFICIAL DEALER SHOWCASE
                  </span>
                </div>
                <span className="text-[11px] font-bold text-slate-500 dark:text-amber-300 uppercase tracking-wider bg-slate-100 dark:bg-[#2f1a0f] px-2.5 py-1 rounded-full shadow-inner">
                  Andippatti
                </span>
              </div>

              {/* Grid of 4 Colorful Feature Tiles */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                
                {/* 1. Double A Authorized Dealer */}
                <div 
                  onClick={() => onOpenEnquiry("Double A Copier Paper")}
                  className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border-2 border-blue-200 dark:border-blue-800/80 hover:border-blue-400 transition-colors cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-2 shadow-sm font-black text-sm">
                    AA
                  </div>
                  <h4 className="font-heading font-black text-blue-950 dark:text-blue-200 text-sm leading-tight">
                    Double A A4
                  </h4>
                  <p className="text-[11px] text-blue-700 dark:text-blue-300 font-semibold mt-0.5">
                    Official Dealer &bull; 80/70 GSM
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-bold text-blue-800 dark:text-blue-400 group-hover:underline">
                    30M Fibers/g &rarr;
                  </span>
                </div>

                {/* 2. Shape Stationery Items (Official Dealer) */}
                <div 
                  onClick={() => onOpenEnquiry("Shape Stationery Items")}
                  className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-200 dark:border-amber-800/80 hover:border-amber-400 transition-colors cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-2 shadow-sm font-black text-sm">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-black text-amber-950 dark:text-amber-200 text-sm leading-tight">
                    Shape Stationery
                  </h4>
                  <p className="text-[11px] text-amber-800 dark:text-amber-300 font-semibold mt-0.5">
                    Official Dealer &bull; Geometry &amp; Scales
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-bold text-amber-900 dark:text-amber-400 group-hover:underline">
                    Authorized Stock &rarr;
                  </span>
                </div>

                {/* 3. Class Notebooks & Registers */}
                <div 
                  onClick={() => onOpenEnquiry("Student Notebooks")}
                  className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border-2 border-orange-200 dark:border-orange-800/80 hover:border-orange-400 transition-colors cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-2 shadow-sm font-black text-sm">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-black text-orange-950 dark:text-orange-200 text-sm leading-tight">
                    Class Notebooks
                  </h4>
                  <p className="text-[11px] text-orange-800 dark:text-orange-300 font-semibold mt-0.5">
                    Long, King Size &amp; Registers
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-bold text-orange-900 dark:text-orange-400 group-hover:underline">
                    From ₹20 to ₹70 &rarr;
                  </span>
                </div>

                {/* 4. Instant Xerox & Printing */}
                <div 
                  onClick={() => onOpenEnquiry("Xerox & Photocopy Service")}
                  className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-200 dark:border-emerald-800/80 hover:border-emerald-400 transition-colors cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-2 shadow-sm font-black text-sm">
                    <Printer className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-black text-emerald-950 dark:text-emerald-200 text-sm leading-tight">
                    Instant Xerox
                  </h4>
                  <p className="text-[11px] text-emerald-800 dark:text-emerald-300 font-semibold mt-0.5">
                    B&amp;W, Colour &amp; Spiral Binding
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-bold text-emerald-900 dark:text-emerald-400 group-hover:underline">
                    High clarity &rarr;
                  </span>
                </div>

              </div>

              {/* Bottom Owner Signature Strip */}
              <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-amber-200/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#4e2d1d] text-amber-300 flex items-center justify-center font-bold text-[10px]">
                    A
                  </div>
                  <span>
                    Proprietor: <strong className="text-slate-800 dark:text-white">{STORE_INFO.ownerName}</strong>
                  </span>
                </div>
                <a
                  href="#inside-tour"
                  className="font-bold text-indigo-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Inside tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
