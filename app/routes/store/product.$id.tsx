import type { LoaderFunction } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Product } from "~/components/Product";
import type { ProductType } from "~/global";
import ProductServices from "~/services/productsService";

interface LoaderType {
  product: ProductType;
}
export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params
  let data = await  ProductServices().getProductById(id);
  
  if (!data) {
    throw new Response('Not found', {
      status: 404,
    });
  }
  return json({
    product: data
  });
}

export default function Index() {
  const { product } = useLoaderData<LoaderType>();
  return (
    <div className="p-5 ">
      <Product product={product} />
    </div>
  )
}
