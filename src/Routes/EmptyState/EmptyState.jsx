import { useActiveTab } from "../Context/ActiveTabContext";
import EmptyCartSVG from "./EmptyCartSVG";
import EmptyWishlistSVG from "./EmptyWishlistSVG";

const EmptyState = () => {
  const { activeTab } = useActiveTab();

  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center mt-12 md:mt-16">
        {/* Alert Icon */}
        <figure className=" mx-auto mb-6">
          {activeTab === "cart" ? (
            <EmptyCartSVG className="w-full h-full" />
          ) : (
            <EmptyWishlistSVG className="w-full h-full" />
          )}
        </figure>

        <h3 className="text-3xl text-gray-700 font-semibold mb-4">
          {activeTab === "cart" ? "Cart is Empty" : "Wishlist is Empty"}
        </h3>

        {/* Button */}
        <button
            className="px-6 py-2 bg-gradient-to-b from-purple-700 to-fuchsia-600 text-white font-semibold rounded-full shadow-md cursor-pointer hover:scale-103  transition-colors duration-300"
          >
            Add Products
          </button>
      </div>
    </div>
  );
};

export default EmptyState;
