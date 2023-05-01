'use client';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import Link from 'next/link';
import Image from 'next/image';
const Card = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  return (
    <div className="container m-auto">
      {cart.cartItems.map((resp) => (
        <div className="shadow-lg p-6 rounded-md flex " key={resp.id}>
          <div className="flex  gap-6 w-[5rem] h-[5rem] ">
            <Image
              width={230}
              height={200}
              src={resp.image[0]}
              alt="image"
              className=""
            />
            <div className="flex items-center  ">
              <h2 className="text-xl font-bold ml-10 w-[15rem]">{resp.name}</h2>
              <p className="ml-10 w-[15rem]">قیمت :{resp.price} تومان</p>

              <button className="primery-button w-[15rem] ml-10">حذف</button>
              <button className="primery-button w-[15rem] ">
                سفارش نهایی...
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
