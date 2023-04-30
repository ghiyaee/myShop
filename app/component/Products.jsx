import Link from 'next/link';
import Image from 'next/image';
const Products = ({ products }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center  mt-4">
      {products?.map((resp) => (
        <div className="shadow-lg p-6 rounded-md flex flex-col justify-between" key={resp.id}>
          <div className="w-[25rem] h-[18rem] flex justify-center">
            <Link href={`/${resp.id}`}>
              <Image width={230} height={200} src={resp.image} alt="image" />
            </Link>
          </div>
          <div className=" flex flex-col justify-center">
            <h2 className='text-xl font-bold'>نام گوشی :{resp.name}</h2>
            <div>قیمت :{resp.price} تومان</div>
            <div>توضیحات :{resp.description}</div>
          </div>
          <button
            className="p-4 bg-blue-500 mt-4 text-xl font-bold hover:bg-blue-600
           rounded-md hover:text-white duration-700"
          >
           بیشتر...
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
