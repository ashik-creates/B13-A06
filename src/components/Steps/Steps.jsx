import FirstStepImg from "../../assets/user.png";
import SectStepImg from "../../assets/package.png";
import ThStepImg from "../../assets/rocket.png";

const Steps = () => {
  return (
    <div className="mt-20 bg-gray-200 py-24">
      <div className="max-w-325 w-11/12 mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-5">Get Started in 3 Steps</h1>
          <p className="text-gray-500">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col justify-center items-center text-center shadow-lg border border-gray-200 p-15 gap-5 bg-white rounded-lg">
            <img src={FirstStepImg} alt="" />
            <h2 className="text-2xl font-bold">Create Account</h2>
            <p className="text-gray-500">
              Sign up for free in seconds. No credit card required to get
              started
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center shadow-lg border border-gray-200 p-15 gap-5 bg-white rounded-lg">
            <img src={SectStepImg} alt="" />
            <h2 className="text-2xl font-bold">Choose Products</h2>
            <p className="text-gray-500">Browse our catalog and select the tools that fit your needs.</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center shadow-lg border border-gray-200 p-15 gap-5 bg-white rounded-lg">
            <img src={ThStepImg} alt="" />
            <h2 className="text-2xl font-bold">Start Creating</h2>
            <p className="text-gray-500">Download and start using your premium tools immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
