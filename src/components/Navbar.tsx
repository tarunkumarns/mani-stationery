import { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Sparkles, Menu, X, FileText, Download, Compass, Star, Sun, Moon, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { ManiStationeryLogo } from './ManiStationeryLogo';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenEnquiry: (prefillProduct?: string) => void;
  onOpenDownloadPriceList: () => void;
}

export function Navbar({ onOpenEnquiry, onOpenDownloadPriceList }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="main-navigation" 
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-200 flex flex-col shadow-xs"
    >
      {/* Main Navigation Bar with Light & Dark Mode */}
      <div 
        className={`w-full transition-colors duration-200 ${
          scrolled 
            ? 'py-2.5 bg-white/98 dark:bg-[#1a0f0a]/98 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-md' 
            : 'py-3 bg-white/92 dark:bg-[#1f130d]/92 backdrop-blur-sm border-b border-slate-200/80 dark:border-amber-950/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Super Bold MANI */}
          <a href="#hero" className="flex items-center gap-2.5 group focus:outline-none">
            <ManiStationeryLogo variant="horizontal" size="md" />
            <div className="hidden lg:flex items-center gap-1.5 ml-1">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Double A Dealer
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                Shape Dealer
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-5 text-sm font-bold text-slate-700 dark:text-amber-100/90">
            <a href="#shelves" className="hover:text-indigo-600 dark:hover:text-amber-400 transition-colors">
              What's here
            </a>
            
            {/* Download Price List Button */}
            <button 
              onClick={onOpenDownloadPriceList}
              className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 text-slate-900 dark:text-amber-100 bg-amber-50 dark:bg-[#2e1910] hover:bg-amber-100 dark:hover:bg-[#3d2217] px-3 py-1.5 rounded-xl border border-amber-300 dark:border-amber-800/60 shadow-xs cursor-pointer text-xs font-black"
            >
              <Download className="w-3.5 h-3.5 text-indigo-600 dark:text-amber-400" />
              <span>Price List</span>
            </button>

            <a href="#double-a-poster" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors flex items-center gap-1 text-blue-900 dark:text-blue-300">
              <span className="font-extrabold text-blue-600 dark:text-blue-400">Double A</span>
              <span>&amp; Xerox</span>
            </a>
            <a href="#inside-tour" className="hover:text-indigo-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Store Tour</span>
            </a>
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-amber-400 transition-colors">
              Our story
            </a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-amber-400 transition-colors">
              Find us
            </a>
          </nav>

          {/* Right Action Buttons + Dark / Light Mode Toggle */}
          <div className="hidden sm:flex items-center gap-2">
            
            {/* Dark / Light Mode Switcher Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#2c170f] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-amber-300 hover:bg-slate-200 dark:hover:bg-[#381f14] transition-all cursor-pointer shadow-xs flex items-center justify-center"
              aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
              title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Call the shop button */}
            <a
              id="nav-call-the-shop-btn"
              href={`tel:${STORE_INFO.phone}`}
              className="btn-primary px-3.5 py-2 rounded-xl text-xs font-black shadow-sm flex items-center gap-1.5"
              title={`Call ${STORE_INFO.formattedPhone}`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call shop</span>
            </a>

            {/* WhatsApp Enquiry Button */}
            <button
              id="nav-enquiry-btn"
              onClick={() => onOpenEnquiry()}
              className="btn-primary-whatsapp px-3.5 py-2 rounded-xl text-xs font-black shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex sm:hidden items-center gap-1.5">
            {/* Dark / Light Mode Button for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#2c170f] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-amber-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={onOpenDownloadPriceList}
              className="btn-primary-gold px-2.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1"
              title="Download Price List"
            >
              <Download className="w-3.5 h-3.5" />
              <span>List</span>
            </button>

            <a
              href={`tel:${STORE_INFO.phone}`}
              className="btn-primary px-2.5 py-1.5 rounded-xl text-white text-xs font-black flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#2c170f] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-amber-200 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-[#1a0f0a] border-b-2 border-amber-900/20 dark:border-amber-950 px-5 py-4 flex flex-col gap-2.5 shadow-xl animate-in slide-in-from-top duration-150">
            {/* Theme Toggle Bar in Mobile Menu */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-amber-200/80">
              <span>Display Theme:</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#2b170e] text-slate-800 dark:text-amber-300 font-extrabold border border-slate-200 dark:border-slate-800"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
                <span>{isDark ? 'Dark Mode' : 'Light Mode'}</span>
              </button>
            </div>

            {/* Prominent Download Price List in Mobile Menu */}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownloadPriceList();
              }}
              className="w-full text-left text-amber-950 dark:text-amber-100 font-black py-3 px-3.5 text-sm flex items-center justify-between bg-amber-100 dark:bg-[#341b10] hover:bg-amber-200 rounded-2xl border-2 border-amber-300 dark:border-amber-800/60 shadow-sm cursor-pointer mb-1"
            >
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Download Price List (164 Items)</span>
              </div>
              <span className="text-[10px] uppercase font-black bg-indigo-600 text-white px-2 py-0.5 rounded-full">PDF / CSV</span>
            </button>

            <a 
              href="#shelves" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-800 dark:text-amber-100 hover:text-indigo-600 font-bold py-2 text-sm flex items-center gap-2 border-b border-slate-100 dark:border-slate-800"
            >
              <FileText className="w-4 h-4 text-amber-500" />
              <span>What's here (Explore the Shelves)</span>
            </a>
            <a 
              href="#double-a-poster" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-blue-900 dark:text-blue-300 font-bold py-2 text-sm flex items-center gap-2 border-b border-slate-100 dark:border-slate-800"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Double A Paper &amp; Xerox Dealer</span>
            </a>
            <a 
              href="#inside-tour" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-800 dark:text-amber-100 hover:text-indigo-600 font-bold py-2 text-sm flex items-center gap-2 border-b border-slate-100 dark:border-slate-800"
            >
              <Compass className="w-4 h-4 text-amber-500" />
              <span>Inside Store Tour &amp; Photo</span>
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-800 dark:text-amber-100 hover:text-indigo-600 font-bold py-2 text-sm flex items-center gap-2 border-b border-slate-100 dark:border-slate-800"
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>The Mani Way &bull; Official Dealerships</span>
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-800 dark:text-amber-100 hover:text-indigo-600 font-bold py-2 text-sm flex items-center gap-2 border-b border-slate-100 dark:border-slate-800"
            >
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Kind words (Verified Reviews 5.0 ★)</span>
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-800 dark:text-amber-100 hover:text-indigo-600 font-bold py-2 text-sm flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-indigo-600" />
              <span>Find us (Vaigai Road, Andippatti)</span>
            </a>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="btn-primary w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {STORE_INFO.formattedPhone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="btn-primary-whatsapp w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order &amp; Enquiry</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
