export interface Review {
  id: string;
  name: string;
  role: string;
  avatarUrl?: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: string[];
  imageUrl: string;
  tag?: string;
  featured?: boolean;
}

export interface StoreInfo {
  name: string;
  ownerName: string;
  ownerTitle: string;
  topBanner: string;
  tagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  phone: string;
  formattedPhone: string;
  whatsappNumber: string;
  email: string;
  address: {
    busStop: string;
    street: string;
    area: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    landmark: string;
    fullText: string;
  };
  services: string[];
  rating: {
    score: number;
    maxScore: number;
    totalReviews: number;
    lovedBy: string;
  };
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  operatingHours: {
    statusText: string;
    everyday: string;
    weekdays: string;
    sunday: string;
  };
  dealerDetails: {
    brand: string;
    product: string;
    coverage: string[];
    minOrderBoxes: number;
    benefits: string[];
  };
  shapeDealerDetails?: {
    brand: string;
    title: string;
    officialBadge: string;
    description: string;
    items: string[];
  };
}

export interface EnquiryFormData {
  name: string;
  phoneNumber: string;
  productOfInterest: string;
  quantityOrNotes?: string;
}

export interface DoubleAPosterData {
  title: string;
  subtitle: string;
  tagline: string;
  motto: string;
  topFeatures: { id: string; title: string; subtitle: string }[];
  pillars: { id: string; badge: string; subtitle: string; icon: string }[];
  reasons: { title: string; description: string }[];
  services: { title: string; description: string }[];
  dealerInfo: {
    authorizedTitle: string;
    coverageText: string;
    storeName: string;
    phone: string;
    badges: string[];
    slogan: string;
  };
}
