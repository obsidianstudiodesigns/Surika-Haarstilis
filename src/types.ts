export type Language = 'af' | 'en';

export interface ServiceItem {
  id: string;
  name: { af: string; en: string };
  category: 'cut' | 'color' | 'treatment' | 'styling';
  description: { af: string; en: string };
  price: string;
  duration: string;
  featured?: boolean;
  popular?: boolean;
}

export interface TransformationItem {
  id: string;
  title: { af: string; en: string };
  tagline: { af: string; en: string };
  category: 'highlights' | 'bleach-tone' | 'creative-color' | 'vibrant-red';
  beforeText: { af: string; en: string };
  afterText: { af: string; en: string };
  productUsed: string;
  formulaHighlight: { af: string; en: string };
  imageSrc: string;
  beforeImageSrc?: string;
  afterImageSrc?: string;
  productImageSrc?: string;
  promise: { af: string; en: string };
}

export interface SpecialOffer {
  id: string;
  title: { af: string; en: string };
  discount: string;
  description: { af: string; en: string };
  quote: { af: string; en: string };
  badge?: { af: string; en: string };
}

export interface Testimonial {
  id: string;
  name: string;
  role: { af: string; en: string };
  comment: { af: string; en: string };
  service: { af: string; en: string };
  rating: number;
}
