"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/shipping-policy", label: "Shipping Policy" }
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const cartCount = useCartStore((state) => state.items.reduce((sum, item) => sum + item.quantity, 0));
  const wishCount = useWishlistStore((state) => state.ids.length);

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsOpen(false);
    }
  };

  const headerClasses = useMemo(
    () =>
      "sticky top-0 z-40 border-b border-maroon/10 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80",
    []
  );

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="rounded-full bg-maroon px-3 py-1 text-xs font-semibold tracking-wider text-cream">POSHAK</span>
          <span className="hidden text-sm font-medium text-muted lg:inline">Dress the Divine</span>
        </Link>

        {/* Desktop Search */}
        <form onSubmit={onSearch} className="relative hidden max-w-sm flex-1 md:flex">
          <input
            type="text"
            placeholder="Search for shringar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 w-full rounded-full border border-maroon/15 bg-card/50 pl-9 pr-4 text-xs outline-none transition focus:border-maroon/40 focus:bg-card focus:ring-1 focus:ring-maroon/10"
          />
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
        </form>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  active ? "text-maroon font-semibold" : "text-foreground/80 hover:text-maroon"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/wishlist"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-maroon/20 bg-card/70 text-maroon transition hover:bg-maroon hover:text-cream"
            aria-label="Wishlist"
          >
            <Heart className="h-4 w-4" />
            {wishCount > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-saffron px-1 text-[10px] font-bold text-maroon">
                {wishCount}
              </span>
            ) : null}
          </Link>
          <Link
            href="/cart"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-maroon/20 bg-card/70 text-maroon transition hover:bg-maroon hover:text-cream"
            aria-label="Cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-saffron px-1 text-[10px] font-bold text-maroon">
                {cartCount}
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-maroon/20 bg-card/70 text-maroon lg:hidden"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-maroon/10 bg-background px-4 py-5 lg:hidden animate-fade-in">
          <form onSubmit={onSearch} className="relative mb-5 flex w-full">
            <input
              type="text"
              placeholder="Search for shringar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 w-full rounded-full border border-maroon/20 bg-card pl-10 pr-4 text-sm outline-none focus:border-maroon"
            />
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          </form>
          
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm ${
                  pathname === link.href ? "text-maroon font-semibold" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
