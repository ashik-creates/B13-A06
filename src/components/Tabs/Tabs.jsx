const Tabs = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-center items-center mt-10 mb-5">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl font-bold text-center">Premium Digital Tools</h1>
        <p className="text-center text-gray-500">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="">
          <div className="tabs tabs-box">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab rounded-full w-40"
              aria-label="Products"
              defaultChecked
            />
            <input
              type="radio"
              name="my_tabs_1"
              className="tab rounded-full w-40"
              aria-label="Cart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
