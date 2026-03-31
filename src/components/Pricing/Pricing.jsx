import PricingCard from "./PricingCard/PricingCard";

const Pricing = () => {
  const pricingArr = [
    {
      plan: "Starter",
      tagline: "Perfect for getting started",
      price: "$0",
      billing: "/Month",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      isMostPopular: false,
    },
    {
      plan: "Pro",
      tagline: "Best for professionals",
      price: "$29",
      billing: "/Month",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      isMostPopular: true,
    },
    {
      plan: "Enterprise",
      tagline: "For teams and businesses",
      price: "$99",
      billing: "/Month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      isMostPopular: false,
    },
  ];
  return (
    <div className="my-20 max-w-325 w-11/12 mx-auto">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {pricingArr.map((item, ind) => (
          <PricingCard key={ind} item={item}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
