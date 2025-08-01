import { IoClose } from "react-icons/io5";
import { useActiveTab } from "../Context/ActiveTabContext";

const DashboardProductCard = () => {
  const { activeTab } = useActiveTab();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-6 w-full  mx-auto">
      {/* Product Image */}
      <figure className="w-32 h-32 md:w-48 md:h-48 bg-gray-200 rounded-xl flex-shrink-0">
        <img
          src=""
          alt="{title}"
          className="w-full h-full object-cover rounded-xl"
        />
      </figure>

      {/* Product Details */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg md:text-xl font-bold text-gray-800">title</h3>
          {/* Remove Button */}
          <button className="ml-auto w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-200 transition-colors">
            <IoClose size={20} />
          </button>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2">description</p>
        <p className="font-semibold text-gray-700">Price: $price</p>
        {activeTab === "wishlist" && (
          <button className="btn bg-purple-700 text-white rounded-full">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardProductCard;
