import { ShopPageClient } from "@/components/shop/shop-page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Combos & Sets",
  description: "Complete shringar sets and devotional combos."
};

export default function CombosPage() {
  return (
    <ShopPageClient 
      initialCategory="full-set" 
      pageTitle="Complete Shringar Kits"
      pageSubtitle="Combos & Sets"
    />
  );
}
