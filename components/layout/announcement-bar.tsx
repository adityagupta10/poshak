"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const announcements = [
  "Get Rs 100 OFF – Use Code “HAREKRISHNA”",
  "Extra 5% OFF – Applicable on Prepaid Orders",
  "Free Shipping - COD Available",
  "Get Rs 100 OFF on first order"
];

export function AnnouncementBar() {
  const pathname = usePathname();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (pathname === "/checkout") return null;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % announcements.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);

  return (
    <div className="relative h-9 w-full overflow-hidden bg-maroon text-cream">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        <button 
          onClick={prevSlide}
          className="group flex h-full items-center px-2 transition-colors hover:bg-white/10"
          aria-label="Previous announcement"
        >
          <ChevronLeft className="h-3.5 w-3.5 opacity-60 transition-opacity group-hover:opacity-100" />
        </button>

        <div className="relative flex-1 text-center">
          {announcements.map((text, index) => (
            <p
              key={index}
              className={`absolute inset-0 flex items-center justify-center text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-700 ease-in-out md:text-xs ${
                index === currentIndex 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-full opacity-0 pointer-events-none"
              }`}
            >
              {text}
            </p>
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="group flex h-full items-center px-2 transition-colors hover:bg-white/10"
          aria-label="Next announcement"
        >
          <ChevronRight className="h-3.5 w-3.5 opacity-60 transition-opacity group-hover:opacity-100" />
        </button>
      </div>
    </div>
  );
}
