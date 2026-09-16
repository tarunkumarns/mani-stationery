import { useState } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Printer, 
  Zap, 
  Sparkles, 
  Maximize2, 
  X, 
  Package, 
  MapPin, 
  FileText, 
  Check, 
  Calculator,
  Layers,
  Award
} from 'lucide-react';
import { STORE_INFO, DOUBLE_A_POSTER_DATA } from '../data/storeData';

interface DoubleAXeroxPosterSectionProps {
  onOpenEnquiry: (productName?: string) => void;
}

export function DoubleAXeroxPosterSection({ onOpenEnquiry }: DoubleAXeroxPosterSectionProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeTab, setActiveTab] = useState<'poster' | 'calculator' | 'services'>('poster');

  // Wholesale Box Calculator State
  const [boxQuantity, setBoxQuantity] = useState<number>(10); // Minimum 10 boxes
  const [selectedGsm, setSelectedGsm] = useState<'80' | '75'>('80');
  const [deliveryTown, setDeliveryTown] = useState<string>('Andippatti');

  // Calculate reams and total sheets
  const reamsCount = boxQuantity * 5; // 5 reams per box
  const totalSheets = reamsCount * 500; // 500 sheets per ream

  const handleWhatsAppWholesale = () => {
    const text = encodeURIComponent(
      `Hello Ashok Kumar B (Mani Stationery), I would like to order ${boxQuantity} boxes of Double A ${selectedGsm} GSM Paper with doorstep delivery to ${deliveryTown}. Total: ${reamsCount} reams (${totalSheets.toLocaleString()} sheets). Please confirm availability and current wholesale price.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleWhatsAppXerox = () => {
    const text = encodeURIComponent(
      `Hello Mani Stationery, I am inquiring about Xerox and Photocopying / Spiral Binding services at your Vaigai Road shop in Andippatti.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="double-a-poster" className="py-20 sm:py-24 bg-[#f8fafc] dark:bg-slate-950 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      
      {/* Background accents */}
      <div className="absolute top-1/4 left-[-100px] w-[500px] h-[500px] bg-blue-100/60 dark:bg-blue-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-100px] w-[500px] h-[500px] bg-amber-100/60 dark:bg-amber-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-300 border border-blue-300 dark:border-blue-800 text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Official Authorized Dealer &bull; Theni District</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Double A Paper &amp; <br />
            <span className="text-blue-700 dark:text-blue-400">
              High-Speed Xerox Station
            </span>
          </h2>

          <p className="mt-3 text-slate-600 dark:text-amber-100/80 text-sm sm:text-base leading-relaxed">
            Mani Stationery is the trusted regional retail and wholesale hub for 
            world-renowned <strong className="text-slate-900 dark:text-white">Double A® Premium Paper</strong>, 
            rapid photocopy and printout services, and complete educational &amp; commercial stationery.
          </p>

          {/* Tab Switcher */}
          <div className="mt-6 inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => setActiveTab('poster')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'poster'
                  ? 'btn-primary-blue shadow-md'
                  : 'text-slate-600 dark:text-amber-200/80 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Official Poster</span>
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'calculator'
                  ? 'btn-primary-gold shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Wholesale Calculator</span>
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'services'
                  ? 'btn-primary shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Printer className="w-4 h-4" />
              <span>Xerox Services</span>
            </button>
          </div>
        </div>

        {/* MAIN DISPLAY AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: OFFICIAL POSTER CARD */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            <div className="w-full max-w-xl">
              <div className="relative rounded-2xl bg-white text-slate-900 shadow-xl border-2 border-slate-200 overflow-hidden select-none">
                
                {/* Top Action Ribbon on Poster */}
                <div className="bg-[#002f87] text-white px-4 py-2 flex items-center justify-between text-[11px] font-bold">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-blue-100 uppercase tracking-wide">AUTHENTIC AUTHORIZED POSTER</span>
                  </div>
                  <button 
                    onClick={() => setIsZoomed(true)}
                    className="flex items-center gap-1 text-amber-300 hover:text-white transition-colors cursor-pointer"
                    title="Click to Zoom Fullscreen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Zoom Poster</span>
                  </button>
                </div>

                {/* POSTER INNER CONTENT (Exact Replica of User's Image) */}
                <div className="p-4 sm:p-6 bg-gradient-to-b from-white via-slate-50 to-[#eef4ff] text-slate-900 flex flex-col">
                  
                  {/* Poster Header */}
                  <div className="flex items-start justify-between pb-3 border-b-2 border-slate-200">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-heading font-black italic text-3xl sm:text-4xl text-[#002f87] tracking-tight">
                          Double A<sup className="text-xs font-normal not-italic ml-0.5">&reg;</sup>
                        </span>
                      </div>
                      <div className="text-[10px] tracking-[0.25em] font-black uppercase text-slate-600 mt-0.5">
                        &mdash; PREMIUM QUALITY &mdash;
                      </div>
                    </div>

                    {/* Top 4 Badges */}
                    <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center">
                      <div className="p-1 rounded bg-blue-50 border border-blue-100 flex flex-col items-center justify-center">
                        <div className="w-3.5 h-3.5 grid grid-cols-3 gap-0.5 my-0.5 text-blue-900">
                          {[...Array(9)].map((_, i) => (
                            <span key={i} className="w-1 h-1 rounded-full bg-[#002f87]" />
                          ))}
                        </div>
                        <span className="text-[7px] sm:text-[8px] font-black leading-tight text-slate-800">30M FIBERS</span>
                        <span className="text-[6px] text-slate-500 font-bold">PER GRAM</span>
                      </div>

                      <div className="p-1 rounded bg-blue-50 border border-blue-100 flex flex-col items-center justify-center">
                        <span className="text-[11px] leading-none text-blue-800">&#8776;</span>
                        <span className="text-[7px] sm:text-[8px] font-black leading-tight text-slate-800 mt-0.5">SMOOTHER</span>
                        <span className="text-[6px] text-slate-500 font-bold">FEED</span>
                      </div>

                      <div className="p-1 rounded bg-blue-50 border border-blue-100 flex flex-col items-center justify-center">
                        <Layers className="w-3.5 h-3.5 text-[#002f87]" />
                        <span className="text-[7px] sm:text-[8px] font-black leading-tight text-slate-800 mt-0.5">THICKER</span>
                        <span className="text-[6px] text-slate-500 font-bold">SHEETS</span>
                      </div>

                      <div className="p-1 rounded bg-blue-50 border border-blue-100 flex flex-col items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span className="text-[7px] sm:text-[8px] font-black leading-tight text-slate-800 mt-0.5">SHARP</span>
                        <span className="text-[6px] text-slate-500 font-bold">PRINT</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Headline */}
                  <div className="pt-3 pb-2 text-center">
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-[#0f2146] tracking-tight uppercase leading-tight">
                      PREMIUM PAPER, SHARPER &amp; MORE VIBRANT
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-600 font-medium mt-0.5">
                      Experience the Difference with World's No.1 Premium Quality Paper
                    </p>
                  </div>

                  {/* Hero Visual Area: Success Begins Banner + Double A Box Illustration */}
                  <div className="my-2 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-[#031538] via-[#092257] to-[#133783] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
                    <div className="space-y-1 text-left">
                      <span className="text-xs sm:text-sm font-black tracking-wide text-white uppercase block">
                        SUCCESS BEGINS WITH <span className="text-amber-400 italic">Double A</span>
                      </span>
                      <div className="flex items-center gap-1.5 text-[11px] text-blue-100">
                        <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                        <span>Smoother Performance &bull; Jam-Free</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-blue-100">
                        <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                        <span>Thicker &amp; Stronger Sheets (No Bleed)</span>
                      </div>
                      <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 border border-white/20 text-[10px] font-bold text-amber-300">
                        <span>&#128200; Stunningly Vivid Printing Every Time!</span>
                      </div>
                    </div>

                    {/* Stylized Double A Ream & Box Pack visual */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="w-20 h-24 rounded-lg bg-[#003899] border-2 border-white/30 p-1.5 flex flex-col justify-between shadow-xl">
                        <span className="text-[7px] font-bold text-sky-200">Double A</span>
                        <div className="font-black italic text-3xl text-white text-center tracking-tighter">
                          A
                        </div>
                        <div className="bg-sky-400 text-[#002f87] text-[7px] font-black text-center rounded py-0.5 uppercase">
                          80 GSM &bull; A4
                        </div>
                      </div>

                      <div className="w-16 h-20 rounded-lg bg-[#002466] border border-white/20 p-1.5 flex flex-col justify-between shadow-lg">
                        <span className="text-[6px] text-sky-300">Carton Box</span>
                        <div className="font-black text-lg text-white text-center">
                          BOX
                        </div>
                        <span className="text-[6px] text-center text-slate-300 font-mono">5 Reams</span>
                      </div>
                    </div>
                  </div>

                  {/* 3 Middle Operations Panels */}
                  <div className="grid grid-cols-3 gap-2 my-2">
                    {/* Panel 1: Reliable Quality */}
                    <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-xs flex flex-col items-center text-center">
                      <div className="px-1.5 py-0.5 rounded bg-[#092257] text-white text-[8px] font-bold uppercase tracking-wider mb-1 w-full truncate">
                        RELIABLE QUALITY
                      </div>
                      <Printer className="w-5 h-5 text-[#002f87] my-1" />
                      <p className="text-[8px] sm:text-[9px] text-slate-600 leading-tight">
                        Consistent quality for professional results.
                      </p>
                    </div>

                    {/* Panel 2: Time to Restock */}
                    <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-xs flex flex-col items-center text-center">
                      <div className="px-1.5 py-0.5 rounded bg-[#092257] text-white text-[8px] font-bold uppercase tracking-wider mb-1 w-full truncate">
                        TIME TO RESTOCK!
                      </div>
                      <Truck className="w-5 h-5 text-sky-600 my-1" />
                      <p className="text-[8px] sm:text-[9px] text-slate-600 leading-tight">
                        Doorstep bulk delivery in Theni District.
                      </p>
                    </div>

                    {/* Panel 3: Fast Print */}
                    <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-xs flex flex-col items-center text-center">
                      <div className="px-1.5 py-0.5 rounded bg-[#092257] text-white text-[8px] font-bold uppercase tracking-wider mb-1 w-full truncate">
                        FAST PRINT RESULTS
                      </div>
                      <Zap className="w-5 h-5 text-amber-600 my-1" />
                      <p className="text-[8px] sm:text-[9px] text-slate-600 leading-tight">
                        Speed, crisp toner adhesion &amp; clarity.
                      </p>
                    </div>
                  </div>

                  {/* Two Column Bottom Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 pt-2 border-t border-slate-200 text-left">
                    
                    {/* Left: Why Choose Double A? */}
                    <div className="space-y-1.5">
                      <div className="bg-[#0f2146] text-white px-2 py-1 rounded text-[9px] font-black uppercase tracking-wider text-center">
                        WHY CHOOSE DOUBLE A?
                      </div>
                      <div className="space-y-1 text-[9px]">
                        {DOUBLE_A_POSTER_DATA.reasons.map((r, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <span className="w-3.5 h-3.5 rounded-full bg-blue-100 text-[#002f87] text-[8px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <div>
                              <span className="font-bold text-slate-900 block">{r.title}</span>
                              <span className="text-slate-500 text-[8px]">{r.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Special Service Highlights */}
                    <div className="space-y-1.5">
                      <div className="bg-[#0f2146] text-white px-2 py-1 rounded text-[9px] font-black uppercase tracking-wider text-center">
                        SPECIAL SERVICE HIGHLIGHTS
                      </div>
                      <div className="space-y-1 text-[9px]">
                        {DOUBLE_A_POSTER_DATA.services.map((s, i) => (
                          <div key={i} className="flex items-start gap-1.5 p-1 rounded bg-blue-50/60">
                            <Check className="w-3 h-3 text-blue-700 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-extrabold text-[#002f87] block">{s.title}</span>
                              <span className="text-slate-600 text-[8px]">{s.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* POSTER FOOTER BANNER: MANI STATIONERY */}
                  <div className="mt-3 rounded-xl bg-[#002f87] text-white p-3.5 text-center shadow-md">
                    <div className="text-[8px] sm:text-[9px] uppercase tracking-wider font-extrabold text-sky-200">
                      AUTHORIZED RETAILER &bull; THENI DISTRICT (AUNDIPATTI, PERIYAKULAM, KANDAMANUR)
                    </div>
                    
                    <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
                      <span className="font-heading font-black text-xl sm:text-2xl text-amber-300 tracking-wider">
                        MANI STATIONERY
                      </span>
                      <a 
                        href={`tel:${STORE_INFO.phone}`}
                        className="btn-primary inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{STORE_INFO.formattedPhone}</span>
                      </a>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-2 flex items-center justify-center gap-4 text-[8px] sm:text-[9px] text-blue-100 font-semibold border-t border-blue-400/30 pt-1.5">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-sky-300" />
                        QUALITY PAPER
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-sky-300" />
                        TRUSTED PARTNER
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-sky-300" />
                        LOCAL SUPPORT
                      </span>
                    </div>
                  </div>

                </div>

                {/* Bottom action bar on poster */}
                <div className="bg-slate-900 text-slate-300 px-4 py-3 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-300">
                    Proprietor: <strong className="text-white">{STORE_INFO.ownerName}</strong>
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenEnquiry("Double A Paper (10 Box Wholesale Order)")}
                      className="btn-primary-blue px-3 py-1.5 rounded-lg font-black text-[11px] cursor-pointer"
                    >
                      Enquire &rarr;
                    </button>
                    <button
                      onClick={() => setIsZoomed(true)}
                      className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-[11px] cursor-pointer"
                    >
                      Full Size
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT: TAB CONTENT (Wholesale Calculator / Xerox & Services / Poster Details) */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            
            {/* CARD 1: WHOLESALE ORDER CALCULATOR & FAST BOOKING */}
            <div className="rounded-2xl bg-white border-2 border-blue-200 p-6 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-lg text-slate-900">
                      Doorstep Wholesale Order
                    </h3>
                    <p className="text-[11px] text-slate-500 font-semibold">
                      Minimum 10 boxes &bull; Safe, prompt delivery
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-black">
                  In Stock
                </span>
              </div>

              {/* Calculator Inputs */}
              <div className="mt-5 space-y-4">
                
                {/* Paper Grammage Choice */}
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                    Paper Grammage
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedGsm('80')}
                      className={`p-3 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer text-left ${
                        selectedGsm === '80'
                          ? 'bg-blue-50 border-blue-600 text-blue-950 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span className="font-black block">80 GSM (Heavy Duty)</span>
                      <span className="text-[10px] text-blue-700 font-semibold mt-0.5 block">Premier Copier &amp; Print</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedGsm('75')}
                      className={`p-3 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer text-left ${
                        selectedGsm === '75'
                          ? 'bg-blue-50 border-blue-600 text-blue-950 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span className="font-black block">75 GSM (Daily Copier)</span>
                      <span className="text-[10px] text-blue-700 font-semibold mt-0.5 block">High Speed Bulk Xerox</span>
                    </button>
                  </div>
                </div>

                {/* Box Quantity Stepper */}
                <div>
                  <div className="flex items-center justify-between text-xs font-black text-slate-700 mb-2">
                    <span className="uppercase tracking-wider">Number of Boxes</span>
                    <span className="text-indigo-600 font-black text-base">{boxQuantity} Boxes</span>
                  </div>
                  
                  <input
                    type="range"
                    min={10}
                    max={100}
                    step={5}
                    value={boxQuantity}
                    onChange={(e) => setBoxQuantity(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />

                  {/* Preset Pills */}
                  <div className="flex items-center gap-1.5 mt-2.5">
                    {[10, 20, 30, 50, 100].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setBoxQuantity(count)}
                        className={`flex-1 py-1.5 rounded-lg text-[10px] font-black border transition-colors cursor-pointer ${
                          boxQuantity === count
                            ? 'bg-indigo-600 text-white border-[#e05a2b]'
                            : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {count} {count === 10 && '(Min)'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Destination Town */}
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                    Delivery Town (Theni District)
                  </label>
                  <select
                    value={deliveryTown}
                    onChange={(e) => setDeliveryTown(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs font-medium focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="Andippatti">Andippatti / Jakkampatti (Local Quick Drop)</option>
                    <option value="Periyakulam">Periyakulam &amp; Surrounding College Zone</option>
                    <option value="Kandamanur">Kandamanur &amp; High School Belt</option>
                    <option value="Theni Town">Theni Commercial &amp; Court Area</option>
                    <option value="Chinnamanur">Chinnamanur &amp; Cumbum Valley</option>
                    <option value="Other Theni Location">Other Theni District Location</option>
                  </select>
                </div>

                {/* Calculated Metrics Summary */}
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <span className="text-[10px] text-slate-600 block font-bold uppercase">Reams</span>
                    <span className="font-heading font-black text-base text-slate-900">{reamsCount}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-600 block font-bold uppercase">Total Sheets</span>
                    <span className="font-heading font-black text-base text-blue-700">
                      {totalSheets.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-600 block font-bold uppercase">Packaging</span>
                    <span className="font-heading font-black text-base text-emerald-700">5 Rm/Box</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                  <button
                    onClick={handleWhatsAppWholesale}
                    className="btn-primary-whatsapp flex-1 py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Order via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(`Double A ${selectedGsm} GSM Paper - ${boxQuantity} Boxes to ${deliveryTown}`)}
                    className="btn-primary-blue flex-1 py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Price Enquiry</span>
                  </button>
                </div>

              </div>
            </div>

            {/* CARD 2: SPECIAL SERVICE HIGHLIGHTS */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-wider text-indigo-600 flex items-center gap-2 mb-3">
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Special Service Highlights</span>
              </h4>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">DOORSTEP DELIVERY:</strong>
                    <p className="text-slate-600 text-[11px]">Delivered to your doorstep safely and on time across Theni District.</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <Package className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">MINIMUM 10 BOX ORDER:</strong>
                    <p className="text-slate-600 text-[11px]">Place a minimum order of 10 boxes for wholesale rate qualification.</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">STATIONERY POINTS WELCOME:</strong>
                    <p className="text-slate-600 text-[11px]">All regional stationery shops, retail points, and Xerox dealers are warmly invited to partner.</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">FOR EVERY NEED:</strong>
                    <p className="text-slate-600 text-[11px]">Offices &bull; Schools &bull; Colleges &bull; Xerox Shops &bull; Dealers Welcome</p>
                  </div>
                </div>
              </div>

              {/* Fast Xerox Service CTA */}
              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Need fast Xerox today?</span>
                  <span className="text-[10px] text-slate-500">High speed photocopy &amp; spiral binding at shop</span>
                </div>
                <button
                  onClick={handleWhatsAppXerox}
                  className="btn-primary px-3.5 py-1.5 rounded-lg text-xs font-black flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Xerox Desk</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* FULLSCREEN / ZOOM MODAL */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-150"
          onClick={() => setIsZoomed(false)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white rounded-2xl p-5 sm:p-7 text-slate-900 shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer z-20"
              aria-label="Close full view"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Poster Header */}
            <div className="text-center pb-4 border-b border-slate-200">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#002f87]">
                OFFICIAL DOUBLE A DEALERSHIP POSTER
              </span>
              <h3 className="font-heading font-black text-2xl text-slate-900">
                MANI STATIONERY &bull; ANDIPPATTI
              </h3>
              <p className="text-xs text-slate-600">
                Authorized Retailer - Theni District (Aundipatti, Periyakulam, Kandamanur)
              </p>
            </div>

            {/* Full Poster Spec Grid */}
            <div className="py-4 space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                <span className="font-black text-[#002f87] block text-sm mb-1">
                  &bull; 30 MILLION FIBERS PER GRAM:
                </span>
                <p className="text-slate-700 leading-relaxed">
                  Manufactured with high fiber density from sustainably farmed eucalyptus trees. Yields high opacity, two-sided zero bleed-through, and ultra-smooth feed into high-speed digital copiers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Jam-Free Photocopying</strong>
                  <p className="text-slate-600 text-[11px]">
                    Tested through 100,000 continuous sheets with 0 paper jams. Perfect for rush hours in Xerox points.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Sharp &amp; Vibrant Contrast</strong>
                  <p className="text-slate-600 text-[11px]">
                    Bright white base produces rich deep blacks for legal deeds, exam papers, and vibrant laser color charts.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                <div>
                  <strong className="text-amber-950 block text-xs">Direct Wholesale Inquiries:</strong>
                  <span className="text-[11px] text-amber-800">Ashok Kumar B &bull; Phone: 075388 70090</span>
                </div>
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="btn-primary-gold px-4 py-2 rounded-xl text-xs font-black"
                >
                  Call Store
                </a>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2">
              <button
                onClick={() => setIsZoomed(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsZoomed(false);
                  onOpenEnquiry("Double A Copier Paper Wholesale Bulk");
                }}
                className="btn-primary-blue px-4 py-2 rounded-xl text-xs font-black cursor-pointer"
              >
                Request Quotation
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
