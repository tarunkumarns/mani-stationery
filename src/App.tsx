import { useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { Interactive3DShowcase } from './components/Interactive3DShowcase';
import { AboutAndDealer } from './components/AboutAndDealer';
import { DoubleAXeroxPosterSection } from './components/DoubleAXeroxPosterSection';
import { StoreInsideGifSection } from './components/StoreInsideGifSection';
import { ProductCatalog3D } from './components/ProductCatalog3D';
import { ReviewsCarousel3D } from './components/ReviewsCarousel3D';
import { Footer3D } from './components/Footer3D';
import { EnquiryModal3D } from './components/EnquiryModal3D';
import { DownloadPriceListModal } from './components/DownloadPriceListModal';
import { Phone, MessageSquare, Download } from 'lucide-react';
import { STORE_INFO } from './data/storeData';

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [downloadPriceListOpen, setDownloadPriceListOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('AA Double A4 Paper (80 GSM)');

  const handleOpenEnquiry = (productName?: string) => {
    if (productName) {
      setSelectedProduct(productName);
    }
    setEnquiryOpen(true);
  };

  const handleOpenDownloadPriceList = () => {
    setDownloadPriceListOpen(true);
  };

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-amber-100 flex flex-col selection:bg-indigo-600 selection:text-white transition-colors duration-200">
        {/* Top Floating Warm Navigation */}
        <Navbar 
          onOpenEnquiry={handleOpenEnquiry} 
          onOpenDownloadPriceList={handleOpenDownloadPriceList} 
        />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section with Store Video and Authentic Brand Header */}
        <Hero3D 
          onOpenEnquiry={handleOpenEnquiry} 
          onOpenDownloadPriceList={handleOpenDownloadPriceList} 
        />

        {/* About Us & Official Dealer Announcement for AA Double A4 Paper */}
        <AboutAndDealer onOpenEnquiry={handleOpenEnquiry} />

        {/* Look Inside Mani Stationery - Interactive Tour */}
        <StoreInsideGifSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Official Double A Copier Paper & High-Speed Xerox Station Poster Vitrine */}
        <DoubleAXeroxPosterSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Hand-Picked Essentials & Student Bundles Showcase */}
        <Interactive3DShowcase onOpenEnquiry={handleOpenEnquiry} />

        {/* Curated Stationery Aisles */}
        <ProductCatalog3D onOpenEnquiry={handleOpenEnquiry} />

        {/* Customer Reviews Section */}
        <ReviewsCarousel3D onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* Footer with Direct Phone & Google Maps */}
      <Footer3D 
        onOpenEnquiry={handleOpenEnquiry} 
        onOpenDownloadPriceList={handleOpenDownloadPriceList} 
      />

      {/* Enquiry Modal Form */}
      <EnquiryModal3D 
        isOpen={enquiryOpen} 
        onClose={() => setEnquiryOpen(false)} 
        defaultProduct={selectedProduct} 
      />

      {/* Download Price List Modal (164 Items) */}
      <DownloadPriceListModal
        isOpen={downloadPriceListOpen}
        onClose={() => setDownloadPriceListOpen(false)}
        onOpenEnquiry={handleOpenEnquiry}
      />

        {/* Mobile Floating Quick Action Bar */}
        <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex items-center gap-2 p-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-2 border-slate-300 dark:border-slate-800 shadow-2xl">
          <button
            onClick={handleOpenDownloadPriceList}
            className="btn-primary-gold px-3 py-3 rounded-xl font-black text-xs flex items-center justify-center gap-1 shadow-sm cursor-pointer"
            title="Download Price List"
          >
            <Download className="w-4 h-4" />
            <span>Price List</span>
          </button>
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="btn-primary flex-1 py-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call Shop</span>
          </a>
          <button
            onClick={() => handleOpenEnquiry()}
            className="btn-primary-whatsapp flex-1 py-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquiry</span>
          </button>
        </div>
      </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
