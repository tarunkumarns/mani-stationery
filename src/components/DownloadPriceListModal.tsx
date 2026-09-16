import { useState } from 'react';
import { X, Download, Printer, FileSpreadsheet, MessageSquare, Check, Sparkles, BookOpen, Layers } from 'lucide-react';
import { downloadPriceListCSV, printOrSavePriceListPDF } from '../utils/downloadPriceList';
import { CATEGORY_LABELS } from '../data/priceListData';
import { STORE_INFO } from '../data/storeData';

interface DownloadPriceListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (productName?: string) => void;
}

export function DownloadPriceListModal({ isOpen, onClose, onOpenEnquiry }: DownloadPriceListModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownloadCsv = () => {
    downloadPriceListCSV();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const handlePrintPdf = () => {
    printOrSavePriceListPDF();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-2xl overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#e05a2b] via-amber-400 to-blue-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Official 2026 Catalog</span>
          </div>

          <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Download Price List
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Complete 164-item verified price catalog for Mani Stationery, Andippatti.
          </p>
        </div>

        {/* Breakdown Badges */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>Catalog Breakdown</span>
            </span>
            <span className="text-indigo-600">164 Items Total</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
            <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-200">
              <span>Notebooks &amp; Registers</span>
              <strong className="text-slate-900">32</strong>
            </div>
            <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-200">
              <span>Pens &amp; Inks</span>
              <strong className="text-slate-900">35</strong>
            </div>
            <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-200">
              <span>Paper &amp; Double A</span>
              <strong className="text-slate-900">18</strong>
            </div>
            <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-200">
              <span>Pouches &amp; Kits</span>
              <strong className="text-slate-900">22</strong>
            </div>
            <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-200">
              <span>Art &amp; Craft</span>
              <strong className="text-slate-900">17</strong>
            </div>
            <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-200">
              <span>Adhesives &amp; Tapes</span>
              <strong className="text-slate-900">18</strong>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Download CSV */}
          <button
            onClick={handleDownloadCsv}
            className="w-full btn-primary py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md cursor-pointer transition-transform active:scale-[0.98]"
          >
            {downloaded ? (
              <>
                <Check className="w-5 h-5 text-white" />
                <span>Downloaded Successfully!</span>
              </>
            ) : (
              <>
                <FileSpreadsheet className="w-5 h-5" />
                <span>Download Excel / CSV (164 Items)</span>
              </>
            )}
          </button>

          {/* Print or Save as PDF */}
          <button
            onClick={handlePrintPdf}
            className="w-full py-3.5 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 border-2 border-slate-200 text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Printer className="w-5 h-5 text-blue-600" />
            <span>Print or Save as PDF Sheet</span>
          </button>

          {/* WhatsApp Direct */}
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry("Complete 164-Item Price List Enquiry");
            }}
            className="w-full btn-primary-whatsapp py-3 px-5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire Wholesale Bulk Pricing via WhatsApp</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="mt-5 pt-3 border-t border-slate-100 text-center text-[11px] text-slate-500">
          <span>Proprietor: <strong>{STORE_INFO.ownerName}</strong> &bull; {STORE_INFO.formattedPhone}</span>
        </div>
      </div>
    </div>
  );
}
