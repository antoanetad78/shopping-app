'use client';

import { useCart } from './CartContext';

export default function CartBadge() {
    const { totalCount } = useCart();

    if (!totalCount) return null;

    return (
        <span className='absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5'>
            {totalCount}
        </span>
    );
}
