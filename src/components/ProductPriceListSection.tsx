import { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  BookOpen, 
  PenTool, 
  FileText, 
  Package, 
  Palette, 
  Sparkles, 
  Ruler, 
  Cpu, 
  Layers,
  Plus,
  Minus,
  Trash2,
  Share2,
  Printer as PrintIcon,
  MessageSquare,
  CheckCircle2,
  X,
  IndianRupee,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { OFFICIAL_PRICE_LIST, CATEGORY_LABELS, PriceListItem } from '../data/priceListData';
import { STORE_INFO } from '../data/storeData';
import { ManiStationeryLogo } from './ManiStationeryLogo';

interface ProductPriceListSectionProps {
  onOpenEnquiry: (productName?: string) => void;
}

export function ProductPriceListSection({ onOpenEnquiry }: ProductPriceListSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'sNo' | 'priceAsc' | 'priceDesc' | 'name'>('sNo');
  const [priceRangeFilter, setPriceRangeFilter] = useState<'all' | 'under10' | '10to50' | '50to150' | 'above150'>('all');
  
  // Shopping Cart / List Builder state: mapping of sNo to quantity
  const [cart, setCart] = useState<Record<number, number>>({});
  const [showCartDrawer, setShowCartDrawer] = useState(false);

  // Category Icon Resolver
  const getCategoryIcon = (categoryKey: string) => {
    switch (categoryKey) {
      case 'notebooks': return <BookOpen className="w-4 h-4" />;
      case 'pens': return <PenTool className="w-4 h-4" />;
      case 'paper': return <FileText className="w-4 h-4" />;
      case 'boxes': return <Package className="w-4 h-4" />;
      case 'art': return <Palette className="w-4 h-4" />;
      case 'adhesives': return <Sparkles className="w-4 h-4" />;
      case 'tools': return <Ruler className="w-4 h-4" />;
      case 'electrical': return <Cpu className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return OFFICIAL_PRICE_LIST.filter((item) => {
      // Search filter
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.sNo.toString() === searchQuery.trim();
      
      // Category filter
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Price filter
      let matchesPrice = true;
      if (priceRangeFilter === 'under10') matchesPrice = item.price < 10;
      else if (priceRangeFilter === '10to50') matchesPrice = item.price >= 10 && item.price <= 50;
      else if (priceRangeFilter === '50to150') matchesPrice = item.price > 50 && item.price <= 150;
      else if (priceRangeFilter === 'above150') matchesPrice = item.price > 150;

      return matchesSearch && matchesCategory && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'priceAsc') return a.price - b.price;
      if (sortBy === 'priceDesc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.sNo - b.sNo;
    });
  }, [searchQuery, selectedCategory, sortBy, priceRangeFilter]);

  // Cart operations
  const addToCart = (sNo: number) => {
    setCart((prev) => ({
      ...prev,
      [sNo]: (prev[sNo] || 0) + 1,
    }));
  };

  const removeFromCart = (sNo: number) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[sNo] > 1) {
        updated[sNo] -= 1;
      } else {
        delete updated[sNo];
      }
      return updated;
    });
  };

  const clearCart = () => setCart({});

  // Calculate cart summary
  const cartItems = useMemo(() => {
    return Object.entries(cart).map(([sNoStr, qty]) => {
      const sNo = parseInt(sNoStr, 10);
      const product = OFFICIAL_PRICE_LIST.find((p) => p.sNo === sNo);
      return {
        product: product || { sNo, name: "Item #" + sNo, price: 0, category: 'notebooks' as const },
        qty,
        total: (product?.price || 0) * qty,
      };
    });
  }, [cart]);

  const totalCartAmount = cartItems.reduce((acc, curr) => acc + curr.total, 0);
  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.qty, 0);

  // Send WhatsApp List
  const handleSendWhatsAppCart = () => {
    if (cartItems.length === 0) return;
    let message = `*Hello Ashok Kumar B (Mani Stationery), I would like to order the following items from your Official Price List:*\n\n`;
    cartItems.forEach(({ product, qty, total }, idx) => {
      message += `${idx + 1}. ${product.name} x ${qty} = ₹${total}\n`;
    });
    message += `\n*Total Estimated Amount: ₹${totalCartAmount}* (${totalCartCount} items)`;
    message += `\n\nStore Address: Bus stop, AA Complex Aalamara, Vaigai Road, Andippatti.`;
    
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Print View
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="price-list" className="py-24 bg-[#090e1a] relative overflow-hidden border-t border-amber-900/20">
      
      {/* Background Ambience */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4e2d1d]/80 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-widest mb-4">
            <ManiStationeryLogo variant="icon" size="sm" />
            <span>Official Price List &bull; 164 Stationery Items</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Transparent Pricing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-500">
              For Every School &amp; Office Need
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Directly from our verified store catalog. Browse notebooks, pens, adhesives, geometry boxes, Double A A4 paper,
            and calculators with transparent local prices in Andippatti.
          </p>

          {/* Quick Stats Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">
              &bull; 164 Verified Catalog Items
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400">
              &bull; Starting at ₹0.50 (Ice Sticks)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400">
              &bull; Double A A4 @ ₹220
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400">
              &bull; WhatsApp Order Ready
            </span>
          </div>
        </div>

        {/* SEARCH, FILTER & ACTION TOOLBAR */}
        <div className="rounded-2xl bg-[#0e1628] border border-white/10 p-4 sm:p-6 mb-8 shadow-xl">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 164 items (e.g. Apsara, Double A, Notebook, Calculator, Pen, Scale)..."
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <div className="relative shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="py-3 px-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-bold focus:outline-none focus:border-amber-400 cursor-pointer appearance-none pr-8"
                >
                  <option value="sNo" className="bg-[#0e1628]">S.No (Default)</option>
                  <option value="priceAsc" className="bg-[#0e1628]">Price: Low to High</option>
                  <option value="priceDesc" className="bg-[#0e1628]">Price: High to Low</option>
                  <option value="name" className="bg-[#0e1628]">Product Name (A-Z)</option>
                </select>
                <ArrowUpDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              </div>

              {/* Price Range Filter */}
              <div className="relative shrink-0">
                <select
                  value={priceRangeFilter}
                  onChange={(e) => setPriceRangeFilter(e.target.value as any)}
                  className="py-3 px-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-bold focus:outline-none focus:border-amber-400 cursor-pointer appearance-none pr-8"
                >
                  <option value="all" className="bg-[#0e1628]">All Prices</option>
                  <option value="under10" className="bg-[#0e1628]">Under ₹10</option>
                  <option value="10to50" className="bg-[#0e1628]">₹10 to ₹50</option>
                  <option value="50to150" className="bg-[#0e1628]">₹50 to ₹150</option>
                  <option value="above150" className="bg-[#0e1628]">Above ₹150</option>
                </select>
                <Filter className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              </div>

              {/* Cart Drawer Toggle */}
              <button
                onClick={() => setShowCartDrawer(true)}
                className="relative py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-2 cursor-pointer transition-all shrink-0 shadow-lg shadow-amber-500/20"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>My List</span>
                {totalCartCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-slate-950 text-amber-300 text-[10px] font-mono font-bold flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </button>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {Object.entries(CATEGORY_LABELS).map(([catKey, catMeta]) => {
              const isActive = selectedCategory === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => setSelectedCategory(catKey)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {getCategoryIcon(catKey)}
                  <span>{catMeta.label}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* PRICE LIST TABLE / GRID */}
        <div className="rounded-2xl bg-[#0a1120] border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Table Header Bar */}
          <div className="bg-[#121c33] px-4 sm:px-6 py-3 border-b border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>
              Showing <strong className="text-white">{filteredProducts.length}</strong> of 164 stationery items
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="hover:text-white transition-colors flex items-center gap-1 text-[11px] cursor-pointer"
                title="Print this price list"
              >
                <PrintIcon className="w-3.5 h-3.5" />
                <span>Print List</span>
              </button>
              <span className="hidden sm:inline">&bull; Vaigai Road, Andippatti</span>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-white/5 text-[11px] uppercase tracking-wider text-slate-400 font-bold border-b border-white/10">
                <tr>
                  <th className="py-3 px-4 sm:px-6 w-16">S.No</th>
                  <th className="py-3 px-4">Product Name</th>
                  <th className="py-3 px-4 hidden md:table-cell">Category</th>
                  <th className="py-3 px-4 text-right">Price (₹)</th>
                  <th className="py-3 px-4 sm:px-6 text-center w-36">Add to List</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((item) => {
                    const inCart = cart[item.sNo] || 0;
                    return (
                      <tr 
                        key={item.sNo} 
                        className={`hover:bg-white/5 transition-colors ${
                          inCart > 0 ? 'bg-amber-500/10' : ''
                        }`}
                      >
                        <td className="py-3.5 px-4 sm:px-6 font-mono text-xs text-slate-400 font-bold">
                          #{item.sNo}
                        </td>
                        
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white tracking-wide">
                              {item.name}
                            </span>
                            {item.popular && (
                              <span className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[9px] font-bold uppercase">
                                Popular
                              </span>
                            )}
                            {item.unit && (
                              <span className="text-[10px] text-slate-500 font-mono">
                                ({item.unit})
                              </span>
                            )}
                          </div>
                        </td>

                        <td className="py-3.5 px-4 hidden md:table-cell">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 text-xs capitalize">
                            {getCategoryIcon(item.category)}
                            <span>{item.category}</span>
                          </span>
                        </td>

                        <td className="py-3.5 px-4 text-right font-mono font-black text-base text-amber-400">
                          ₹{item.price.toFixed(item.price % 1 === 0 ? 0 : 2)}
                        </td>

                        <td className="py-3.5 px-4 sm:px-6 text-center">
                          {inCart > 0 ? (
                            <div className="inline-flex items-center gap-1.5 p-1 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs">
                              <button
                                onClick={() => removeFromCart(item.sNo)}
                                className="w-6 h-6 rounded flex items-center justify-center hover:bg-black/20 cursor-pointer"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="w-6 text-center font-mono font-black">
                                {inCart}
                              </span>
                              <button
                                onClick={() => addToCart(item.sNo)}
                                className="w-6 h-6 rounded flex items-center justify-center hover:bg-black/20 cursor-pointer"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => addToCart(item.sNo)}
                              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-slate-950 text-white font-bold text-xs transition-all cursor-pointer inline-flex items-center gap-1"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add</span>
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-slate-400">
                      <div className="max-w-sm mx-auto space-y-2">
                        <Search className="w-8 h-8 text-slate-500 mx-auto" />
                        <p className="font-bold text-white text-base">No stationery found</p>
                        <p className="text-xs">
                          Try searching for a different item name like "Pen", "Apsara", "Notebook", or clear the filters.
                        </p>
                        <button
                          onClick={() => {
                            setSearchQuery('');
                            setSelectedCategory('all');
                            setPriceRangeFilter('all');
                          }}
                          className="mt-2 px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-bold"
                        >
                          Clear All Filters
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>

      {/* FLOATING CART SUMMARY BAR (When items added) */}
      {totalCartCount > 0 && !showCartDrawer && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-xl w-[92%] sm:w-auto p-3 sm:px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-slate-950 shadow-2xl flex items-center justify-between gap-4 border border-amber-300 animate-in slide-in-from-bottom-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-sm block leading-none">
                {totalCartCount} items selected
              </span>
              <span className="text-xs font-mono font-bold text-slate-900 mt-0.5 block">
                Total: ₹{totalCartAmount.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCartDrawer(true)}
              className="px-4 py-2 rounded-xl bg-slate-950 text-white font-bold text-xs hover:bg-slate-900 transition-colors cursor-pointer"
            >
              View List
            </button>
            <button
              onClick={handleSendWhatsAppCart}
              className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </button>
          </div>
        </div>
      )}

      {/* CART / LIST DRAWER MODAL */}
      {showCartDrawer && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center sm:justify-end p-3 sm:p-6"
          onClick={() => setShowCartDrawer(false)}
        >
          <div 
            className="w-full max-w-md h-[90vh] bg-[#0c1424] text-white rounded-3xl border border-white/15 p-6 flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                <h3 className="font-heading font-black text-lg text-white">
                  My Stationery Order List
                </h3>
              </div>
              <button
                onClick={() => setShowCartDrawer(false)}
                className="p-1.5 rounded-lg bg-white/10 text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List items */}
            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {cartItems.length > 0 ? (
                cartItems.map(({ product, qty, total }) => (
                  <div 
                    key={product.sNo}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="font-bold text-sm text-white block truncate">
                        {product.name}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        ₹{product.price} each &bull; S.No #{product.sNo}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center gap-1.5 p-1 rounded-lg bg-white/10 text-white text-xs">
                        <button
                          onClick={() => removeFromCart(product.sNo)}
                          className="w-5 h-5 rounded flex items-center justify-center hover:bg-white/20"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-4 text-center font-mono font-bold">{qty}</span>
                        <button
                          onClick={() => addToCart(product.sNo)}
                          className="w-5 h-5 rounded flex items-center justify-center hover:bg-white/20"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-mono font-black text-amber-400 text-sm w-16 text-right">
                        ₹{total}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 p-6">
                  <ShoppingBag className="w-12 h-12 text-slate-600 mb-3" />
                  <p className="font-bold text-white text-base">Your list is empty</p>
                  <p className="text-xs mt-1">
                    Click the "+ Add" button next to any of the 164 stationery items to build your shopping or enquiry list.
                  </p>
                </div>
              )}
            </div>

            {/* Drawer Footer */}
            {cartItems.length > 0 && (
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Total Items:</span>
                  <span className="font-bold text-white">{totalCartCount} items</span>
                </div>
                <div className="flex items-center justify-between text-base">
                  <span className="font-bold text-slate-300">Estimated Total:</span>
                  <span className="font-heading font-black text-2xl text-amber-400">
                    ₹{totalCartAmount.toFixed(2)}
                  </span>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={clearCart}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white"
                    title="Clear list"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleSendWhatsAppCart}
                    className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Order to WhatsApp</span>
                  </button>
                </div>

                <p className="text-[10px] text-center text-slate-400">
                  Direct message to Ashok Kumar B &bull; Mani Stationery &bull; Andippatti
                </p>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
