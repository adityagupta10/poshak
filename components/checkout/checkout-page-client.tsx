"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { products } from "@/lib/data";
import { formatPrice, shippingCost } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

interface CheckoutFormState {
  name: string;
  address: string;
  phone: string;
  email: string;
}

const initialFormState: CheckoutFormState = {
  name: "",
  address: "",
  phone: "",
  email: ""
};

export function CheckoutPageClient() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const [form, setForm] = useState(initialFormState);
  const [orderId, setOrderId] = useState<string | null>(null);

  const summary = useMemo(() => {
    const cartItems = items
      .map((item) => {
        const product = products.find((entry) => entry.id === item.productId);
        if (!product) {
          return null;
        }
        return { product, quantity: item.quantity };
      })
      .filter((item): item is { product: (typeof products)[number]; quantity: number } => item !== null);

    const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const shipping = shippingCost(subtotal);
    const total = subtotal + shipping;

    return { cartItems, subtotal, shipping, total };
  }, [items]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!summary.cartItems.length) {
      return;
    }

    const generatedOrderId = `POSH-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedOrderId);
    clearCart();
    setForm(initialFormState);
  };

  if (!summary.cartItems.length && !orderId) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-14 text-center md:px-6">
        <h1 className="text-3xl font-bold text-maroon">Checkout</h1>
        <p className="mt-3 text-sm text-muted">Your cart is empty. Add products before checkout.</p>
        <Link
          href="/shop"
          className="mt-5 inline-flex rounded-full bg-maroon px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-saffron hover:text-maroon"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
      <h1 className="text-3xl font-bold text-maroon md:text-4xl">Checkout</h1>
      <p className="mt-2 text-sm text-muted">Complete your details to place your devotional order.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-maroon/10 bg-card p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-maroon">Delivery Details</h2>

          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-muted">Full Name</span>
            <input
              required
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className="h-11 w-full rounded-xl border border-maroon/20 bg-background px-3 text-sm outline-none focus:border-maroon"
              placeholder="Enter full name"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-muted">Address</span>
            <textarea
              required
              value={form.address}
              onChange={(event) => setForm((prev) => ({ ...prev, address: event.target.value }))}
              className="w-full rounded-xl border border-maroon/20 bg-background px-3 py-3 text-sm outline-none focus:border-maroon"
              rows={4}
              placeholder="Flat / House, Street, Landmark, City, State, PIN"
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-muted">Phone</span>
              <input
                required
                value={form.phone}
                onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                className="h-11 w-full rounded-xl border border-maroon/20 bg-background px-3 text-sm outline-none focus:border-maroon"
                placeholder="+91"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-muted">Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="h-11 w-full rounded-xl border border-maroon/20 bg-background px-3 text-sm outline-none focus:border-maroon"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-cream transition hover:bg-saffron hover:text-maroon"
          >
            Place Order
          </button>
          <p className="text-xs text-muted">Payments are simulated in this demo storefront.</p>
        </form>

        <aside className="h-fit rounded-2xl border border-maroon/10 bg-card p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-maroon">Order Summary</h3>
          <div className="mt-4 space-y-3">
            {summary.cartItems.map((item) => (
              <div key={item.product.id} className="flex justify-between gap-4 text-sm">
                <p className="line-clamp-1 text-foreground/85">
                  {item.product.name} <span className="text-muted">x{item.quantity}</span>
                </p>
                <p className="font-semibold text-maroon">
                  {formatPrice(item.product.price * item.quantity)}
                </p>
              </div>
            ))}
            <div className="peacock-divider my-2" />
            <div className="flex justify-between text-sm text-muted">
              <span>Subtotal</span>
              <span>{formatPrice(summary.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted">
              <span>Shipping</span>
              <span>{summary.shipping === 0 ? "Free" : formatPrice(summary.shipping)}</span>
            </div>
            <div className="flex justify-between text-base font-bold text-maroon">
              <span>Total</span>
              <span>{formatPrice(summary.total)}</span>
            </div>
          </div>
        </aside>
      </div>

      {orderId ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-maroon/35 px-4">
          <div className="w-full max-w-md rounded-2xl border border-maroon/10 bg-background p-6 text-center shadow-2xl">
            <CheckCircle2 className="mx-auto h-14 w-14 text-soft-green" />
            <h2 className="mt-4 text-2xl font-bold text-maroon">Order placed successfully!</h2>
            <p className="mt-2 text-sm text-muted">
              Thank you for choosing Poshak. Your order number is{" "}
              <span className="font-semibold text-maroon">{orderId}</span>.
            </p>
            <p className="mt-2 text-xs text-muted">
              Our team will share a confirmation shortly. Haribol 🙏
            </p>
            <button
              type="button"
              onClick={() => setOrderId(null)}
              className="mt-5 inline-flex rounded-full bg-maroon px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-saffron hover:text-maroon"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
