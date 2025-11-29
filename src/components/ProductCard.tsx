'use client';

import { Product } from '@/types/types';
import { useRouter } from 'next/navigation';

function ProductCard({ product }: { product: Product }) {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/${product.id}`)}
            onMouseEnter={() => router.prefetch(`/${product.id}`)}
            className='cursor-pointer overflow-hidden rounded-lg border hover:shadow-md transition'
        >
            <h2>{product.title}</h2>
        </div>
    );
}

export default ProductCard;
