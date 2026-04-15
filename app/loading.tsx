"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-saffron/20 blur-xl animate-pulse" />
        <Loader2 className="relative h-12 w-12 animate-spin text-maroon" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-maroon">Poshak</p>
        <p className="text-xs text-muted">Preparing for your Divine seva...</p>
      </div>
    </div>
  );
}
