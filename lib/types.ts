export type IdolSize = '6-8"' | '8-10"' | '10-12"' | '12-15"';

export type ProductCategory =
  | "clothes"
  | "ornaments"
  | "full-set"
  | "crowns-mukut"
  | "jewelry";

export type DeitySlug =
  | "krishna"
  | "radha"
  | "radha-krishna"
  | "ganesh"
  | "lakshmi"
  | "shiva"
  | "durga"
  | "sai-baba";

export interface Product {
  id: number;
  slug: string;
  name: string;
  deity: string;
  deitySlug: DeitySlug;
  category: ProductCategory;
  price: number;
  size: IdolSize[];
  material: string;
  description: string;
  image: string;
  images: string[];
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
  createdAt: string;
}

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  quote: string;
}
