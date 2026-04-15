import { ShopPageClient } from "@/components/shop/shop-page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Launches",
  description: "Explore our latest handcrafted devotional collection."
};

export default function NewLaunchesPage() {
  return (
    <ShopPageClient 
      initialSort="newest" 
      pageTitle="Lately Handcrafted"
      pageSubtitle="New Arrivals"
    />
  );
}
