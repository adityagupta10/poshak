import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const titleMap: Record<string, string> = {
  krishna: "Krishna / Laddu Gopal Collection",
  radha: "Radha Rani Collection",
  "radha-krishna": "Radha-Krishna Collection",
  ganesh: "Shree Ganesh Collection",
  lakshmi: "Maa Lakshmi Collection",
  shiva: "Mahadev Collection",
  durga: "Maa Durga Collection",
  "sai-baba": "Sai Baba Collection"
};

export async function generateStaticParams() {
  return [...new Set(products.map((product) => product.deitySlug))].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = titleMap[slug] ?? "Category";

  return {
    title,
    description: `Explore handcrafted ${title.toLowerCase()} at Poshak.`
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const filtered = products.filter((product) => product.deitySlug === slug);

  if (!filtered.length) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-soft-green">Category</p>
      <h1 className="mt-2 text-3xl font-bold text-maroon md:text-4xl">{titleMap[slug]}</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Handpicked devotional pieces prepared respectfully for your deity&apos;s daily and festive shringar.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
