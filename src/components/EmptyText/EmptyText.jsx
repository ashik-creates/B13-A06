import { CiShoppingCart } from "react-icons/ci";

const EmptyText = () => {
  return (
    <div className="w-full mx-auto p-10 flex justify-center items-center shadow-sm border border-gray-200 rounded-lg">
      <div className="flex flex-col gap-3 justify-center items-center ">
        <CiShoppingCart className="w-20 h-20 text-gray-500"></CiShoppingCart>
        <h2 className="font-bold text-2xl text-gray-400 text-center">
          Your cart is empty
        </h2>
      </div>
    </div>
  );
};

export default EmptyText;
