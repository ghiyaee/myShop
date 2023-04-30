'use client';
import Link from 'next/link';
import '../app/globals.css';
import Products from './component/Products';
import { useState, useEffect } from 'react';
import Loading from './loading';

const Homepage = () => {
  const [products, useProducts] = useState([]);
  useEffect(() => {
    fetchDate();
  }, []);
  const fetchDate = async () => {
    const fetchData = await fetch('http://localhost:3000/api/products');
    const resP = await fetchData.json();
    useProducts(resP);
  };
  return (
    <div className="container m-auto mt-4 px-4 min-h-screen">
      {products && <Products products={products} />}
    </div>
  );
};

export default Homepage;
