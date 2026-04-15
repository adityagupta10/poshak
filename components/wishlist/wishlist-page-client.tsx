"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";
import { useWishlistStore } from "@/store/wishlist-store";

export function WishlistPageClient() {
  const ids = useWishlistStore((state) => state.ids);
  const wishedProducts = products.filter((product) => ids.includes(product.id));

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
      <h1 className="text-3xl font-bold text-maroon md:text-4xl">Wishlist</h1>
      <p className="mt-2 text-sm text-muted">Saved items are stored in your browser locally.</p>

      {wishedProducts.length ? (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {wishedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-maroon/20 bg-card p-10 text-center">
          <h2 className="text-xl font-semibold text-maroon">No products in wishlist yet</h2>
          <p className="mt-2 text-sm text-muted">Tap the heart icon on products you love.</p>
          <Link
            href="/shop"
            className="mt-5 inline-flex rounded-full bg-maroon px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-saffron hover:text-maroon"
          >
            Browse Products
          </Link>
        </div>
      )}
    </div>
  );
}
