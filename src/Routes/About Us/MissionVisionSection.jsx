import { FiAward } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const MissionVisionSection = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container  max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mission & Vision
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <HiOutlineGlobeAlt className="w-8 h-8 text-purple-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To democratize access to cutting-edge technology by providing
              high-quality gadgets at competitive prices, backed by exceptional
              customer service and support.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <FiAward className="w-8 h-8 text-purple-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become the world's most trusted technology retailer, known for
              innovation, reliability, and our commitment to enhancing lives
              through technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;
