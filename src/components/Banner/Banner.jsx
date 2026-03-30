import { CiPlay1 } from "react-icons/ci";
import { FaRegDotCircle } from "react-icons/fa";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="max-w-[95%] md:w-11/12 mx-auto min-h-162.5 flex items-center justify-center mt-5">
      <div className="flex flex-col md:grid md:grid-cols-12 items-center gap-10">
        <div className="text-center md:text-start col-span-1 items-center md:items-start md:col-span-7 justify-center flex flex-col gap-5">
          <div className="badge bg-purple-200 text-[#4F39F6] rounded-full max-[300px]:hidden">
            <FaRegDotCircle></FaRegDotCircle> New: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold">Supercharge Your Digital Workflow</h1>
          <p className="md:max-w-122 text-gray-500">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="btn linear-gr-bg rounded-full text-white">Explore Products</button>
            <button className="btn btn-outline rounded-full text-[#4F39F6] border-[#4F39F6]">
              <CiPlay1></CiPlay1> Watch Demo
            </button>
          </div>
        </div>
        <div className="col-span-1 md:col-span-5">
          <img src={bannerImg} alt="banner image" className="w-full h-full  object-cover overflow-hidden"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
