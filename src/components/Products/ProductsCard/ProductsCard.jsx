import { MdCheck } from "react-icons/md";

const ProductsCard = ({ product }) => {
  return (
    <div className="relative">
      <div className="p-5 shadow-lg rounded-lg border border-gray-300 flex flex-col gap-6 h-full">
        <div className="w-10 h-10">
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
                <span className="text-gray-500">
                  {item}
                </span>
              </p>
            ))}
          </div>
        </div>
        <button className="btn linear-gr-bg w-full rounded-full text-white font-bold">
          Buy Now
        </button>
      </div>
      <div className="absolute badge bg-amber-300 top-2 right-2 rounded-full">
        Popular
      </div>
    </div>
  );
};

export default ProductsCard;
