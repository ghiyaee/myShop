import Link from 'next/link';
import Image from 'next/image';
const Products = ({ products }) => {
  return (
    <div className="flex gap-6 flex-wrap justify-center  my-6">
      {products?.map((resp) => (
        <div
          className="shadow-lg p-6 rounded-md flex flex-col justify-between text-center"
          key={resp.id}
        >
          <Link href={`/${resp.id}`}>
            <div className="w-[25rem] h-[18rem] flex justify-center">
              <Image
                width={230}
                height={200}
                src={resp.image[0]}
                alt="image"
                className="duration-1000 hover:scale-125"
              />
            </div>
            <div className=" flex flex-col justify-center mt-4">
              <h2 className="text-xl font-bold">نام گوشی :{resp.name}</h2>
              <p>قیمت :{resp.price} تومان</p>
              <p>توضیحات :{resp.description}</p>
            </div>
            <button className="primery-button">بیشتر...</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
