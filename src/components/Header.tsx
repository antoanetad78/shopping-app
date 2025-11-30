'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdShoppingCart } from 'react-icons/md';
import dynamic from 'next/dynamic';

const CartBadge = dynamic(() => import('./CartBadge'), { ssr: false });
export default function Header() {
    const pathname = usePathname();

    return (
        <header className='flex flex-wrap overflow-hidden bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 text-white py-12 sm:py-16 justify-between'>
            <div className='max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10'>
                <h1 className='text-5xl sm:text-6xl font-extrabold tracking-tight'>
                    Shoopz
                </h1>
                <p className='mt-3 text-lg sm:text-xl text-emerald-50'>
                    Discover, shop, and smile.
                </p>
            </div>
            {/* Navigation */}
            <nav className='flex items-center gap-6 w-full justify-end px-8 mt-4'>
                {pathname !== '/' && (
                    <Link
                        href='/'
                        className='font-medium text-white hover:text-green-200 transition-colors'
                    >
                        Home
                    </Link>
                )}

                {pathname !== '/cart' && (
                    <Link
                        href='/cart'
                        className='relative flex items-center gap-1 text-white hover:text-green-200 transition'
                    >
                        <MdShoppingCart size={22} />
                        <CartBadge />
                        Cart
                    </Link>
                )}
            </nav>
        </header>
    );
}
