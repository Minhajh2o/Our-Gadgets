import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="bg-gray-50 py-16">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Ready to Upgrade Your Tech?
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Our Gadgets for their
          technology needs
        </p>
        <button onClick={goToHome} className="px-8 py-3 bg-gradient-to-b from-purple-700 to-fuchsia-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-md">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default CTASection;
