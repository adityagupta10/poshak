"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistState {
  ids: number[];
  toggle: (productId: number) => void;
  isWished: (productId: number) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (productId) => {
        const isSaved = get().ids.includes(productId);

        if (isSaved) {
          set({ ids: get().ids.filter((id) => id !== productId) });
          return;
        }

        set({ ids: [...get().ids, productId] });
      },
      isWished: (productId) => get().ids.includes(productId)
    }),
    {
      name: "poshak-wishlist"
    }
  )
);
