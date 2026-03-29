const Stats = () => {
  return (
    <div className="mt-5 py-10 linear-gr-bg">
      <div className="w-11/12 mx-auto flex flex-col sm:flex-row justify-around items-center text-white">
        <div className="text-center">
          <h2 className="text-6xl font-extrabold">50K+</h2>
          <p className="text-2xl">Active Users</p>
        </div>

        <div className="divider sm:divider-horizontal before:bg-[#a09b9b] after:bg-[#a09b9b]"></div>

        <div className="text-center">
          <h2 className="text-6xl font-extrabold">200+</h2>
          <p className="text-2xl">Premium Tools</p>
        </div>

        <div className="divider sm:divider-horizontal before:bg-[#a09b9b] after:bg-[#a09b9b]"></div>

        <div className="text-center">
          <h2 className="text-6xl font-extrabold">4.9</h2>
          <p className="text-2xl">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
