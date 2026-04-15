"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  productId: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (productId: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

const findItem = (items: CartItem[], productId: number) =>
  items.find((item) => item.productId === productId);

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (productId) => {
        const existingItem = findItem(get().items, productId);

        if (existingItem) {
          set({
            items: get().items.map((item) =>
              item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
          });
          return;
        }

        set({
          items: [...get().items, { productId, quantity: 1 }]
        });
      },
      removeItem: (productId) => {
        set({
          items: get().items.filter((item) => item.productId !== productId)
        });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          set({
            items: get().items.filter((item) => item.productId !== productId)
          });
          return;
        }

        set({
          items: get().items.map((item) =>
            item.productId === productId ? { ...item, quantity } : item
          )
        });
      },
      clearCart: () => set({ items: [] })
    }),
    {
      name: "poshak-cart"
    }
  )
);
