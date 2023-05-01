import Image from 'next/image';
const Product = ({ productSingel }) => {
  return (
    <div className="container m-auto my-6">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <Image
          width={500}
          height={50}
          src={productSingel.image[0]}
          alt="image"
          className="duration-1000 hover:scale-125"
        />
        <Image
          width={500}
          height={50}
          src={productSingel.image[1]}
          alt="image"
          className="duration-1000 hover:scale-125"
        />
        <div className="flex flex-col ">
          <div className="text-2xl shadow-lg p-6  rounded-lg">
            <p> کدکالا :{productSingel.id}</p>
            <p> نام کالا :{productSingel.name}</p>
            <p> قیمت : {productSingel.price} تومان</p>
            <p> توضیحات :{productSingel.description}</p>
            <button
              className="p-4 bg-blue-400 mt-4 text-xl font-bold hover:bg-blue-600
           rounded-md hover:text-white duration-700"
            >
              اضافه کردن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
