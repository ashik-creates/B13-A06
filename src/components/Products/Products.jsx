import { use } from "react";
import ProductsCard from "./ProductsCard/ProductsCard";

const Products = ({ dataPromise, cart, setCart }) => {
  const products = use(dataPromise);
  return (
    <div className="w-11/12 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      {products.map(product => <ProductsCard key={product.id} product={product} cart={cart} setCart={setCart}></ProductsCard>)}
    </div>
  );
};

export default Products;
