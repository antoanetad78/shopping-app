import { fetchData } from '@/lib/fetchData';

async function Product({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await fetchData({
        url: `https://dummyjson.com/products/${id}`,
        revalidate: 300,
    });
    return <div>{product.title}</div>;
}

export default Product;
