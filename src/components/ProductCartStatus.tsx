'use client';

import { useCart } from './CartContext';
import { MdShoppingCart } from 'react-icons/md';

export default function CartStatus({ productId }: { productId: number }) {
    const { items } = useCart();
    const isInCart = items.some((item) => item.product.id === productId);

    if (!isInCart) return null;

    return (
        <span className='flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1.5 rounded-md font-medium text-sm mt-4'>
            <MdShoppingCart className='text-green-700 text-lg' />
            In Cart
        </span>
    );
}
