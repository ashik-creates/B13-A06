import { toast } from "react-toastify";
import EmptyText from "../EmptyText/EmptyText";
import CartCard from "./CartCard/CartCard";

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((p, c) => (p += c.price), 0).toFixed(2);

  const handleCheckOut = () => {
    setCart([])
    toast.success("Payment successful")
  }
  return (
    <>
      {cart.length > 0 ? (
        <div className="max-w-325 w-11/12 mx-auto mt-10 shadow-lg border border-gray-200 rounded-lg p-5">
          <div>
            <h2 className="text-3xl mb-3     font-bold">Your Cart</h2>
          </div>
          <div className="space-y-4">
            {cart.map((product) => (
              <CartCard
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              ></CartCard>
            ))}
          </div>
          <div className="p-2 flex justify-between items-center mt-3">
            <p>Total</p>
            <p className="text-xl font-semibold">${total}</p>
          </div>
          <button
            onClick={handleCheckOut}
            className="btn w-full rounded-full linear-gr-bg font-bold mt-3 text-white"
          >
            Proceed To Checkout
          </button>
        </div>
      ) : (
        <EmptyText></EmptyText>
      )}
    </>
  );
};

export default Cart;
