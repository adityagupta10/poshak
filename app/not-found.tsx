import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-soft-green">404</p>
      <h1 className="mt-2 text-4xl font-bold text-maroon">Page not found</h1>
      <p className="mt-3 text-sm text-muted">The page you requested is not available.</p>
      <Link
        href="/"
        className="mt-5 inline-flex rounded-full bg-maroon px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-saffron hover:text-maroon"
      >
        Return Home
      </Link>
    </div>
  );
}
