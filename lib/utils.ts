import { ProductCategory } from "@/lib/types";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

export const formatPrice = (value: number): string => currencyFormatter.format(value);

export const categoryLabelMap: Record<ProductCategory, string> = {
  clothes: "Clothes",
  ornaments: "Ornaments",
  "full-set": "Full Set",
  "crowns-mukut": "Crown / Mukut",
  jewelry: "Jewelry"
};

export const shippingCost = (subtotal: number): number => (subtotal >= 2000 ? 0 : 99);
