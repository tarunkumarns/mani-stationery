import { StoreInfo, Review, ProductItem, DoubleAPosterData } from '../types';

export const STORE_INFO: StoreInfo = {
  name: "MANI STATIONERY",
  ownerName: "Ashok Kumar B",
  ownerTitle: "Your local stationery shop owner",
  topBanner: "A bright little shop for school days, fresh starts & good ideas.",
  tagline: "NEIGHBOURHOOD STATIONERY · JAKKAMPATTI",
  heroHeadline: "Small things. Big ideas.",
  heroSubtitle: "The kind of shop where you come in for one pen and leave with a fresh notebook, a better plan, and everything school needs for tomorrow.",
  phone: "075388 70090",
  formattedPhone: "075388 70090",
  whatsappNumber: "917538870090",
  email: "contact@manistationery.com",
  address: {
    busStop: "Bus stop, AA Complex Aalamara",
    street: "Vaigai Road, Jakkampatti",
    area: "Jakkampatti",
    city: "Andippatti",
    district: "Theni",
    state: "Tamil Nadu",
    pincode: "625512",
    landmark: "Bus stop, AA Complex Aalamara, Vaigai Road",
    fullText: "Bus stop, AA Complex Aalamara, Vaigai Road, Jakkampatti, Andippatti, Tamil Nadu 625512",
  },
  services: [
    "Xerox service",
    "Double A A4 dealer",
    "School supplies",
    "College notebooks",
    "Little creative finds",
    "Office stationery"
  ],
  rating: {
    score: 5.0,
    maxScore: 5,
    totalReviews: 4,
    lovedBy: "Loved by the local community"
  },
  googleMapsUrl: "https://maps.app.goo.gl/scCc7kohUM6G1t4Z9",
  googleMapsEmbedUrl: "https://maps.app.goo.gl/scCc7kohUM6G1t4Z9",
  operatingHours: {
    statusText: "Open today · until 8:30 pm",
    everyday: "Open until 8:30 pm",
    weekdays: "Mon - Sat: 7:30 AM – 8:30 PM",
    sunday: "Sunday: 8:30 AM – 4:00 PM",
  },
  dealerDetails: {
    brand: "Double A®",
    product: "AA Double A4 Paper (80 GSM & 75 GSM)",
    coverage: ["Andippatti", "Jakkampatti", "Periyakulam", "Kandamanur", "All Theni District"],
    minOrderBoxes: 10,
    benefits: [
      "30 Million Fibers Per Gram for cleaner & smoother performance",
      "Thicker & Stronger Sheets — guaranteed jam-free photocopying",
      "Sharper, More Vibrant Contrast for laser, inkjet, and offset printing",
      "Direct Doorstep Delivery across Theni District safely and on time",
      "Special wholesale rates for Xerox points, schools, colleges, and offices",
    ],
  },
  shapeDealerDetails: {
    brand: "Shape Stationery",
    title: "Official Authorized Dealer - Shape Stationery Items",
    officialBadge: "OFFICIAL DEALER",
    description: "Official dealer for genuine Shape stationery products across Andippatti and Theni District — trusted mathematical instruments, precision scales, exam pouches, erasers, and school essentials.",
    items: [
      "Shape Precision 15cm & 30cm Mathematical Rulers",
      "Shape Mathematical Geometry Instrument Sets",
      "Shape Transparent Exam Pouches & Zipper Bags",
      "Shape Dust-Free School Erasers & Sharpeners",
      "Shape High-Grip Pencils & Drafting Tools",
      "Shape Student Compass & Divider Sets",
    ],
  },
};

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    name: "A local customer",
    role: "Verified local review",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    comment: "Very awesome product in the store and then Affordable price of the product",
    date: "Verified review",
    verified: true,
  },
  {
    id: "rev-2",
    name: "A happy shopper",
    role: "Verified local review",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    comment: "New collection & products are good quality",
    date: "Verified review",
    verified: true,
  },
  {
    id: "rev-3",
    name: "A local customer",
    role: "Verified local review",
    avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    comment: "Good product",
    date: "Verified review",
    verified: true,
  },
  {
    id: "rev-4",
    name: "S. Meenakshisundaram",
    role: "Commercial Print & Xerox Center Proprietor",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    comment: "Official supplier for Double A paper in Theni district! We order bulk cartons of Double A4 paper regularly for our Xerox center. Doorstep delivery is prompt and pricing is the most honest on Vaigai Road.",
    date: "Regular patron",
    verified: true,
  },
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  {
    id: "prod-1",
    name: "Notebooks",
    category: "Student Essentials",
    description: "Fresh pages for class notes, plans, lists and all the ideas in between. Long notebooks, king-size unruled & ruled registers, and graph books.",
    specs: ["write \\A it down collection", "Bleed-proof smooth writing paper", "Durable hard & spiral bindings", "Classmate & premium brands"],
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    tag: "Top Seller",
    featured: true,
  },
  {
    id: "prod-2",
    name: "School Supplies",
    category: "Everyday Essentials",
    description: "The useful things that make Monday mornings easier. Pens, pencils, geometry boxes, erasers, sharpeners, and drafting tools.",
    specs: ["Smooth ball & roller pens", "Standard geometry & compass sets", "Safe non-toxic glue & scissors", "Exam pads & pouches"],
    imageUrl: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80",
    tag: "School Days",
  },
  {
    id: "prod-3",
    name: "Little Finds",
    category: "Creative & Extras",
    description: "Small creative extras worth spotting on the shelf. Colorful sticky notes, art pastels, glitter pens, and clever desk novelties.",
    specs: ["Artist acrylics & water colours", "Creative pastel sticky pads", "Fine felt markers & brush pens", "Desk organizers & files"],
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80",
    tag: "Creative Picks",
  },
  {
    id: "prod-4",
    name: "AA Double A4 Paper (80 & 75 GSM)",
    category: "Official Dealer",
    description: "Authorized dealer of Double A copier paper with 30 million fibers per gram. Jam-free photocopying for commercial Xerox and offices.",
    specs: ["Size: A4 (210 x 297 mm)", "Ream: 500 Sheets", "Min 10 Boxes for Doorstep Delivery", "Wholesale Rates for Theni District"],
    imageUrl: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&auto=format&fit=crop&q=80",
    tag: "Authorized Dealer",
    featured: true,
  },
  {
    id: "prod-5",
    name: "Xerox & Fast Photocopying Service",
    category: "In-Store Service",
    description: "Instant high-clarity black & white and colour photocopying, document printouts, spiral binding, and project record laminations.",
    specs: ["Crisp laser printouts", "High-speed multi-copy photocopy", "Durable spiral & comb binding", "School & college project records"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    tag: "Instant Service",
  },
  {
    id: "prod-6",
    name: "Shape Stationery Items",
    category: "Shape Official Dealer",
    description: "Authorized dealer of genuine Shape brand stationery items. Precision mathematical scales, geometry boxes, student exam pouches, erasers, and drawing tools.",
    specs: ["Official Shape Brand Dealer", "Mathematical scales & geometry sets", "Clear exam pouches & zipper bags", "Student drafting & geometry supplies"],
    imageUrl: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=600&auto=format&fit=crop&q=80",
    tag: "Official Dealer: Shape",
    featured: true,
  },
];

export const DOUBLE_A_POSTER_DATA: DoubleAPosterData = {
  title: "PREMIUM PAPER, SHARPER & MORE VIBRANT",
  subtitle: "Experience the Difference with World's No. 1 Premium Quality Paper",
  tagline: "SUCCESS BEGINS WITH Double A",
  motto: "Better Paper. Better Performance. Better Business.",
  topFeatures: [
    {
      id: "fibers",
      title: "30 MILLION FIBERS",
      subtitle: "PER GRAM",
    },
    {
      id: "smooth",
      title: "SMOOTHER",
      subtitle: "PERFORMANCE",
    },
    {
      id: "thick",
      title: "THICKER",
      subtitle: "SHEETS",
    },
    {
      id: "vibrant",
      title: "SHARP & VIBRANT",
      subtitle: "PRINT QUALITY",
    },
  ],
  pillars: [
    {
      id: "reliable",
      badge: "RELIABLE QUALITY",
      subtitle: "Consistent quality for professional results.",
      icon: "Printer",
    },
    {
      id: "restock",
      badge: "TIME TO RESTOCK!",
      subtitle: "Your business never stops. We deliver quality, always.",
      icon: "Truck",
    },
    {
      id: "fast",
      badge: "FAST PRINT. FAST RESULTS.",
      subtitle: "Power your prints with speed and brilliance.",
      icon: "Zap",
    },
  ],
  reasons: [
    {
      title: "Premium Quality Copier Paper",
      description: "Consistent quality for professional results",
    },
    {
      title: "30 Million Fibers per Gram",
      description: "For smoother and cleaner performance",
    },
    {
      title: "Thicker & Stronger Sheets",
      description: "Better performance, jam-free results",
    },
    {
      title: "Sharp & Vibrant Print Quality",
      description: "Brighter whites and sharper colors",
    },
    {
      title: "Suitable for Laser & Inkjet Printers",
      description: "Perfect for all your printing needs",
    },
    {
      title: "Trusted Worldwide",
      description: "Used in 130+ countries by millions",
    },
  ],
  services: [
    {
      title: "DOORSTEP DELIVERY",
      description: "Delivered to your doorstep safely and on time.",
    },
    {
      title: "MINIMUM 10 BOX ORDER",
      description: "Place a minimum order of 10 boxes.",
    },
    {
      title: "BULK ORDERS ACCEPTED",
      description: "Best quality for every quantity.",
    },
    {
      title: "STATIONERY POINT WELCOME",
      description: "All stationery points are welcome.",
    },
    {
      title: "FOR EVERY NEED",
      description: "Offices | Schools | Colleges | Xerox Shops | Dealers Welcome",
    },
  ],
  dealerInfo: {
    authorizedTitle: "AUTHORIZED RETAILER - THENI DISTRICT (AUNDIPATTI, PERIYAKULAM, KANDAMANUR)",
    coverageText: "Aundipatti, Periyakulam, Kandamanur, and all surrounding areas",
    storeName: "MANI STATIONERY",
    phone: "7538870090",
    badges: ["QUALITY PAPER", "TRUSTED PARTNER", "LOCAL SUPPORT"],
    slogan: "Better Paper. Better Performance. Better Business.",
  },
};
