"use client";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

interface AddToCartButtonProps {
  productId: number;
  label?: string;
  className?: string;
}

export function AddToCartButton({ productId, label = "Add to Cart", className }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      type="button"
      onClick={() => addItem(productId)}
      className={
        className ??
        "inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-cream transition hover:bg-saffron hover:text-maroon"
      }
    >
      <ShoppingCart className="h-4 w-4" />
      {label}
    </button>
  );
}
