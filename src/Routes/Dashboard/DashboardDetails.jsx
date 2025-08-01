import { useActiveTab } from "../Context/ActiveTabContext";

const DashboardDetails = () => {
  const { activeTab, handleDashboardCart, handleDashboardWishlist } =
    useActiveTab();

  return (
    <div className="bg-purple-700 text-white ">
      <div className="px-4 py-4 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Dashboard
        </h1>
        <p className="max-w-2xl mx-auto pt-2 md:pt-4 text-center">
          Discover cutting-edge gadgets designed to enhance your daily life.
          Whether you&apos;re interested in smart technology or stylish
          accessories, our collection offers something for everyone!
        </p>
      </div>
      {/* buttons */}
      <div>
        <div className="flex justify-center gap-4 md:gap-6 pb-4 md:pb-8">
          <button
            onClick={handleDashboardCart}
            className={`px-8 py-3 md:px-12 rounded-full shadow-md transition-colors duration-300 ${
              activeTab === "cart"
                ? "bg-white text-purple-700 font-semibold"
                : "bg-purple-700 text-white border border-white hover:bg-purple-600"
            }`}
          >
            Cart
          </button>
          <button
            onClick={handleDashboardWishlist}
            className={`px-8 py-3 md:px-12 rounded-full shadow-md transition-colors duration-300 ${
              activeTab === "wishlist"
                ? "bg-white text-purple-700 font-semibold"
                : "bg-purple-700 text-white border border-white hover:bg-purple-600"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardDetails;
