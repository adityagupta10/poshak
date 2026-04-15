import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Shipping Policy", href: "/shipping-policy" }
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-maroon/10 bg-card/80">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 text-center md:flex-row md:px-6 md:text-left">
        <div className="space-y-2">
          <p className="font-semibold text-maroon">Crafted with Devotion ❤️ | Made for Bhakti</p>
          <p className="text-sm text-muted">© {new Date().getFullYear()} Poshak. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition hover:text-maroon"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
