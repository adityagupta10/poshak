import { ShopPageClient } from "@/components/shop/shop-page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Sellers",
  description: "Our most loved devotional shringar collections."
};

export default function BestSellersPage() {
  return (
    <ShopPageClient 
      onlyBestsellers={true} 
      pageTitle="Most Loved Collections"
      pageSubtitle="Best Sellers"
    />
  );
}
