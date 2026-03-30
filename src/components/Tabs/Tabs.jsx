const Tabs = ({ activeTab, setActiveTab, cart }) => {
  return (
    <div className="w-11/12 mx-auto flex justify-center items-center mt-10 mb-5">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl font-bold text-center">
          Premium Digital Tools
        </h1>
        <p className="text-center text-gray-500">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="">
          <div className="tabs tabs-box rounded-full">
            <input
              onClick={() => setActiveTab("products")}
              type="radio"
              name="my_tabs_1"
              className={`tab rounded-full w-40 font-bold ${activeTab === "products" && "linear-gr-bg text-white"}`}
              aria-label="Products"
              defaultChecked
            />
            <input
              onClick={() => setActiveTab("cart")}
              type="radio"
              name="my_tabs_1"
              className={`tab rounded-full w-40 font-bold ${activeTab === "cart" && "linear-gr-bg text-white"}`}
              aria-label={`Cart(${cart.length})`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
