"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 rounded-full bg-maroon/10 p-6">
        <AlertCircle className="h-12 w-12 text-maroon" />
      </div>
      <h2 className="text-2xl font-bold text-maroon md:text-3xl">A small hurdle in your seva</h2>
      <p className="mt-2 max-w-md text-sm text-muted">
        We encountered an unexpected error while preparing your devotional experience. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-maroon px-8 py-3 text-sm font-semibold text-cream transition hover:bg-saffron hover:text-maroon"
      >
        <RotateCcw className="h-4 w-4" />
        Try Again
      </button>
    </div>
  );
}
