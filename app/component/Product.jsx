import Image from 'next/image';
const Product = ({ productSingel }) => {
  return (
    <div className="container m-auto  flex gap-6">
      <div className="ml-10">
        <Image width={400} height={100} src={productSingel.image} alt="image" />
      </div>
      <div className="flex flex-col justify-between m-10">
        <div className="text-2xl">
          <p> کدکالا :{productSingel.id}</p>
          <p> نام کالا :{productSingel.name}</p>
          <p> قیمت : {productSingel.price} تومان</p>
          <p> توضیحات :{productSingel.description}</p>
        </div>
        <button
          className="p-4 bg-yellow-500 mt-4 text-xl font-bold hover:bg-yellow-600
           rounded-md hover:text-white duration-700"
        >
          اضافه کردن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default Product;
