'use client';

import Image from 'next/image';
import Button from './Button';
import { Product } from '@/types/types';
interface CartContentProps {
    product: Product;
    quantity: number;
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    getDiscountedPrice: (price: number, discount: number) => number;
}

export default function CartContent({
    product,
    quantity,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getDiscountedPrice,
}: CartContentProps) {
    return (
        <li className='flex items-center gap-4 rounded border p-3 shadow-sm'>
            <Image
                src={product.thumbnail}
                alt={product.title}
                width={80}
                height={80}
                className='rounded object-cover'
            />
            <div className='flex-1'>
                <p className='font-medium'>{product.title}</p>
                <p className='text-sm text-gray-500'>
                    {quantity} ×
                    <span
                        className={
                            product.discountPercentage > 0
                                ? 'line-through text-gray-400 mr-1'
                                : ''
                        }
                    >
                        ${product.price.toFixed(2)}
                    </span>
                    {product.discountPercentage > 0 && (
                        <span className='text-green-600'>
                            $ $
                            {getDiscountedPrice(
                                product.price,
                                product.discountPercentage
                            ).toFixed(2)}
                        </span>
                    )}
                </p>
                <p className='text-sm text-gray-400'>
                    Discount: {product.discountPercentage}%
                </p>
            </div>
            {/* Quantity controls */}
            <button
                onClick={() => decreaseQuantity(product.id)}
                className='w-6 h-6 text-red-500 hover:text-red-600 font-bold text-xl flex items-center justify-center transition'
                aria-label='Decrease quantity'
            >
                −
            </button>
            <span className='min-w-[2rem] text-center mx-0.5'>{quantity}</span>
            <button
                onClick={() => increaseQuantity(product.id)}
                className='w-6 h-6 text-green-500 hover:text-green-600 font-bold text-xl flex items-center justify-center transition'
                aria-label='Increase quantity'
            >
                +
            </button>
            <Button
                text='Remove'
                onClick={() => removeFromCart(product.id)}
                className='rounded bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600 transition'
            />
        </li>
    );
}
