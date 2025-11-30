import ProductList from '@/components/ProductList';
import { fetchData } from '@/lib/fetchData';

export default async function Products() {
    const { products } = await fetchData({
        url: 'https://dummyjson.com/products',
    });
    return (
        <main className='min-h-screen w-full bg-white dark:bg-black pb-16'>
            <ProductList products={products} />
        </main>
    );
}
