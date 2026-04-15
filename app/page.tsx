import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HandHeart, Leaf, ShieldCheck, Truck } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter-form";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { deityCategories, products, testimonials, whyChoosePoints } from "@/lib/data";

const featureIcons = [HandHeart, ShieldCheck, Truck];

export default function HomePage() {
  const bestSellers = products.filter((product) => product.bestSeller).slice(0, 8);
  const featuredCategories = deityCategories.slice(0, 6);

  return (
    <div className="motif-bg">
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 pb-14 pt-8 md:grid-cols-2 md:px-6 md:pt-12">
        <div className="flex flex-col justify-center space-y-5 animate-fade-in">
          <p className="w-fit rounded-full bg-saffron/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-maroon">
            Dress the Divine
          </p>
          <h1 className="text-4xl font-bold leading-tight text-maroon md:text-6xl">
            Poshak for your beloved Deities
          </h1>
          <p className="max-w-xl text-base text-muted md:text-lg">
            Discover handcrafted clothes, ornaments, crowns, and complete shringar sets for Laddu Gopal, Radha-Krishna, Ganesh, Lakshmi, Shiva, Durga, Sai Baba, and more.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-cream transition hover:bg-saffron hover:text-maroon"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/category/krishna"
              className="inline-flex items-center gap-2 rounded-full border border-maroon/25 bg-card px-6 py-3 text-sm font-semibold text-maroon transition hover:bg-maroon hover:text-cream"
            >
              Explore Krishna Collection
            </Link>
          </div>
        </div>

        <div className="relative animate-rise-in">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-saffron/30 via-gold/20 to-soft-green/25 blur-2xl" />
          <div className="relative mandala-border overflow-hidden rounded-3xl border border-maroon/10">
            <Image
              src="/hero.png"
              alt="Devotional idol adorned in traditional poshak"
              width={1200}
              height={1000}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
        <SectionHeading
          eyebrow="Featured Deities"
          title="Choose by your Ishta Devata"
          subtitle="Browse thoughtfully curated collections designed with devotion and traditional aesthetics."
          align="center"
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group mandala-border overflow-hidden rounded-2xl border border-maroon/10 bg-card transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-lg font-semibold text-maroon">{category.name}</h3>
                <p className="text-sm text-muted">{category.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-soft-green">
                  Explore Collection
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
        <SectionHeading
          eyebrow="Best Sellers"
          title="Most loved by devotees"
          subtitle="Top-rated poshak and shringar pieces chosen by families and temples across India."
        />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-card/80 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Why Choose Poshak"
            title="Every order prepared with respect"
            subtitle="Devotional care, quality assurance, and reliable delivery for your mandir needs."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {whyChoosePoints.map((point, index) => {
              const Icon = featureIcons[index] ?? Leaf;
              return (
                <article
                  key={point.title}
                  className="rounded-2xl border border-maroon/10 bg-background p-5 shadow-sm transition hover:shadow-md"
                >
                  <Icon className="h-8 w-8 text-saffron" />
                  <h3 className="mt-4 text-xl font-semibold text-maroon">{point.title}</h3>
                  <p className="mt-2 text-sm text-muted">{point.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices of devotion"
          subtitle="What our Poshak family says after receiving their shringar."
          align="center"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-maroon/10 bg-card p-5 shadow-sm transition hover:shadow-md"
            >
              <p className="text-sm leading-relaxed text-foreground/90">“{item.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-maroon">{item.name}</p>
              <p className="text-xs text-muted">{item.city}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-16 md:px-6">
        <NewsletterForm />
      </section>
    </div>
  );
}
