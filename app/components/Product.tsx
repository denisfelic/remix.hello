import type { ProductType } from "~/global";

export function Product({ product }: { product: ProductType }) {
  return (
    <div className="w-fit flex shadow-2xl rounded-2xl max-w-md h-[290px]">
      <img className="!w-[160px] h-[150px]" src={product?.image} alt="" />
      <div className=" flex flex-col p-5">
        <div className="">
          <h3 className="text-ellipsis max-h-[20px] overflow-hidden">{product?.title}</h3>
        </div>
        <div className="mt-5 flex-1 text-sm text-gray-500">
          <p className="text-ellipsis max-h-[100px] overflow-hidden">{product?.description}</p>
        </div>
        <div className="self-end">
          <button className=" bg-green-500 text-white rounded-2xl w-fit py-2 px-10">Buy</button>
        </div>
      </div>

    </div>
  )
}