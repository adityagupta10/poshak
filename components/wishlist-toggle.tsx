"use client";

import { Heart } from "lucide-react";
import { useWishlistStore } from "@/store/wishlist-store";

interface WishlistToggleProps {
  productId: number;
}

export function WishlistToggle({ productId }: WishlistToggleProps) {
  const toggle = useWishlistStore((state) => state.toggle);
  const wished = useWishlistStore((state) => state.isWished(productId));

  return (
    <button
      type="button"
      onClick={() => toggle(productId)}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-maroon/20 px-5 py-3 text-sm font-semibold text-maroon transition hover:bg-maroon hover:text-cream"
    >
      <Heart className={`h-4 w-4 ${wished ? "fill-current" : ""}`} />
      {wished ? "Saved to Wishlist" : "Add to Wishlist"}
    </button>
  );
}
