import { useState } from 'react';
import { Star, Quote, CheckCircle2, X, MessageSquare, Send } from 'lucide-react';
import { REVIEWS_DATA, STORE_INFO } from '../data/storeData';

interface ReviewsCarousel3DProps {
  onOpenEnquiry: (prefillProduct?: string) => void;
}

export function ReviewsCarousel3D({ onOpenEnquiry }: ReviewsCarousel3DProps) {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReviewText, setNewReviewText] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [submittedReview, setSubmittedReview] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !newReviewText.trim()) return;

    // Direct user to submit review via WhatsApp to Ashok Kumar B
    const message = `Hello Mani Stationery (Ashok Kumar B),\nI would like to submit a customer review for your shop:\n\nReviewer: ${reviewerName}\nReview: "${newReviewText}"\nRating: 5 Stars`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');

    setSubmittedReview(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setSubmittedReview(false);
      setNewReviewText('');
      setReviewerName('');
    }, 1800);
  };

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      
      {/* Warm accents */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-amber-200/40 dark:bg-amber-900/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-200/30 dark:bg-orange-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header directly mirroring User's Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          
          <div className="lg:col-span-8">
            <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2 block">
              KIND WORDS
            </span>

            <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
              Good supplies. <br />
              <span className="text-indigo-600 dark:text-indigo-400">
                Good people.
              </span>
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-amber-100/80 leading-relaxed max-w-xl font-normal">
              What neighbours say after finding just the right thing at Mani Stationery.
            </p>

            {/* 5.0 Rating pill and Write a review shortcut */}
            <div className="flex flex-wrap items-center gap-4 mt-5">
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-3xl sm:text-4xl text-amber-600 dark:text-amber-400">
                  5.0
                </span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
              
              <span className="text-sm text-slate-600 dark:text-amber-200/80 font-bold border-l-2 border-slate-300 dark:border-amber-900/60 pl-3 hidden sm:inline">
                {STORE_INFO.rating.totalReviews} verified community reviews
              </span>

              {/* Instant Write a Review Button directly in rating bar */}
              <button
                id="rating-write-review-btn"
                onClick={() => setShowReviewModal(true)}
                className="btn-primary px-4 py-2 rounded-full text-xs font-black shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Star className="w-3.5 h-3.5 fill-white" />
                <span>Write a review</span>
              </button>
            </div>
          </div>

          {/* Right Column: Prompt & "Write a review ->" Button */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end gap-3">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-amber-200/80 font-medium">
              Have a favourite find? Tell your neighbours.
            </p>
            <button
              id="header-write-review-btn"
              onClick={() => setShowReviewModal(true)}
              className="btn-primary px-6 py-3 rounded-full text-xs font-black shadow-md flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
            >
              <span>Write a review</span>
              <span className="text-base font-bold">&rarr;</span>
            </button>
          </div>

        </div>

        {/* Reviews Cards Grid directly matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="relative p-7 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-amber-400/60 transition-all duration-200 flex flex-col justify-between shadow-md group hover:-translate-y-1"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-400 mb-4" />
                
                {/* Authentic exact quote text */}
                <p className="font-heading font-black text-lg text-slate-900 dark:text-white leading-snug">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-7 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black text-slate-900 dark:text-white">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-amber-200/60 font-medium">
                    {review.role}
                  </p>
                </div>

                <div className="flex text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Review Call-to-Action */}
        <div className="mt-8 p-6 rounded-3xl bg-amber-50/80 dark:bg-amber-950/40 border-2 border-amber-200 dark:border-amber-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h4 className="font-heading font-black text-slate-900 dark:text-white text-sm sm:text-base">
                Bought supplies from Mani Stationery recently?
              </h4>
              <p className="text-xs text-slate-600 dark:text-amber-200/80">
                Share your experience to help local students, teachers, and neighbours in Andippatti.
              </p>
            </div>
          </div>

          <button
            id="bottom-write-review-btn"
            onClick={() => setShowReviewModal(true)}
            className="btn-primary px-6 py-3 rounded-full text-xs font-black shadow-md flex items-center gap-2 cursor-pointer shrink-0 w-full sm:w-auto justify-center"
          >
            <span>Write a review</span>
            <span className="text-base font-bold">&rarr;</span>
          </button>
        </div>

        {/* 4th Special Wholesale Review Banner */}
        {REVIEWS_DATA[3] && (
          <div className="mt-8 p-6 rounded-3xl bg-blue-50 dark:bg-blue-950/40 border-2 border-blue-200 dark:border-blue-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="flex-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-800 dark:text-blue-300 mb-1 block">
                COMMERCIAL PATRON REVIEW &bull; DOUBLE A WHOLESALE
              </span>
              <p className="text-sm sm:text-base text-blue-950 dark:text-blue-100 font-medium italic">
                "{REVIEWS_DATA[3].comment}"
              </p>
              <p className="text-xs text-blue-900 dark:text-blue-300 font-bold mt-2">
                &mdash; {REVIEWS_DATA[3].name}, <span className="text-blue-700 dark:text-blue-400 font-normal">{REVIEWS_DATA[3].role}</span>
              </p>
            </div>

            <button
              onClick={() => onOpenEnquiry("Double A Copier Paper Bulk Supply")}
              className="btn-primary-blue px-5 py-2.5 rounded-xl font-black text-xs shrink-0 shadow-sm cursor-pointer"
            >
              Partner with Ashok Kumar B &rarr;
            </button>
          </div>
        )}

      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setShowReviewModal(false)}
        >
          <div 
            className="relative max-w-md w-full bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading font-black text-2xl text-slate-900 mb-1">
              Share Your Experience
            </h3>
            <p className="text-xs text-slate-600 mb-5">
              Your words help students, schools, and neighbours discover Mani Stationery in Andippatti.
            </p>

            {submittedReview ? (
              <div className="p-6 text-center space-y-2 bg-emerald-50 rounded-2xl border border-emerald-200">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-heading font-black text-emerald-900 text-lg">Thank you so much!</h4>
                <p className="text-xs text-emerald-700">Opening WhatsApp to share your kind feedback with Ashok Kumar B.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., K. Murugan (Local Teacher)"
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Your Rating
                  </label>
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-amber-500 cursor-pointer" />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Your Review
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you liked (notebook quality, fast Xerox, polite owner, Double A stock...)"
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-whatsapp w-full py-3.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Review to Shop</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
