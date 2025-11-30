'use client';

import { Product } from '@/types/types';
import Image from 'next/image';
import Button from './Button';
import { useCart } from './CartContext';
import Rating from './Rating';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const CartStatus = dynamic(() => import('./ProductCartStatus'), {
    ssr: false,
});
function ProductDetails({ product }: { product: Product }) {
    const { addToCart } = useCart();

    return (
        <section className='max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-10 py-10 px-6'>
            {/* Image */}
            <div className='flex-1 flex justify-center'>
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={500}
                    height={500}
                    className='rounded-lg object-cover shadow-md w-full max-w-sm'
                />
            </div>

            {/* Product Info */}
            <div className='flex-1 flex flex-col justify-center space-y-4'>
                <h1 className='text-3xl font-extrabold text-gray-900 dark:text-white'>
                    {product.title}
                </h1>

                <Rating
                    value={product.rating}
                    showValue
                    className='justify-start'
                />

                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                    {product.description}
                </p>

                <div className='flex items-center gap-3'>
                    <p className='text-2xl font-semibold text-gray-900 dark:text-white'>
                        ${product.price}
                    </p>
                    <p className='text-sm text-green-600 font-medium'>
                        {product.discountPercentage}% off
                    </p>
                </div>
                <CartStatus productId={product.id} />
                <div className='flex gap-3 mt-4'>
                    <Link
                        href='/'
                        className='inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-1.5 shadow-sm transition text-sm'
                    >
                        Continue shopping
                    </Link>
                    <Button
                        onClick={() => addToCart(product)}
                        text='Add to cart'
                        className='inline-flex items-center justify-center rounded-md bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-1.5 shadow-sm transition text-sm'
                    />
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;
