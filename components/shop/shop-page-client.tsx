"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { products, productTypeOptions, sizeOptions } from "@/lib/data";
import { DeitySlug, ProductCategory } from "@/lib/types";

const deityOptions = [
  { value: "all", label: "All Deities" },
  { value: "krishna", label: "Krishna / Laddu Gopal" },
  { value: "radha", label: "Radha" },
  { value: "radha-krishna", label: "Radha-Krishna" },
  { value: "ganesh", label: "Ganesh" },
  { value: "lakshmi", label: "Lakshmi" },
  { value: "shiva", label: "Shiva" },
  { value: "durga", label: "Durga" },
  { value: "sai-baba", label: "Sai Baba" }
] as const;

type SortType = "newest" | "price-low-high" | "price-high-low";

function ShopPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [search, setSearch] = useState(initialQuery);
  const [selectedDeity, setSelectedDeity] = useState<DeitySlug | "all">("all");
  const [selectedType, setSelectedType] = useState<ProductCategory | "all">("all");
  const [selectedSize, setSelectedSize] = useState<(typeof sizeOptions)[number] | "all">("all");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortBy, setSortBy] = useState<SortType>("newest");

  useEffect(() => {
    const q = searchParams.get("q");
    if (q !== null) {
      setSearch(q);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const searchMatch =
        normalizedSearch.length === 0 ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.deity.toLowerCase().includes(normalizedSearch) ||
        product.material.toLowerCase().includes(normalizedSearch);

      const deityMatch = selectedDeity === "all" || product.deitySlug === selectedDeity;
      const typeMatch = selectedType === "all" || product.category === selectedType;
      const sizeMatch = selectedSize === "all" || product.size.includes(selectedSize);
      const priceMatch = product.price <= maxPrice;

      return searchMatch && deityMatch && typeMatch && sizeMatch && priceMatch;
    });

    switch (sortBy) {
      case "price-low-high":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high-low":
        return [...filtered].sort((a, b) => b.price - a.price);
      default:
        return [...filtered].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  }, [maxPrice, search, selectedDeity, selectedSize, selectedType, sortBy]);

  const resetFilters = () => {
    setSearch("");
    setSelectedDeity("all");
    setSelectedType("all");
    setSelectedSize("all");
    setMaxPrice(5000);
    setSortBy("newest");
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
      <div className="mb-6 rounded-2xl border border-maroon/10 bg-card p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-soft-green">Shop All Products</p>
            <h1 className="text-3xl font-bold text-maroon md:text-4xl">Find the perfect shringar</h1>
          </div>
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-2 rounded-full border border-maroon/20 px-4 py-2 text-xs font-semibold text-maroon transition hover:bg-maroon hover:text-cream"
          >
            <X className="h-3.5 w-3.5" />
            Reset
          </button>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
          <label className="lg:col-span-2">
            <span className="mb-1 block text-xs font-semibold text-muted">Search</span>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by product, deity, material..."
              className="h-11 w-full rounded-xl border border-maroon/20 bg-background px-3 text-sm outline-none focus:border-maroon"
            />
          </label>

          <label>
            <span className="mb-1 block text-xs font-semibold text-muted">Deity</span>
            <select
              value={selectedDeity}
              onChange={(event) => setSelectedDeity(event.target.value as DeitySlug | "all")}
              className="h-11 w-full rounded-xl border border-maroon/20 bg-background px-3 text-sm outline-none focus:border-maroon"
            >
              {deityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="mb-1 block text-xs font-semibold text-muted">Type</span>
            <select
              value={selectedType}
              onChange={(event) => setSelectedType(event.target.value as ProductCategory | "all")}
              className="h-11 w-full rounded-xl border border-maroon/20 bg-background px-3 text-sm outline-none focus:border-maroon"
            >
              <option value="all">All Types</option>
              {productTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="mb-1 block text-xs font-semibold text-muted">Size</span>
            <select
              value={selectedSize}
              onChange={(event) => setSelectedSize(event.target.value as (typeof sizeOptions)[number] | "all")}
              className="h-11 w-full rounded-xl border border-maroon/20 bg-background px-3 text-sm outline-none focus:border-maroon"
            >
              <option value="all">All Sizes</option>
              {sizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="mb-1 block text-xs font-semibold text-muted">Sort</span>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortType)}
              className="h-11 w-full rounded-xl border border-maroon/20 bg-background px-3 text-sm outline-none focus:border-maroon"
            >
              <option value="newest">Newest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </label>
        </div>

        <div className="mt-4 rounded-xl border border-saffron/20 bg-background p-4">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-soft-green">
            <SlidersHorizontal className="h-4 w-4" />
            Price Range
          </div>
          <input
            type="range"
            min={399}
            max={5000}
            value={maxPrice}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
            className="w-full accent-maroon"
          />
          <p className="mt-2 text-sm text-muted">Showing products up to ₹{maxPrice.toLocaleString("en-IN")}</p>
        </div>
      </div>

      <div className="mb-5 flex items-center justify-between text-sm text-muted">
        <p>{filteredProducts.length} products found</p>
        <p>All prices in ₹ INR</p>
      </div>

      {filteredProducts.length ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-maroon/25 bg-card p-10 text-center">
          <h3 className="text-lg font-semibold text-maroon">No products matched your filters</h3>
          <p className="mt-2 text-sm text-muted">Try adjusting deity, type, size, or search text.</p>
        </div>
      )}
    </div>
  );
}

export function ShopPageClient() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-muted">Loading shringar...</div>}>
      <ShopPageContent />
    </Suspense>
  );
}
