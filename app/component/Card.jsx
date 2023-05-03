'use client';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Card = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const router=useRouter()
  const removeProduct = (i) => {
    dispatch({type: 'REMOVE_PRODUCT',payload:i})
  }
  const updateGty = (i, gty) => {
    const quantity=+ gty
    dispatch({ type: 'CART_ADD_ITEM' ,payload:{...i,quantity}});
  }
  return (
    <>
      <div className="flex justify-between w-full  absolute top-14">
        <div className="w-[50%] ">
          {cart.cartItems.length === 0 ? (
            <h2 className="flex justify-center items-center text-3xl p-16 shadow-lg mr-8">
              سبد خرید شما خالی است -
              <Link className="text-blue-500" href={'/'}>
                برگشت
              </Link>
            </h2>
          ) : (
            cart.cartItems.map((resp) => (
              <div
                className="shadow-lg p-6 rounded-md flex justify-between items-center gap-6 mr-6 text-2xl "
                key={resp.id}
              >
                <Image
                  width={60}
                  height={60}
                  src={resp.image[0]}
                  alt="image"
                  className=""
                />
                <h2 className="text-xl font-bold flex justify-center items-center w-16 ">
                  {resp.name}
                </h2>
                <p>
                  تعداد 
                  <select
                    value={resp.quantity}
                    onChange={(e) => updateGty(resp, e.target.value)}
                  >
                    {[...Array(resp.countInStack).keys()].map((c) => (
                      <option key={c + 1} value={c + 1}>
                        {c + 1}
                      </option>
                    ))}
                  </select>
                </p>
                <p className="">قیمت :{resp.price} تومان</p>
                <button
                  className="primery-button "
                  onClick={() => removeProduct(resp)}
                >
                  حذف
                </button>
              </div>
            ))
          )}
        </div>
        <div className="shadow-xl w-[40%] ml-6 text-center p-6 text-3xl flex flex-col justify-around absolute left-0  ">
          <div>
            {`جمع تعداد واقلام (${cart.cartItems.reduce(
              (a, b) => a + b.quantity,
              0
            )}) 
          ${cart.cartItems.reduce(
            (a, b) => a + b.quantity * b.price,
            0
          )} تومان`}
          </div>
          <button
            className="primery-button w-full"
            onClick={() => router.push('login?redirect=/login')}
          >
            سفارش نهایی
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
