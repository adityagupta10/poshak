import { Metadata } from "next";
import { CheckCircle2, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Shipping and delivery policy for Poshak orders."
};

const policies = [
  "Orders are typically dispatched within 24-48 hours after confirmation.",
  "Standard shipping charge is ₹99. Orders above ₹2000 are shipped free.",
  "Estimated delivery is 3-7 business days within India depending on destination.",
  "For international requests, support team shares timeline and shipping quote separately."
];

export default function ShippingPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-soft-green">Policy</p>
      <h1 className="mt-2 text-4xl font-bold text-maroon">Shipping Policy</h1>
      <p className="mt-3 text-sm text-muted md:text-base">
        We prioritize respectful packaging and timely dispatch so your deity shringar reaches safely.
      </p>

      <div className="mt-8 rounded-2xl border border-maroon/10 bg-card p-5 shadow-sm">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-maroon">
          <Truck className="h-5 w-5 text-saffron" />
          Delivery Guidelines
        </p>
        <div className="mt-4 space-y-3">
          {policies.map((line) => (
            <p key={line} className="inline-flex items-start gap-2 text-sm text-muted">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-soft-green" />
              <span>{line}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
