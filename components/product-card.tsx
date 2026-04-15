"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types";
import { categoryLabelMap, formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggle);
  const isWished = useWishlistStore((state) => state.isWished(product.id));

  return (
    <article className="group mandala-border animate-rise-in overflow-hidden rounded-2xl border border-maroon/10 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/product/${product.id}`} className="relative block aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-wide text-soft-green">{product.deity}</p>
            <Link href={`/product/${product.id}`} className="line-clamp-2 text-sm font-semibold text-maroon">
              {product.name}
            </Link>
          </div>
          <button
            type="button"
            aria-label="Toggle wishlist"
            onClick={() => toggleWishlist(product.id)}
            className="rounded-full border border-maroon/20 p-1.5 text-maroon transition hover:bg-maroon hover:text-cream"
          >
            <Heart className={`h-4 w-4 ${isWished ? "fill-current" : ""}`} />
          </button>
        </div>

        <div className="flex items-center justify-between text-xs text-muted">
          <span>{categoryLabelMap[product.category]}</span>
          <span>{product.size.join(" · ")}</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-base font-bold text-maroon">{formatPrice(product.price)}</p>
          <button
            onClick={() => addItem(product.id)}
            className="inline-flex items-center gap-1 rounded-full bg-maroon px-3 py-1.5 text-xs font-semibold text-cream transition hover:bg-saffron hover:text-maroon"
            type="button"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
