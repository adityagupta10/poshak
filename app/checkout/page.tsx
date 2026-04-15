import { Metadata } from "next";
import { CheckoutPageClient } from "@/components/checkout/checkout-page-client";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete delivery details and place your devotional Poshak order."
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
