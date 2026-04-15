"use client";

import { Minus, Plus } from "lucide-react";

interface QuantityStepperProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export function QuantityStepper({ quantity, onDecrease, onIncrease }: QuantityStepperProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-maroon/20 bg-cream">
      <button
        type="button"
        onClick={onDecrease}
        className="inline-flex h-8 w-8 items-center justify-center text-maroon transition hover:bg-maroon hover:text-cream"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-9 text-center text-sm font-semibold text-maroon">{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        className="inline-flex h-8 w-8 items-center justify-center text-maroon transition hover:bg-maroon hover:text-cream"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
