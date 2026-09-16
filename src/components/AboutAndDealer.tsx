import { useState } from 'react';
import { ShieldCheck, Truck, Award, Sparkles, Phone, MessageSquare, Check, Star, BookOpen, Layers, Compass } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { ManiStationeryLogo } from './ManiStationeryLogo';

interface AboutAndDealerProps {
  onOpenEnquiry: (productName?: string) => void;
}

export function AboutAndDealer({ onOpenEnquiry }: AboutAndDealerProps) {
  const [activeTab, setActiveTab] = useState<'story' | 'double-a' | 'shape'>('story');

  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-200/40 dark:bg-amber-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/30 dark:bg-orange-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Switch between 3 tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm gap-1">
            <button
              onClick={() => setActiveTab('story')}
              className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === 'story'
                  ? 'btn-primary shadow-md'
                  : 'text-slate-600 dark:text-amber-200/80 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              The Mani Way &bull; Our Story
            </button>
            <button
              onClick={() => setActiveTab('double-a')}
              className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'double-a'
                  ? 'btn-primary-blue shadow-md'
                  : 'text-slate-600 dark:text-amber-200/80 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>Double A® Paper Dealer</span>
            </button>
            <button
              onClick={() => setActiveTab('shape')}
              className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'shape'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                  : 'text-slate-600 dark:text-amber-200/80 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4 text-amber-500" />
              <span>Shape Stationery Dealer</span>
            </button>
          </div>
        </div>

        {/* TAB 1: THE MANI WAY */}
        {activeTab === 'story' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center animate-in fade-in duration-200">
            
            {/* Left Column: Visual Badge Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border-2 border-amber-900/15 dark:border-slate-800 p-8 shadow-xl overflow-hidden group">
                
                {/* Mani Stationery Brand Header Badge */}
                <div className="w-full rounded-2xl bg-[#4e2d1d] p-3.5 flex items-center justify-between shadow-md border border-[#6f3f29]">
                  <ManiStationeryLogo variant="horizontal" size="md" />
                  <span className="text-[10px] uppercase tracking-wider text-indigo-500 font-black bg-black/40 px-2.5 py-1 rounded-full border border-amber-500/20">
                    ANDIPPATTI
                  </span>
                </div>

                {/* Center visual: Gold "M" & "TRUSTED LOCAL SHOP" Stamp */}
                <div className="relative my-8 h-44 flex items-center justify-between">
                  {/* Dashed circular stamp */}
                  <div className="w-28 h-28 rounded-full border-2 border-dashed border-[#e05a2b] flex flex-col items-center justify-center p-2 text-center transform -rotate-12 bg-orange-50 dark:bg-orange-950/40">
                    <span className="text-[9px] font-black uppercase text-indigo-600 tracking-wider">
                      TRUSTED
                    </span>
                    <span className="text-xs font-black uppercase text-indigo-600">
                      LOCAL
                    </span>
                    <span className="text-[9px] font-black uppercase text-indigo-600 tracking-wider">
                      SHOP
                    </span>
                  </div>

                  {/* Majestic Serif "M" */}
                  <div className="font-heading font-black text-8xl text-amber-500 select-none drop-shadow-sm">
                    M
                  </div>
                </div>

                {/* Quote */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="font-heading font-black text-xl text-slate-900 dark:text-white leading-snug">
                    "A good shop knows what you'll need next."
                  </p>
                  <p className="text-xs text-slate-500 dark:text-amber-200/70 mt-1 font-medium">
                    Serving students, schools, colleges &amp; businesses in Andippatti
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Story Text & Owner Details */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Eyebrow */}
              <span className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-2">
                THE MANI WAY
              </span>

              {/* Headline with Super Bold MANI */}
              <h3 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
                Familiar faces. <br />
                <span className="text-indigo-600 dark:text-indigo-400">
                  Fresh shelves.
                </span>
              </h3>

              <p className="text-slate-700 dark:text-amber-100/80 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Mani Stationery is a trusted neighbourhood stop in Andippatti for students, families, and anyone who still gets a little happy opening a new notebook. Owner <strong className="text-slate-900 dark:text-white font-bold">{STORE_INFO.ownerName}</strong> keeps the everyday things close, the prices sensible, and the shelves worth a second look — with Xerox service, authorized Double A paper, and Shape stationery items ready when you need them.
              </p>

              {/* Owner and Rating Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-6 border-t border-slate-200 dark:border-slate-800">
                
                {/* Owner Card */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-sm">
                  <h4 className="font-heading font-black text-xl text-indigo-600 dark:text-indigo-400">
                    {STORE_INFO.ownerName}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-amber-100/70 mt-1 font-semibold">
                    {STORE_INFO.ownerTitle}
                  </p>
                  <span className="inline-block mt-3 text-[11px] text-slate-500 dark:text-amber-300 font-mono font-bold">
                    Direct Contact: {STORE_INFO.formattedPhone}
                  </span>
                </div>

                {/* Rating Card */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-black text-2xl text-amber-600 dark:text-amber-400">
                      5.0 / 5
                    </span>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-amber-100/70 mt-1 font-medium">
                    Loved by the local community (4 verified reviews)
                  </p>
                  <a 
                    href="#reviews" 
                    className="inline-block mt-3 text-[11px] text-indigo-600 dark:text-amber-400 font-black hover:underline"
                  >
                    Read verified customer words &rarr;
                  </a>
                </div>

              </div>

              {/* Fast Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-7 w-full sm:w-auto">
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="btn-primary flex-1 sm:flex-none px-6 py-3 rounded-xl text-xs font-black shadow-md flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Ashok Kumar B ({STORE_INFO.formattedPhone})</span>
                </a>

                <button
                  onClick={() => onOpenEnquiry()}
                  className="btn-primary-whatsapp flex-1 sm:flex-none px-6 py-3 rounded-xl text-xs font-black shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send WhatsApp Message</span>
                </button>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: OFFICIAL DOUBLE A A4 PAPER DEALERSHIP */}
        {activeTab === 'double-a' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-200">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-300 border border-blue-300 dark:border-blue-800 text-xs font-black uppercase tracking-wider mb-4">
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Authorized Double A Copier Paper Dealer</span>
              </div>

              <h3 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
                Official AA Double A4 Paper <br />
                <span className="text-blue-700 dark:text-blue-400">Direct Doorstep Delivery</span>
              </h3>

              <p className="text-slate-700 dark:text-amber-100/80 text-base leading-relaxed mb-6">
                Mani Stationery is the premier authorized dealer of genuine Double A® 80 GSM &amp; 75 GSM paper across Andippatti, Jakkampatti, and the entire Theni District. Double A paper is manufactured using premium farmed eucalyptus pulp containing <strong className="text-slate-950 dark:text-white">30 million fibers per gram</strong> for flawless, jam-free photocopying and ultra-crisp laser printing.
              </p>

              {/* Dealer Highlights */}
              <div className="space-y-2.5 mb-8">
                {STORE_INFO.dealerDetails.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                    <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 dark:text-amber-100/90 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry("AA Double A4 Paper Bulk Wholesale")}
                  className="btn-primary-blue px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Order Wholesale Paper Cartons</span>
                  <Truck className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-800 hover:bg-slate-50 text-slate-800 dark:text-amber-100 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-indigo-600" />
                  <span>Call {STORE_INFO.formattedPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Wholesale Specifications Box */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-blue-900 dark:bg-blue-950 text-white p-7 sm:p-8 shadow-xl relative overflow-hidden border border-blue-500/30">
                <div className="flex items-center justify-between pb-4 border-b border-blue-400/20 mb-6">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-200">
                      AUTHENTIC GUARANTEE
                    </span>
                    <h4 className="font-heading font-black text-2xl text-white">
                      Double A® 80 / 75 GSM
                    </h4>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-blue-200">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-blue-100">
                  <div className="flex justify-between py-1.5 border-b border-blue-800">
                    <span className="text-blue-200">Sheet Dimensions</span>
                    <span className="font-bold text-white">210 x 297 mm (A4)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-blue-800">
                    <span className="text-blue-200">Ream Content</span>
                    <span className="font-bold text-white">500 Sheets per Ream</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-blue-800">
                    <span className="text-blue-200">Box Packaging</span>
                    <span className="font-bold text-white">5 Reams per Carton Box</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-blue-800">
                    <span className="text-blue-200">Doorstep Delivery</span>
                    <span className="font-bold text-emerald-300">Yes (Min. 10 Boxes)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-blue-800">
                    <span className="text-blue-200">Service Coverage</span>
                    <span className="font-bold text-white">Andippatti, Jakkampatti &amp; Theni</span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-blue-950/80 border border-blue-400/30 text-center">
                  <span className="text-xs text-blue-200 font-semibold block mb-1">
                    Special Rates for Xerox Centers &amp; Schools
                  </span>
                  <button
                    onClick={() => onOpenEnquiry("AA Double A4 Paper Wholesale Quote")}
                    className="mt-2 text-xs font-black text-amber-300 hover:text-amber-200 underline cursor-pointer"
                  >
                    Click here to request today's carton price &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: OFFICIAL SHAPE STATIONERY ITEMS DEALERSHIP */}
        {activeTab === 'shape' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-200">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-950 dark:text-amber-200 border border-amber-300 dark:border-amber-800 text-xs font-black uppercase tracking-wider mb-4">
                <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Authorized Shape Stationery Dealer</span>
              </div>

              <h3 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
                Official Shape Stationery <br />
                <span className="text-indigo-600 dark:text-indigo-400">Geometry &amp; School Items</span>
              </h3>

              <p className="text-slate-700 dark:text-amber-100/80 text-base leading-relaxed mb-6">
                Mani Stationery is the official authorized dealer for genuine <strong className="text-slate-950 dark:text-white">Shape</strong> stationery products across Andippatti, Periyakulam, and Theni District. Trusted by schools, mathematics teachers, and engineering students for high precision and durable build.
              </p>

              {/* Shape Highlights */}
              <div className="space-y-2.5 mb-8">
                {STORE_INFO.shapeDealerDetails?.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                    <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 dark:text-amber-100/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry("Shape Stationery Items Wholesale & Retail")}
                  className="btn-primary px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Order Shape Stationery Items</span>
                  <Compass className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-800 hover:bg-slate-50 text-slate-800 dark:text-amber-100 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-indigo-600" />
                  <span>Call {STORE_INFO.formattedPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Shape Guarantee Box */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-amber-950 text-white p-7 sm:p-8 shadow-xl relative overflow-hidden border border-amber-500/30">
                <div className="flex items-center justify-between pb-4 border-b border-amber-700/40 mb-6">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-300">
                      OFFICIAL BRAND DEALER
                    </span>
                    <h4 className="font-heading font-black text-2xl text-white">
                      Shape Stationery
                    </h4>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-300">
                    <Compass className="w-7 h-7" />
                  </div>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-amber-100">
                  <div className="flex justify-between py-1.5 border-b border-amber-900">
                    <span className="text-amber-200">Mathematical Instruments</span>
                    <span className="font-bold text-white">Full Compass &amp; Divider Sets</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-amber-900">
                    <span className="text-amber-200">Precision Scales</span>
                    <span className="font-bold text-white">15cm &amp; 30cm Clear Rulers</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-amber-900">
                    <span className="text-amber-200">Student Exam Pouches</span>
                    <span className="font-bold text-white">Transparent &amp; Zipper Bags</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-amber-900">
                    <span className="text-amber-200">Erasers &amp; Sharpeners</span>
                    <span className="font-bold text-emerald-300">Dust-Free &amp; High-Grip</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-amber-900">
                    <span className="text-amber-200">Official Dealer Status</span>
                    <span className="font-bold text-white">Mani Stationery, Andippatti</span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-black/40 border border-amber-500/30 text-center">
                  <span className="text-xs text-amber-200 font-semibold block mb-1">
                    Wholesale School Kits &amp; Retail Available
                  </span>
                  <button
                    onClick={() => onOpenEnquiry("Shape Geometry & Scale Order")}
                    className="mt-2 text-xs font-black text-amber-300 hover:text-amber-200 underline cursor-pointer"
                  >
                    Click here to enquire Shape stock on WhatsApp &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
