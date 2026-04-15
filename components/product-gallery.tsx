"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-3">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-maroon/10 bg-card">
        <Image src={activeImage} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveImage(image)}
            className={`relative aspect-square overflow-hidden rounded-xl border ${
              image === activeImage ? "border-maroon" : "border-maroon/15"
            }`}
          >
            <Image src={image} alt={`${alt} thumbnail`} fill className="object-cover" sizes="20vw" />
          </button>
        ))}
      </div>
    </div>
  );
}
