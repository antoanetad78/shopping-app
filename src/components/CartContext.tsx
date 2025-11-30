'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { Product } from '@/types/types';

type CartItem = {
    product: Product;
    quantity: number;
};

type CartContextValue = {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    totalCount: number;
    totalPrice: number;
    getDiscountedPrice: (price: number, discountPercentage: number) => number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    //Load cart once lazily on init
    const [items, setItems] = useState<CartItem[]>(() => {
        if (typeof window === 'undefined') return [];
        try {
            const stored = window.sessionStorage.getItem('cart');
            return stored ? (JSON.parse(stored) as CartItem[]) : [];
        } catch {
            return [];
        }
    });

    // persist to sessionStorage
    useEffect(() => {
        if (typeof window === 'undefined') return;
        window.sessionStorage.setItem('cart', JSON.stringify(items));
    }, [items]);

    const addToCart = (product: Product) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.product.id === product.id);
            if (existing) {
                return prev.map((i) =>
                    i.product.id === product.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prev, { product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setItems((prev) => prev.filter((i) => i.product.id !== id));
    };

    const increaseQuantity = (id: number) => {
        setItems((prev) =>
            prev.map((i) =>
                i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i
            )
        );
    };

    const decreaseQuantity = (id: number) => {
        setItems((prev) =>
            prev
                .map((i) =>
                    i.product.id === id ? { ...i, quantity: i.quantity - 1 } : i
                )
                .filter((i) => i.quantity > 0)
        );
    };
    const getDiscountedPrice = (price: number, discountPercentage: number) => {
        return price * (1 - discountPercentage / 100);
    };
    const calculateCartTotal = (items: CartItem[]) => {
        return items.reduce((total, item) => {
            const itemPrice = getDiscountedPrice(
                item.product.price,
                item.product.discountPercentage
            );
            return total + itemPrice * item.quantity;
        }, 0);
    };
    const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                totalCount,
                totalPrice: calculateCartTotal(items),
                increaseQuantity,
                decreaseQuantity,
                getDiscountedPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
}
