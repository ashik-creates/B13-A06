import cartImg from "../../assets/products/shopping-cart.png";

const NavBar = ({ cart }) => {
  return (
    <div className="shadow-sm sticky top-0 z-10 bg-white">
      <div className="navbar max-[400px]:gap-8 justify-between bg-base-100 w-full sm:w-11/12 mx-auto max-[400px]:flex-col">
        <div className="flex items-center gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div className=" flex items-center gap-7">
            <h1 className="text-2xl sm:text-3xl linear-gr-bg-logo font-bold text-transparent">
              DigiTools
            </h1>
            <div className="relative w-5 hidden max-[400px]:flex">
              <img src={cartImg} alt="cart logo" className="w-full" />
              {cart.length > 0 && <div className="absolute w-3 h-3 flex justify-center items-center bg-red-500 rounded-[100%] -top-1 left-1">
                <p className="text-[10px] text-white">{cart.length}</p>
              </div>}
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="relative w-5 max-[400px]:hidden">
            <img src={cartImg} alt="cart logo" className="w-full" />
            {cart.length > 0 && <div className="absolute w-3 h-3 flex justify-center items-center bg-red-500 rounded-[100%] -top-1 left-1">
                <p className="text-[10px] text-white">{cart.length}</p>
              </div>}
          </div>
          <p className="text-sm font-medium">Login</p>

          <a className="btn linear-gr-bg rounded-full text-white">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
