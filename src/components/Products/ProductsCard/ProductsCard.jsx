import { useState } from "react";
import { MdCheck } from "react-icons/md";
import { toast } from "react-toastify";

const ProductsCard = ({ product, cart, setCart }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = (selectedProduct) => {
    const isInCart = cart.find((p) => p.id === selectedProduct.id);
    if(isInCart){
      toast.warning("Product is already in Cart")
      return;
    }
    setCart([...cart, selectedProduct])
    setIsSelected(true);
    toast.success("Product is added to Cart")
  };
  return (
    <div className="relative">
      <div className="p-5 shadow-lg rounded-xl border border-gray-300 flex flex-col gap-6 h-full">
        <div className="w-15 h-15">
          <img
            src={product.icon}
            alt={product.name}
            className="w-full object-cover overflow-hidden"
          />
        </div>
        <div className="flex-1 space-y-5">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-2xl font-bold">
            ${product.price}/{product.period}
          </p>
          <div>
            {product.features.map((item, ind) => (
              <p key={ind} className="flex items-center gap-2">
                {" "}
                <span className="text-green-500">
                  <MdCheck></MdCheck>
                </span>
                <span className="text-gray-500">{item}</span>
              </p>
            ))}
          </div>
        </div>
        <button
          onClick={() => handleSelected(product)}
          className={`btn ${isSelected ? "bg-green-500" : "linear-gr-bg"} w-full rounded-full text-white font-bold duration-200`}
        >
          {isSelected ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
      <div
        className={`absolute badge ${
          product.tagType === "best seller" && "bg-amber-200 text-amber-600"
        } ${product.tagType === "popular" && "bg-purple-200 text-purple-600"} ${
          product.tagType === "new" && "bg-green-200 text-green-600"
        } top-2 right-2 rounded-full`}
      >
        {product.tag}
      </div>
    </div>
  );
};

export default ProductsCard;
