import { motion } from 'motion/react';
import { 
  Compass, 
  MessageSquare,
  Printer, 
  BookOpen, 
  Star,
  ArrowRight
} from 'lucide-react';
import { ManiStationeryLogo } from './ManiStationeryLogo';

interface StoreInsideGifSectionProps {
  onOpenEnquiry: (productName?: string) => void;
}

export function StoreInsideGifSection({ onOpenEnquiry }: StoreInsideGifSectionProps) {
  return (
    <section id="inside-tour" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      
      {/* Ambient decorative gradients */}
      <div className="absolute top-1/4 right-[-5%] w-[500px] h-[500px] bg-amber-200/40 dark:bg-amber-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[600px] h-[600px] bg-indigo-200/40 dark:bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-800 text-xs font-black uppercase tracking-widest mb-4 shadow-sm"
          >
            <Compass className="w-4 h-4" />
            <span>AUTHENTIC STORE TOUR</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight"
          >
            Take a Look <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-indigo-600 dark:from-amber-400 dark:to-indigo-400">
              Inside Mani Stationery
            </span>
          </motion.h2>
        </div>

        {/* INTERACTIVE STORE TOUR STAGE - Glassmorphism Bento Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Visual Image Stage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="lg:col-span-8 relative rounded-3xl bg-white dark:bg-slate-900 p-2 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col"
          >
            {/* Top Bar with Official Shop Crest */}
            <div className="flex flex-wrap items-center justify-between px-4 py-3 text-xs mb-2 gap-2 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <ManiStationeryLogo variant="icon" size="sm" />
                <div>
                  <span className="font-heading font-black text-xs sm:text-sm tracking-wide text-slate-900 dark:text-white block leading-none">
                    MANI STATIONERY &bull; SHOP FLOOR
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mt-1 block">
                    Vaigai Road, Andippatti &bull; Authentic Interior
                  </span>
                </div>
              </div>
              <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open Now
              </span>
            </div>

            {/* VISUAL TOUR CANVAS: Fallback logic for uploaded photo */}
            <div className="relative w-full rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] shadow-inner select-none bg-slate-100 dark:bg-slate-950 flex-grow group">
              <img 
                src="/7a6f2dd4-e896-4ca6-bd7f-9d2241a358bc.jpg"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=2000" }}
                alt="Inside Mani Stationery"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
              
              {/* Floating Review Prompt inside the image */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:bottom-6">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Mani+Stationery+Andippatti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 shadow-2xl hover:scale-105 transition-transform text-slate-900 dark:text-white font-black text-xs sm:text-sm"
                >
                  <div className="flex -space-x-1">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  </div>
                  <span className="ml-1">Review us on Google Maps</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Features Bento Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex-1 flex flex-col justify-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 dark:bg-amber-900/20 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 relative z-10 border border-amber-200 dark:border-amber-800">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-black text-slate-900 dark:text-white text-lg relative z-10">
                Over 164 Items
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 relative z-10 leading-relaxed">
                Notebooks, long size, ledgers, pens, school kits, and art colors fully stocked.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex-1 flex flex-col justify-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 relative z-10 border border-indigo-200 dark:border-indigo-800">
                <Printer className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-black text-slate-900 dark:text-white text-lg relative z-10">
                Instant Xerox
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 relative z-10 leading-relaxed">
                High-speed crisp copies, printouts, spiral binding, and certificate lamination.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-3xl bg-slate-900 dark:bg-slate-950 border border-slate-800 shadow-lg flex-1 flex flex-col justify-center relative overflow-hidden"
            >
              <h4 className="font-heading font-black text-white text-lg mb-2 relative z-10">
                Can't find it?
              </h4>
              <p className="text-sm text-slate-400 mb-4 relative z-10 leading-relaxed">
                Message Ashok directly to ask if we have your item in stock.
              </p>
              <button
                onClick={() => onOpenEnquiry("Shop Visit & Directions")}
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                Message Store
              </button>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}
