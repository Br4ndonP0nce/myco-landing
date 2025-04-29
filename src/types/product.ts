// src/types/product.ts
export interface ProductApplication {
  name: string;
  description: string;
}

export interface KeyCompound {
  name: string;
  description: string;
}

export interface ResearchStudy {
  title: string;
  authors: string;
  publication: string;
  year: string;
  url: string;
}

export interface ProductData {
  title: string;
  scientificName: string;
  description: string;
  longDescription: string;
  keyCompounds: KeyCompound[];
  applications: ProductApplication[];
  cultivationDetails: string;
  certifications: string[];
  image: string;
  additionalImages: string[];
  status: "Available" | "Coming Soon" | string;
  slug: string;
  featured: boolean;
  researchStudies: ResearchStudy[];
}