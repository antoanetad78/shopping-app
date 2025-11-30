import { fetchData } from '@/lib/fetchData';
import ProductDetails from '@/components/ProductDetails';

async function Product({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await fetchData({
        url: `https://dummyjson.com/products/${id}`,
        revalidate: 300,
    });
    return <ProductDetails product={product} />;
}

export default Product;
