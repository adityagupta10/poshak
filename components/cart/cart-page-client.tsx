"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { QuantityStepper } from "@/components/quantity-stepper";
import { products } from "@/lib/data";
import { formatPrice, shippingCost } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

export function CartPageClient() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const cartItems = items
    .map((item) => {
      const product = products.find((productEntry) => productEntry.id === item.productId);
      if (!product) {
        return null;
      }

      return {
        product,
        quantity: item.quantity
      };
    })
    .filter((item): item is { product: (typeof products)[number]; quantity: number } => item !== null);

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = shippingCost(subtotal);
  const total = subtotal + shipping;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
      <h1 className="text-3xl font-bold text-maroon md:text-4xl">Your Cart</h1>
      <p className="mt-2 text-sm text-muted">Review your selected poshak and continue to checkout.</p>

      {!cartItems.length ? (
        <div className="mt-8 rounded-2xl border border-dashed border-maroon/20 bg-card p-12 text-center">
          <h2 className="text-xl font-semibold text-maroon">Your cart is currently empty</h2>
          <p className="mt-2 text-sm text-muted">Browse devotional collections and add your favorite items.</p>
          <Link
            href="/shop"
            className="mt-5 inline-flex rounded-full bg-maroon px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-saffron hover:text-maroon"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.7fr_1fr]">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <article
                key={item.product.id}
                className="rounded-2xl border border-maroon/10 bg-card p-4 shadow-sm md:flex md:items-center md:gap-4"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-maroon/10 md:w-28">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 flex-1 space-y-2 md:mt-0">
                  <h2 className="line-clamp-2 font-semibold text-maroon">{item.product.name}</h2>
                  <p className="text-xs text-soft-green">{item.product.deity}</p>
                  <p className="text-sm font-semibold text-maroon">{formatPrice(item.product.price)}</p>
                  <div className="flex items-center justify-between gap-3">
                    <QuantityStepper
                      quantity={item.quantity}
                      onDecrease={() => updateQuantity(item.product.id, item.quantity - 1)}
                      onIncrease={() => updateQuantity(item.product.id, item.quantity + 1)}
                    />
                    <button
                      type="button"
                      onClick={() => removeItem(item.product.id)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-maroon/80 transition hover:text-maroon"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-maroon/10 bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-maroon">Order Summary</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between text-muted">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              <div className="peacock-divider my-3" />
              <div className="flex justify-between text-base font-semibold text-maroon">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-muted">Shipping is free for orders above ₹2000.</p>
            </div>
            <Link
              href="/checkout"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-maroon px-5 py-3 text-sm font-semibold text-cream transition hover:bg-saffron hover:text-maroon"
            >
              Proceed to Checkout
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
