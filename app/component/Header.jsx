'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useContext } from 'react';
import { Store } from '../utils/Store';
const Header = () => {
  const { state, dispatch } = useContext(Store)
  const { cart } = state
  console.log(cart);
  return (
    <header>
      <nav
        className="h-14 bg-zinc-600 text-white flex items-center
         px-4 justify-between font-bold text-2xl shadow-md"
      >
        <Link href="/">فروشگاه من</Link>
        <div className="flex gap-4">
          {cart.cartItems.length > 0 ?
            <span className="rounded-full bg-red-500 w-10 h-10 flex justify-center items-center ">
              {cart.cartItems.reduce((a, b) => a + b.quantity,0)}
            </span>
          :''}
          <Link href={'/card'}>سبدخرید</Link>
          <Link href={'/login'}>ورود</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
