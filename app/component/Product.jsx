import Image from 'next/image';
const Product = ({ productSingel }) => {
  return (
    <div className="container m-auto  flex gap-6">
        <Image width={500} height={50} src={productSingel.image[0]} alt="image" />
        <Image width={500} height={50} src={productSingel.image[1]} alt="image" />
      <div className="flex flex-col justify-end m-10">
        <div className="text-2xl">
          <p> کدکالا :{productSingel.id}</p>
          <p> نام کالا :{productSingel.name}</p>
          <p> قیمت : {productSingel.price} تومان</p>
          <p> توضیحات :{productSingel.description}</p>
        </div>
        <button
          className="p-4 bg-blue-400 mt-4 text-xl font-bold hover:bg-blue-600
           rounded-md hover:text-white duration-700"
        >
          اضافه کردن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default Product;
