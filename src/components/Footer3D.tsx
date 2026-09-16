import { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink, ShieldCheck, Heart, Sparkles, Download, Video } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { ManiStationeryLogo } from './ManiStationeryLogo';

interface Footer3DProps {
  onOpenEnquiry: () => void;
  onOpenDownloadPriceList: () => void;
}

export function Footer3D({ onOpenEnquiry, onOpenDownloadPriceList }: Footer3DProps) {
  return (
    <footer id="contact" className="relative bg-slate-50 dark:bg-slate-950 pt-20 pb-12 border-t border-slate-200 dark:border-slate-800 overflow-hidden text-slate-900 dark:text-white transition-colors duration-200">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-amber-200/40 dark:bg-amber-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-blue-100/40 dark:bg-blue-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header mirroring Screenshot 5: "Easy to find. Hard to leave." */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2 block">
            LOCATION &bull; VAIGAI ROAD
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Easy to find. <br />
            <span className="text-indigo-600 dark:text-indigo-400">
              Hard to leave.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-amber-100/80 leading-relaxed font-normal">
            Find us near the bus stop at AA Complex Aalamara on Vaigai Road. Bring your list, or just bring curiosity. Official dealer of Double A® Copier Paper &amp; Shape Stationery.
          </p>
        </div>

        {/* Two-Column Grid: Left is Vector Map Visualizer, Right is "Plan your visit" card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: Vector Map Visualizer styled after Screenshot 5 */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md relative flex flex-col min-h-[400px]">
            
            {/* Map Canvas Visualizer mirroring the screenshot layout */}
            <div className="relative flex-1 bg-slate-900 flex items-center justify-center p-6 overflow-hidden">
              
              {/* Map grid lines (subtle angled grid) */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
                  backgroundSize: '48px 48px',
                  transform: 'rotate(-12deg) scale(1.4)',
                }}
              />

              {/* Waterway / Vaigai road representation */}
              <div className="absolute w-[150%] h-12 bg-sky-800/40 transform -rotate-25 border-y border-sky-400/30" />

              {/* Radar pulse circles centering on location */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-64 h-64 rounded-full border border-teal-500/20 animate-ping opacity-30" />
                <div className="absolute w-48 h-48 rounded-full border border-teal-500/30" />
                <div className="absolute w-32 h-32 rounded-full border border-teal-400/40 bg-teal-500/5" />
                <div className="absolute w-16 h-16 rounded-full border-2 border-orange-500/50 bg-orange-500/10" />

                {/* Orange Map Pin from Screenshot 5 */}
                <div className="relative z-10 p-3 rounded-full bg-indigo-600 text-white shadow-2xl border-2 border-white transform hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 fill-white text-indigo-600" />
                </div>
              </div>

              {/* Landmark Floating Tag */}
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/20 backdrop-blur-md">
                <span className="text-xs font-bold text-white">
                  AA Complex Aalamara, Vaigai Road
                </span>
              </div>

              {/* GPS Coordinates Tag */}
              <div className="absolute bottom-5 left-5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[10px] font-mono text-slate-300">
                GPS: 10.0163° N, 77.6254° E &bull; Andippatti
              </div>

              {/* Open in Maps Button */}
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-gold absolute bottom-5 right-5 px-3.5 py-2 rounded-xl text-xs font-black shadow-lg flex items-center gap-1.5"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>

            {/* Map bottom bar */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-amber-100/80">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Live in-store assistance &amp; quick Xerox counter
              </span>
              <span className="text-slate-500 dark:text-amber-200/60 font-mono font-bold">Theni District</span>
            </div>

          </div>

          {/* Right: "Plan your visit" Card directly mirroring Screenshot 5 */}
          <div className="lg:col-span-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-7 sm:p-9 shadow-md flex flex-col justify-between">
            
            <div>
              {/* Card Title & Live status indicator */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800 mb-5">
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
                  Plan your visit
                </h3>
                
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-xs font-black">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open today &bull; closes 8:30 pm</span>
                </div>
              </div>

              {/* Rows */}
              <div className="space-y-4 text-sm">
                
                {/* Everyday Hours */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 gap-1">
                  <span className="text-slate-500 dark:text-amber-200/60 font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Every day</span>
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-base">
                    Open until 8:30 pm
                  </span>
                </div>

                {/* Phone */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 gap-1">
                  <span className="text-slate-500 dark:text-amber-200/60 font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Phone</span>
                  </span>
                  <a 
                    href={`tel:${STORE_INFO.phone}`}
                    className="font-bold text-blue-700 dark:text-blue-400 hover:underline text-base font-mono"
                  >
                    {STORE_INFO.formattedPhone}
                  </a>
                </div>

                {/* Exact Address */}
                <div className="py-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {STORE_INFO.address.busStop}
                      </h4>
                      <p className="text-slate-600 dark:text-amber-100/70 text-xs mt-0.5">
                        {STORE_INFO.address.street}
                      </p>
                      <p className="text-slate-500 dark:text-amber-200/60 text-xs">
                        {STORE_INFO.address.city}, {STORE_INFO.address.state} {STORE_INFO.address.pincode}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badges from Screenshot 5 */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-bold">
                    Xerox service
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800 text-xs font-bold">
                    Double A A4 dealer
                  </span>
                  <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-900 dark:text-orange-200 border border-orange-200 dark:border-orange-800 text-xs font-bold">
                    Shape Stationery dealer
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold">
                    Owner: Ashok Kumar B
                  </span>
                </div>

              </div>
            </div>

            {/* Bottom Buttons directly mirroring Screenshot 5 ("Call now" and "Directions") */}
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
              {/* Orange Pill "Call now" Button */}
              <a
                id="footer-call-now-btn"
                href={`tel:${STORE_INFO.phone}`}
                className="btn-primary flex-1 min-w-[130px] py-3 px-5 rounded-full font-black text-xs text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call now</span>
              </a>

              {/* Pill "Get Directions" Button */}
              <a
                id="footer-directions-btn"
                href="https://www.google.com/maps/dir/?api=1&destination=Mani+Stationery+Andippatti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[130px] py-3 px-5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-[#331d12] text-slate-800 dark:text-amber-100 font-bold text-xs border border-slate-200 dark:border-slate-800 text-center flex items-center justify-center gap-2 transition-all"
              >
                <Navigation className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Get Directions</span>
              </a>

              {/* WhatsApp Enquiry CTA */}
              <button
                id="footer-enquiry-btn"
                onClick={onOpenEnquiry}
                className="btn-primary-whatsapp py-3 px-5 rounded-full text-xs font-black flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Shop</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom copyright & neighborhood tribute */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-amber-200/70 font-medium">
          <div className="flex items-center gap-3">
            <ManiStationeryLogo variant="horizontal" size="sm" />
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">Proprietor: Ashok Kumar B</span>
            <span>&bull;</span>
            <span>Andippatti, Tamil Nadu</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={onOpenDownloadPriceList} 
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Price List (164)</span>
            </button>
            <a href="#inside-tour" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
              <Video className="w-3.5 h-3.5" />
              <span>Inside Store Tour</span>
            </a>
            <a href="#shelves" className="hover:text-slate-900 dark:hover:text-white transition-colors">What's here</a>
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">The Mani Way</a>
            <a href={`tel:${STORE_INFO.phone}`} className="text-blue-700 dark:text-blue-400 font-bold">{STORE_INFO.formattedPhone}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
