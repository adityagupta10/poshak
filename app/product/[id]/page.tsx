import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Leaf, ShieldCheck } from "lucide-react";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductCard } from "@/components/product-card";
import { ProductGallery } from "@/components/product-gallery";
import { WishlistToggle } from "@/components/wishlist-toggle";
import { products } from "@/lib/data";
import { categoryLabelMap, formatPrice } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ id: String(product.id) }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image]
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id && (item.deitySlug === product.deitySlug || item.category === product.category)
    )
    .slice(0, 4);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
      <div className="grid gap-8 lg:grid-cols-2">
        <ProductGallery images={product.images} alt={product.name} />

        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-soft-green">{product.deity}</p>
          <h1 className="text-3xl font-bold leading-tight text-maroon md:text-4xl">{product.name}</h1>
          <p className="text-2xl font-bold text-maroon">{formatPrice(product.price)}</p>

          <div className="space-y-2 rounded-2xl border border-maroon/10 bg-card p-4">
            <p className="text-sm text-muted">{product.description}</p>
            <p className="text-sm text-muted">
              <span className="font-semibold text-maroon">Material:</span> {product.material}
            </p>
            <p className="text-sm text-muted">
              <span className="font-semibold text-maroon">Category:</span> {categoryLabelMap[product.category]}
            </p>
            <p className="text-sm text-muted">
              <span className="font-semibold text-maroon">Fits Idol Sizes:</span> {product.size.join(", ")}
            </p>
          </div>

          <div className="rounded-2xl border border-gold/30 bg-cream p-4">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-maroon">
              <Leaf className="h-4 w-4 text-soft-green" />
              Handcrafted with devotion and respectful care.
            </p>
            <p className="mt-2 inline-flex items-center gap-2 text-xs text-muted">
              <ShieldCheck className="h-4 w-4 text-saffron" />
              Temple-ready quality checks done before dispatch.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <AddToCartButton productId={product.id} label="Add to Cart" />
            <WishlistToggle productId={product.id} />
          </div>
        </div>
      </div>

      {relatedProducts.length ? (
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-maroon">Related Products</h2>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
