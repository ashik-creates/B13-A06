import { MdCheck } from "react-icons/md";

const PricingCard = ({ item }) => {
  return (
    <div className="relative mt-10">
      <div className={`p-5 shadow-lg rounded-xl border border-gray-200 flex flex-col gap-6 h-full ${item.isMostPopular ? "linear-gr-bg text-white" : "bg-gray-50"}`}>
        <div className="flex-1 space-y-5">
          <h2 className="text-3xl font-bold">{item.plan}</h2>
          <p className={`${item.isMostPopular?"text-white/70":"text-gray-500"}`}>{item.tagline}</p>
          <p className="text-2xl font-bold">
            {item.price}
            {item.billing}
          </p>
          <div>
            {item.features.map((i, ind) => (
              <p key={ind} className="flex items-center gap-2">
                {" "}
                <span className={`${item.isMostPopular ? "text-white/70" : "text-green-500"}`}>
                  <MdCheck></MdCheck>
                </span>
                <span className={`${item.isMostPopular ? "text-white/70" : "text-gray-500"}`}>{i}</span>
              </p>
            ))}
          </div>
        </div>
        <button
          className={`btn  w-full rounded-full ${item.isMostPopular ? "bg-white text-[#4F39F6]": "linear-gr-bg text-white"}`}
        >
          {item.buttonText}
        </button>
      </div>
      {item.isMostPopular && (
        <div className="absolute badge  -top-3 left-[35%] rounded-full bg-amber-100 text-amber-600">
          Most Popular
        </div>
      )}
    </div>
  );
};

export default PricingCard;
