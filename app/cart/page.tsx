import { Metadata } from "next";
import { CartPageClient } from "@/components/cart/cart-page-client";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your selected Poshak items before checkout."
};

export default function CartPage() {
  return <CartPageClient />;
}
