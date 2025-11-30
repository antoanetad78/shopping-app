'use client';
import { Product } from '@/types/types';
import Card from './Card';
import Text from './Text';
import Rating from './Rating';
import { useRouter } from 'next/navigation';
import Button from './Button';
import { useCart } from '@/components/CartContext';
function ProductList({ products }: { products: Product[] }) {
    const router = useRouter();
    const { addToCart } = useCart();
    return (
        <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
            <h1 className='mb-8 text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center'>
                Products
            </h1>
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center items-center'>
                {products.map((product: Product) => {
                    return (
                        <li
                            key={product.id}
                            className='flex flex-col justify-between w-full max-w-sm bg-white dark:bg-gray-900 rounded-lg shadow-sm transition-transform hover:shadow-md hover:-translate-y-0.5 duration-150 ease-out'
                        >
                            <div
                                className='cursor-pointer flex-1'
                                onClick={() => router.push(`/${product.id}`)}
                                onMouseEnter={() =>
                                    router.prefetch(`/${product.id}`)
                                }
                            >
                                <Card
                                    data={product}
                                    onClick={() =>
                                        router.push(`/${product.id}`)
                                    }
                                    title={product.title}
                                    image={product.thumbnail}
                                    className='flex flex-col justify-between h-full min-h-[380px]'
                                    extra={
                                        <div>
                                            <Text
                                                as='p'
                                                text={`Price: $${product.price}`}
                                                className='font-medium text-gray-800 dark:text-gray-200'
                                            />
                                            <Rating
                                                value={product.rating}
                                                showValue
                                            />
                                        </div>
                                    }
                                />
                            </div>

                            <Button
                                onClick={() => addToCart(product)}
                                text='Add to cart'
                                className='rounded-[4px] bg-green-500 px-3 py-1.5 text-sm text-white shadow hover:bg-green-600 active:shadow-inner transition'
                            />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default ProductList;
