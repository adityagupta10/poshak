import { Metadata } from "next";
import { WishlistPageClient } from "@/components/wishlist/wishlist-page-client";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Your saved devotional products at Poshak."
};

export default function WishlistPage() {
  return <WishlistPageClient />;
}
