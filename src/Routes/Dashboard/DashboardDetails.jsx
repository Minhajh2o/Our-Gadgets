import { useActiveTab } from "../Context/ActiveTabContext";

const DashboardDetails = () => {
  const { activeTab, handleDashboardCart, handleDashboardWishlist } =
    useActiveTab();

  return (
    <div className="bg-purple-700 text-white px-6 py-6 md:py-8">
      <div className="">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Dashboard
        </h1>
        <p className="max-w-2xl mx-auto pt-2 md:pt-4 text-center text-lg md:text-xl">
          Discover cutting-edge gadgets designed to enhance your daily life.
          Whether you&apos;re interested in smart technology or stylish
          accessories, our collection offers something for everyone!
        </p>
      </div>
      {/* buttons */}
      <div>
        <div className="flex justify-center gap-4 md:gap-6 pt-4 md:pt-6">
          <button
            onClick={handleDashboardCart}
            className={`px-8 py-3 md:px-12 rounded-full shadow-md cursor-pointer transition-colors duration-300 ${
              activeTab === "cart"
                ? "bg-white text-purple-700 font-semibold"
                : "bg-purple-700 text-white border border-white hover:bg-purple-600"
            }`}
          >
            Cart
          </button>
          <button
            onClick={handleDashboardWishlist}
            className={`px-8 py-3 md:px-12 rounded-full shadow-md cursor-pointer transition-colors duration-300 ${
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
