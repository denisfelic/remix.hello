
import type { LoaderFunction } from '@remix-run/node';
import type { ProductType } from '~/global';
import ProductServices from '../../services/productsService';
import { useLoaderData } from '@remix-run/react';
import { Product } from '~/components/Product';

export const loader: LoaderFunction = async () => {
  const data = await ProductServices().getProducts();
  console.log('DATA: ', data);
  return {
    products: data
  }
}
interface LoaderType {
  products: ProductType[];
}
export default function Index() {

  const { products } = useLoaderData<LoaderType>();
  return (
    <div className='container mx-auto py-20'>
      <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-5'>
        {products?.map((product) => (
          <a key={product.id} href={`/store/product/${product.id}`}>
            <Product product={product} />
          </a>
        ))}
      </div>
    </div>
  )
}