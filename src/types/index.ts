export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  symptoms: string[];
  whenNeeded: string;
  steps: string[];
  priceFrom: number;
  relatedBrands: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface Brand {
  slug: string;
  name: string;
  country: string;
  description: string;
  commonIssues: string[];
  popularModels: string[];
  repairFeatures: string;
  priceFrom: number;
  relatedServices: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface District {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  arrivalTime: string;
  features: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  metaTitle: string;
  metaDescription: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PriceCategory {
  category: string;
  items: PriceItem[];
}

export interface PriceItem {
  name: string;
  price: string;
  unit: string;
}

export interface Testimonial {
  name: string;
  brand: string;
  text: string;
  rating: number;
  date: string;
}

export interface CaseWork {
  title: string;
  description: string;
  brand: string;
  service: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
