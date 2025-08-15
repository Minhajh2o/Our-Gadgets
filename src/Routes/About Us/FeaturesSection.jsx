import { FiShield, FiTruck, FiHeadphones, FiAward } from "react-icons/fi";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Quality Assurance",
      description:
        "Every product is tested and verified before reaching our customers",
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: "Fast Delivery",
      description:
        "Free shipping on orders over $50 with express delivery options",
    },
    {
      icon: <FiHeadphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Our dedicated support team is always ready to help you",
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Best Warranty",
      description: "Comprehensive warranty coverage on all our products",
    },
  ];
  
  return (
    <div className="container mx-auto py-16 md:py-24">
      <div className=" max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our Gadgets?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We go above and beyond to ensure your shopping experience is
            exceptional
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-700 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
