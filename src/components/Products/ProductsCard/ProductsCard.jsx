import designToolImg from "../../../assets/products/design-tool.png";

const ProductsCard = () => {
  return(
  <div>
    <div className="p-5 shadow-lg rounded-lg border border-gray-300">
        <div>
            <img src={designToolImg} alt="tool image" />
        </div>
        <div>
            <h2>
                AI Writing Pro
            </h2>
            <p>
                Generate high-quality content, blogs, and marketing copy in seconds with advanced AI
            </p>
            <p>
                $29/mo
            </p>
            <div>
                <p>Unlimited AI generations</p>
                <p>50+ writing templates</p>
                <p>Grammar checker</p>
            </div>
        </div>
        <button className="btn linear-gr-bg w-full rounded-full text-white font-bold">
            Buy Now
        </button>
    </div>
  </div>
  )
};

export default ProductsCard;
