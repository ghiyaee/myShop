import Product from '@/app/component/Product';
const fetchData = async () => {
  const data = await fetch('http://localhost:3000/api/products');
  const resp = await data.json();
  return resp;
};
const ProductSingel = async ({ params }) => {
  const product = await fetchData();
  const productSingel = product.find((f) => f.id === +params.id);
  return <Product productSingel={productSingel} />;
};
export default ProductSingel;
