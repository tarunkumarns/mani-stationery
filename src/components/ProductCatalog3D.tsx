import { useState } from 'react';
import { ArrowRight, Check, Sparkles, FileText, ShoppingBag, ShieldCheck, Compass, Printer } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/storeData';

interface ProductCatalog3DProps {
  onOpenEnquiry: (productName?: string) => void;
}

export function ProductCatalog3D({ onOpenEnquiry }: ProductCatalog3DProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Shelves' },
    { id: 'xerox-a4', label: 'Xerox & A4 (Double A Dealer)' },
    { id: 'shape', label: 'Shape Stationery (Dealer)' },
    { id: 'Student Essentials', label: 'Notebooks' },
    { id: 'Everyday Essentials', label: 'School Supplies' },
    { id: 'Creative & Extras', label: 'Little Finds' },
  ];

  // Specific filtering logic:
  // "if user see the xerox and a4 category only show the official dealer of double a"
  const filteredProducts = selectedCategory === 'all' 
    ? PRODUCTS_CATALOG 
    : selectedCategory === 'xerox-a4'
    ? PRODUCTS_CATALOG.filter(p => p.category === 'Official Dealer' || p.category === 'In-Store Service')
    : selectedCategory === 'shape'
    ? PRODUCTS_CATALOG.filter(p => p.category === 'Shape Official Dealer')
    : PRODUCTS_CATALOG.filter(p => p.category === selectedCategory);

  return (
    <section id="shelves" className="py-20 sm:py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>LOOK AROUND OUR SHELVES</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Come for the essentials. <br />
            <span className="text-indigo-600 dark:text-indigo-400">
              Stay for the finds.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-amber-100/80 leading-relaxed font-normal">
            Useful, cheerful, and picked with a student's day in mind. Official authorized dealers for <strong className="text-blue-600 dark:text-blue-400 font-extrabold">Double A® Paper</strong> and <strong className="text-amber-600 dark:text-amber-400 font-extrabold">Shape Stationery Items</strong>.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isXeroxChip = cat.id === 'xerox-a4';
              const isShapeChip = cat.id === 'shape';
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? isXeroxChip
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30 scale-105'
                        : isShapeChip
                        ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-900/30 scale-105'
                        : 'bg-indigo-600 text-white shadow-md shadow-orange-950/20 scale-105'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-200/90 hover:bg-slate-200 dark:hover:bg-[#321c12] border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {isXeroxChip && <ShieldCheck className="w-3.5 h-3.5" />}
                  {isShapeChip && <Compass className="w-3.5 h-3.5" />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Special Dedicated Dealer Highlighting Banner when Xerox & A4 Category is Selected */}
        {selectedCategory === 'xerox-a4' && (
          <div className="mb-10 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 text-white p-6 sm:p-8 border-2 border-blue-400/40 shadow-xl relative overflow-hidden animate-in fade-in duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/30 border border-blue-400/50 text-blue-200 text-xs font-black uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-4 h-4 text-blue-300" />
                  <span>EXCLUSIVE AUTHORIZED DEALERSHIP</span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                  Official Dealer of Double A® Copier Paper
                </h3>
                <p className="mt-2 text-blue-100 text-sm leading-relaxed">
                  Mani Stationery is the premier authorized dealer of genuine Double A® 80 GSM &amp; 75 GSM paper across Andippatti and Theni District. Guaranteed jam-free 30 million fibers/gram paper for commercial high-speed Xerox machines, offices, and schools.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-blue-200">
                  <span className="bg-blue-950/80 px-3 py-1 rounded-lg border border-blue-700/50">&bull; 30 Million Fibers Per Gram</span>
                  <span className="bg-blue-950/80 px-3 py-1 rounded-lg border border-blue-700/50">&bull; Jam-Free Guarantee</span>
                  <span className="bg-blue-950/80 px-3 py-1 rounded-lg border border-blue-700/50">&bull; Doorstep Delivery Across Theni</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => onOpenEnquiry('Double A 80 GSM Paper Wholesale')}
                  className="btn-primary-blue px-6 py-3 rounded-2xl font-black text-sm shadow-md whitespace-nowrap cursor-pointer text-center"
                >
                  Order Double A Cartons
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Special Dedicated Dealer Highlighting Banner when Shape Stationery is Selected */}
        {selectedCategory === 'shape' && (
          <div className="mb-10 rounded-3xl bg-gradient-to-r from-amber-900 via-amber-800 to-orange-950 text-white p-6 sm:p-8 border-2 border-amber-400/40 shadow-xl relative overflow-hidden animate-in fade-in duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/30 border border-amber-400/50 text-amber-200 text-xs font-black uppercase tracking-wider mb-3">
                  <Compass className="w-4 h-4 text-amber-300" />
                  <span>OFFICIAL BRAND DEALER</span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                  Official Dealer of Shape Stationery Items
                </h3>
                <p className="mt-2 text-amber-100 text-sm leading-relaxed">
                  We are the official authorized dealer for genuine Shape stationery products across Andippatti &amp; Theni. High-precision 15cm &amp; 30cm scales, mathematical geometry boxes, compass sets, transparent exam pouches, and drafting instruments.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-amber-200">
                  <span className="bg-amber-950/80 px-3 py-1 rounded-lg border border-amber-700/50">&bull; Shape Precision Scales</span>
                  <span className="bg-amber-950/80 px-3 py-1 rounded-lg border border-amber-700/50">&bull; Geometry Instrument Sets</span>
                  <span className="bg-amber-950/80 px-3 py-1 rounded-lg border border-amber-700/50">&bull; Transparent Exam Pouches</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => onOpenEnquiry('Shape Stationery Items')}
                  className="btn-primary px-6 py-3 rounded-2xl font-black text-sm shadow-md whitespace-nowrap cursor-pointer text-center"
                >
                  Enquire Shape Items
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3 Core Themed Category Cards (Shown on 'all' view) */}
        {selectedCategory === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            
            {/* 1. Notebooks Card */}
            <div 
              className="group relative rounded-3xl overflow-hidden p-7 sm:p-8 transition-all duration-200 hover:-translate-y-1 cursor-pointer shadow-lg flex flex-col justify-between min-h-[340px]"
              style={{
                background: 'linear-gradient(145deg, #e05a2b 0%, #c44216 100%)',
              }}
              onClick={() => onOpenEnquiry('Notebooks Collection')}
            >
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-orange-100/90">
                  DAILY &bull; SCHOOL &bull; COLLEGE
                </span>
                <h3 className="font-heading font-black text-3xl text-white mt-1 mb-2">
                  Notebooks
                </h3>
                <p className="text-white/90 text-sm font-medium leading-relaxed max-w-xs">
                  Fresh pages for class notes, plans, lists and all the ideas in between.
                </p>
              </div>

              {/* Stylized Book graphic */}
              <div className="relative my-4 flex justify-end">
                <div className="w-36 h-26 rounded-xl bg-[#facc15] shadow-xl transform rotate-6 p-3 flex flex-col justify-between border-2 border-yellow-100/40 group-hover:rotate-3 transition-transform">
                  <span className="font-heading font-black text-slate-900 text-xs tracking-tight">
                    write\A it down
                  </span>
                  <span className="text-[10px] text-slate-800 font-bold">200 Pages &bull; Ruled</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between text-white font-bold text-sm">
                <span>See what's in store</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 2. School Supplies & Shape Stationery Card */}
            <div 
              className="group relative rounded-3xl overflow-hidden p-7 sm:p-8 transition-all duration-200 hover:-translate-y-1 cursor-pointer shadow-lg flex flex-col justify-between min-h-[340px]"
              style={{
                background: 'linear-gradient(145deg, #0d9488 0%, #0f766e 100%)',
              }}
              onClick={() => setSelectedCategory('shape')}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-black uppercase tracking-widest text-teal-100/90">
                    CLASSROOM READY
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-amber-300 text-amber-950 px-2 py-0.5 rounded-md">
                    Shape Dealer
                  </span>
                </div>
                <h3 className="font-heading font-black text-3xl text-white mt-1 mb-2">
                  School supplies
                </h3>
                <p className="text-white/90 text-sm font-medium leading-relaxed max-w-xs">
                  Official dealer for Shape stationery items, geometry boxes, precision scales, pens &amp; exam pouches.
                </p>
              </div>

              {/* Stylized geometric geometry shape */}
              <div className="relative my-4 flex justify-end items-center">
                <div className="w-22 h-22 rounded-full border-4 border-teal-200/50 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-full border-2 border-white/60" />
                </div>
              </div>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between text-white font-bold text-sm">
                <span>Explore Shape &amp; school stock</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 3. Double A Paper & Xerox Dealer Card */}
            <div 
              className="group relative rounded-3xl overflow-hidden p-7 sm:p-8 transition-all duration-200 hover:-translate-y-1 cursor-pointer shadow-lg flex flex-col justify-between min-h-[340px]"
              style={{
                background: 'linear-gradient(145deg, #1e40af 0%, #1e3a8a 100%)',
              }}
              onClick={() => setSelectedCategory('xerox-a4')}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-black uppercase tracking-widest text-blue-200">
                    OFFICIAL DEALER
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-white text-blue-900 px-2 py-0.5 rounded-md">
                    Double A®
                  </span>
                </div>
                <h3 className="font-heading font-black text-3xl text-white mt-1 mb-2">
                  Double A &amp; Xerox
                </h3>
                <p className="text-white/90 text-sm font-medium leading-relaxed max-w-xs">
                  80 &amp; 75 GSM copier reams, doorstep carton delivery across Theni, and instant high-speed photocopy.
                </p>
              </div>

              {/* Stylized paper icon */}
              <div className="relative my-4 flex justify-end">
                <div className="w-24 h-24 bg-blue-500/40 rounded-2xl border-2 border-white/40 flex items-center justify-center font-black text-2xl text-white group-hover:rotate-6 transition-transform shadow-md">
                  AA
                </div>
              </div>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between text-white font-bold text-sm">
                <span>View Double A catalog</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        )}

        {/* Detailed Catalog Grid */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900 dark:text-white">
                {selectedCategory === 'xerox-a4' 
                  ? 'Double A® Paper & Xerox Services (Official Dealer)' 
                  : selectedCategory === 'shape'
                  ? 'Shape Stationery Items (Official Authorized Dealer)'
                  : 'Products On Our Shelves'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-amber-100/80">
                {selectedCategory === 'xerox-a4'
                  ? 'Showing exclusively official Double A paper & Xerox photocopying solutions'
                  : selectedCategory === 'shape'
                  ? 'Genuine Shape brand geometry tools, scales, and student essentials'
                  : 'In-store stock & official dealership products in Andippatti'}
              </p>
            </div>
            
            {/* Download price list button link */}
            <a
              href="#price-list"
              className="text-xs font-bold text-indigo-600 dark:text-amber-400 hover:underline flex items-center gap-1.5 self-start sm:self-auto bg-orange-50 dark:bg-[#2c170f] px-3.5 py-2 rounded-xl border border-orange-200 dark:border-slate-800"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-indigo-600 dark:text-amber-400" />
              <span>Browse Full 164 Item Price List &rarr;</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isDoubleA = product.name.includes("Double A") || product.category === "Official Dealer";
              const isXerox = product.name.includes("Xerox") || product.category === "In-Store Service";
              const isShape = product.name.includes("Shape") || product.category === "Shape Official Dealer";

              return (
                <div
                  key={product.id}
                  className={`relative rounded-2xl bg-white dark:bg-slate-900 border transition-all duration-200 p-6 flex flex-col justify-between ${
                    isDoubleA 
                      ? 'border-blue-300 dark:border-blue-700 shadow-md ring-2 ring-blue-500/20 bg-blue-50/20 dark:bg-blue-950/20' 
                      : isShape
                      ? 'border-amber-300 dark:border-amber-700 shadow-md ring-2 ring-amber-500/20 bg-amber-50/20 dark:bg-amber-950/20'
                      : 'border-slate-200 dark:border-slate-800 shadow-xs hover:border-amber-400 hover:shadow-md'
                  }`}
                >
                  {/* Card Header & Badges */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-amber-300/70">
                        {product.category}
                      </span>
                      {product.tag && (
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                          isDoubleA
                            ? 'bg-blue-600 text-white'
                            : isShape
                            ? 'bg-amber-500 text-slate-950 font-black'
                            : 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                        }`}>
                          {product.tag}
                        </span>
                      )}
                    </div>

                    <h4 className="font-heading font-black text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                      {product.name}
                    </h4>

                    <p className="text-slate-600 dark:text-amber-100/80 text-sm mt-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Feature Specs */}
                    <div className="mt-4 space-y-2">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-amber-200/90">
                          <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isDoubleA ? 'text-blue-600 dark:text-blue-400' : isShape ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'
                          }`} />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => onOpenEnquiry(product.name)}
                      className={`w-full py-2.5 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isDoubleA
                          ? 'btn-primary-blue'
                          : isShape
                          ? 'btn-primary'
                          : isXerox
                          ? 'btn-primary-whatsapp'
                          : 'btn-primary'
                      }`}
                    >
                      <span>
                        {isDoubleA 
                          ? 'Order Double A Paper' 
                          : isShape
                          ? 'Order Shape Items'
                          : isXerox 
                          ? 'Instant Xerox Enquiry' 
                          : 'Enquire on WhatsApp'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
