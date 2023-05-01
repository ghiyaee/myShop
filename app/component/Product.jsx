'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useContext } from 'react';
import { Store } from '../utils/Store';
const Product = ({ productSingel }) => {
const {state, dispatch }=useContext(Store)
  const cardHandel = () => {
    const existItem = state.cart.cartItems.find(f => f.id === productSingel.id);
    const quantity=existItem ? existItem.quantity +1 :1
   dispatch({type:'CART_ADD_ITEM',payload:{...productSingel,quantity}})
  };

  return (
    <div className="container m-auto my-6">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <Image
          width={500}
          height={50}
          src={productSingel.image[0]}
          alt="image"
          className=""
        />
        <Image
          width={500}
          height={50}
          src={productSingel.image[1]}
          alt="image"
          className=""
        />
        <div className="flex flex-col ">
          <div className="text-2xl shadow-lg p-6  rounded-lg">
            <p> کدکالا :{productSingel.id}</p>
            <p> نام کالا :{productSingel.name}</p>
            <p> قیمت : {productSingel.price} تومان</p>
            <p> توضیحات :{productSingel.description}</p>
            <p>
              وضعیت :
              {productSingel.countInStack > 0 ? (
                <span>موجود</span>
              ) : (
                <span>ناموجود</span>
              )}
            </p>
            {productSingel.countInStack ? (
              <button onClick={cardHandel} className="primery-button">
                اضافه کردن به سبد خرید
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
