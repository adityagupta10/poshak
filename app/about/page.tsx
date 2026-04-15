import { Metadata } from "next";
import { HeartHandshake, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Poshak and our devotional craftsmanship."
};

const values = [
  {
    title: "Devotional Craft",
    description: "We collaborate with artisans who understand temple aesthetics and respectful finishing.",
    icon: Sparkles
  },
  {
    title: "Community First",
    description: "Serving families, home mandirs, and temples with reliable quality and warm support.",
    icon: Users
  },
  {
    title: "Seva Mindset",
    description: "Every product is prepared as a seva offering to help devotees dress their deities beautifully.",
    icon: HeartHandshake
  }
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-soft-green">About Poshak</p>
      <h1 className="mt-2 text-4xl font-bold text-maroon">A respectful marketplace made for bhakti</h1>
      <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
        Poshak was created to make deity shringar meaningful, convenient, and dignified for every devotee. From daily vastra sets to festive alankar, we curate collections that balance devotion, quality, and tradition.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {values.map((value) => (
          <article key={value.title} className="rounded-2xl border border-maroon/10 bg-card p-5">
            <value.icon className="h-8 w-8 text-saffron" />
            <h2 className="mt-3 text-xl font-semibold text-maroon">{value.title}</h2>
            <p className="mt-2 text-sm text-muted">{value.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
