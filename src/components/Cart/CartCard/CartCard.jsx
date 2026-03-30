import { toast } from "react-toastify";

const CartCard = ({ product, cart, setCart }) => {
  const handleDelete = (deletedProduct) => {
    const newCart = cart.filter((item) => item.id !== deletedProduct.id);
    setCart(newCart);
    toast.success("Cart item removed successfully")
  };
  return (
    <div className="p-3 bg-gray-200 shadow-sm rounded-2xl flex flex-col gap-10 sm:gap-0 sm:flex-row justify-between sm:items-center">
      <div className="flex sm:justify-center items-center gap-3">
        <div className="w-10 h-10 sm:w-15 sm:h-15 bg-white rounded-full">
          <img
            src={product.icon}
            alt=""
            className="w-full rounded-full overflow-hidden"
          />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">{product.name}</h2>
          <p className="text-xl text-gray-500">${product.price}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleDelete(product)}
          className="btn text-red-500 rounded-full"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
