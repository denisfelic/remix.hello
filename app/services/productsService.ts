import type { ProductType } from "~/global";

const ProductServices = () => {
  async function getProductById(id: string | number | undefined): Promise<ProductType | null> {
    let data: any = {};
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      data = await res.json();
    } catch (error) {
      console.log(error)
      data = null;
    }
    return data;
  }


  async function getProducts(): Promise<ProductType[] | null> {
    let data: any = {};
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      data = await res.json();
    } catch (error) {
      console.log(error)
      data = null;
    }
    return data;
  }

  return {
    getProducts,
    getProductById
  }
}

export default ProductServices;