import { Product } from '@/types/types';

import ProductCard from './ProductCard';

function ProductList({ products }: { products: Product[] }) {
    return (
        <ul>
            {products.map((product: Product) => {
                return (
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li>
                );
            })}
        </ul>
    );
}

export default ProductList;
