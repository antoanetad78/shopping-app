'use client';

import { useCart } from '@/components/CartContext';

import Link from 'next/link';

import dynamic from 'next/dynamic';
const CartContent = dynamic(() => import('./CartContent'), {
    ssr: false,
    loading: () => <p>Loading cart items...</p>,
});
export default function CartPage() {
    const {
        items,
        totalCount,
        totalPrice,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getDiscountedPrice,
    } = useCart();

    if (items.length === 0) {
        return (
            <main className='mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center p-8 text-center'>
                <p className='mb-4 text-gray-700'>Your cart is empty.</p>
                <Link
                    href='/'
                    className='rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition'
                >
                    Go shopping
                </Link>
            </main>
        );
    }

    return (
        <main className='mx-auto flex min-h-screen max-w-3xl flex-col gap-6 p-8'>
            <h1 className='text-2xl font-semibold'>Your Cart</h1>

            <ul className='space-y-4'>
                {items.map((item) => (
                    <CartContent
                        key={item.product.id}
                        product={item.product}
                        quantity={item.quantity}
                        removeFromCart={removeFromCart}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        getDiscountedPrice={getDiscountedPrice}
                    />
                ))}
            </ul>

            <div className='mt-6 border-t pt-4 text-right'>
                <p className='text-gray-600'>
                    Total items: <strong>{totalCount}</strong>
                </p>
                <p className='text-lg font-semibold'>
                    Total: ${totalPrice.toFixed(2)}
                </p>
            </div>

            <div className='flex gap-3'>
                {/* Continue shopping */}
                <Link
                    href='/'
                    className='rounded bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-medium shadow-sm transition'
                >
                    Continue shopping
                </Link>

                {/* Checkout */}
                <button
                    onClick={() => alert('Checkout not implemented')}
                    className='rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition'
                >
                    Checkout
                </button>
            </div>
        </main>
    );
}
