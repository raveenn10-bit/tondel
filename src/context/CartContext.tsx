"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { CartItem, Product, ProductVariant } from "@/types";
import { products } from "@/data/products";

export interface ResolvedCartItem {
  product: Product;
  variant?: ProductVariant;
  quantity: number;
  unitPrice: number | null;
  lineTotal: number | null;
}

interface CartContextType {
  items: CartItem[];
  resolvedItems: ResolvedCartItem[];
  totalCount: number;
  subtotal: number;
  hasUnknownPrice: boolean;
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;
  addToCart: (productId: string, variantId?: string, quantity?: number) => void;
  removeFromCart: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "tondel_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [items, isLoaded]);

  // Resolve items against live product catalogue (never trust stored prices!)
  const resolvedItems: ResolvedCartItem[] = useMemo(() => {
    const list: (ResolvedCartItem | null)[] = items.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      // Only allow active products
      if (!product || product.status !== "active") return null;

      const variant = item.variantId
        ? product.variants.find((v) => v.id === item.variantId)
        : product.variants[0];

      const unitPrice =
        variant?.price !== undefined && variant?.price !== null
          ? variant.price
          : product.price;

      const lineTotal = unitPrice !== null ? unitPrice * item.quantity : null;

      return {
        product,
        variant,
        quantity: item.quantity,
        unitPrice,
        lineTotal,
      };
    });

    return list.filter((item): item is ResolvedCartItem => item !== null);
  }, [items]);

  const totalCount = useMemo(() => {
    return resolvedItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [resolvedItems]);

  const { subtotal, hasUnknownPrice } = useMemo(() => {
    let sum = 0;
    let unknown = false;
    for (const item of resolvedItems) {
      if (item.lineTotal === null) {
        unknown = true;
      } else {
        sum += item.lineTotal;
      }
    }
    return { subtotal: sum, hasUnknownPrice: unknown };
  }, [resolvedItems]);

  const addToCart = (productId: string, variantId?: string, quantity: number = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.productId === productId && i.variantId === variantId
      );
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      }
      return [...prev, { productId, variantId, quantity, addedAt: Date.now() }];
    });
    setIsCartDrawerOpen(true);
  };

  const removeFromCart = (productId: string, variantId?: string) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.productId === productId && i.variantId === variantId)
      )
    );
  };

  const updateQuantity = (productId: string, quantity: number, variantId?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => {
        if (i.productId === productId && i.variantId === variantId) {
          return { ...i, quantity };
        }
        return i;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        resolvedItems,
        totalCount,
        subtotal,
        hasUnknownPrice,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
