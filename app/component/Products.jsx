import Link from 'next/link';
import Image from 'next/image';
const Products = ({ products }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center  mt-4 bg-red-500">
      {products?.map((resp) => (
        <div className="shadow-md p-6 rounded-md flex flex-col " key={resp.id}>
          <div className="mt-4 ">
            <Link href={`/${resp.id}`}>
              <Image width={180} height={10} src={resp.image} alt="image" />
            </Link>
          </div>
          <div className="mt-6 flex flex-col justify-between">
            <div>کدکالا :{resp.id}</div>
            <div>نام گوشی :{resp.name}</div>
            <div>قیمت :{resp.price} تومان</div>
            <div>توضیحات :{resp.description}</div>
          </div>
          <button
            className="p-4 bg-yellow-500 mt-4 text-xl font-bold hover:bg-yellow-600
           rounded-md hover:text-white duration-700"
          >
            سفارش
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
