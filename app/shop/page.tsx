import { Metadata } from "next";
import { ShopPageClient } from "@/components/shop/shop-page-client";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse all deity poshak, ornaments, crowns, jewelry, and full shringar sets at Poshak."
};

export default function ShopPage() {
  return <ShopPageClient />;
}
