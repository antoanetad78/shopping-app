import ProductList from '@/components/ProductList';
import { fetchData } from '@/lib/fetchData';

export default async function Products() {
    const { products } = await fetchData({
        url: 'https://dummyjson.com/products',
    });
    return (
        <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between p-16 bg-white dark:bg-black sm:items-start'>
            Shopping app here, hi! This will be the list of products page
            <ProductList products={products} />
        </main>
    );
}
