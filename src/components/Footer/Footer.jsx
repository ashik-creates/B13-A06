import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-24 bg-[#101727]">
      <div className="max-w-325 w-11/12 mx-auto text-white">
        <div className="grid gap-5 sm:grid-cols-4 lg:grid-cols-12">
          <div className="sm:col-span-2
          lg:col-span-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 ">DigiTools</h2>
            <p className="text-white/60">
              Premium digital tools for creators, <br /> professionals, and businesses.
              Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-2 text-white/80">Product</h3>
            <ul className="text-white/60">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-2 text-white/80">Company</h3>
            <ul className="text-white/60">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-2 text-white/80">Resources</h3>
            <ul className="text-white/60">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-2 text-white/80">Social Links</h3>
            <div className="flex justify-start items-center gap-2 flex-wrap">
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center"><AiFillInstagram className="text-black"></AiFillInstagram></div>
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center"><FaFacebookSquare className="text-black"></FaFacebookSquare></div>
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center"><FaXTwitter className="text-black"></FaXTwitter></div>
            </div>
          </div>
        </div>
        <div className="mt-5 py-7 flex justify-center flex-wrap gap-5 sm:justify-between items-center text-white/55 border-t border-gray-500 text-sm">
            <p className="text-center sm:text-start">© 2026 Digitools. All rights reserved.</p>
            <div className="flex flex-wrap justify-center items-center gap-3">
                <p>
                    Privacy Policy  
                </p>
                <p>
                      Terms of Service  
                </p>
                <p>
                     Cookies
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
