import { IoClose } from "react-icons/io5";
import { useActiveTab } from "../Context/ActiveTabContext";
import { useInterest } from "../Context/InterestContext";

const DashboardProductCard = ({ product }) => {
  const { activeTab } = useActiveTab();
  const { addToCart, removeFromCart, removeFromWishlist } = useInterest();

  // Destructure product details
  const { product_id, product_title, product_image, price, description } =
    product;

  // Handle adding product to cart and removing it from wishlist
  const handleAddToCart = () => {
    removeFromWishlist(product_id);
    addToCart(product_id);
  };

  // Handle removing product from cart and wishlist
  const handleRemoveProduct = () => {
    removeFromCart(product_id);
    removeFromWishlist(product_id);
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg flex items-center gap-4 md:gap-6 w-full  mx-auto">
      {/* Product Image */}
      <figure
        className={`bg-gray-200 rounded-xl shrink-0 overflow-hidden ${
          activeTab === "wishlist"
            ? "w-28 h-28 md:w-48 md:h-40"
            : "w-24 h-24 md:w-36 md:h-26"
        }`}
      >
        <img
          src={product_image}
          alt={product_title}
          className="w-full h-full object-cover rounded-xl"
        />
      </figure>

      {/* Product Details */}
      <div className="flex-1 space-y-1 md:space-y-3">
        <div className="flex items-center justify-between">
          {/* Product Title */}
          <h3 className="text-base md:text-xl font-bold text-gray-800 line-clamp-1">
            {product_title}
          </h3>

          {/* Remove Button */}
          <button
            onClick={handleRemoveProduct}
            className="ml-auto w-8 h-8 rounded-full bg-red-100 text-red-500 flex shrink-0 items-center justify-center hover:bg-red-200 transition-colors">
            <IoClose size={20} />
          </button>
        </div>

        {/* Description & Price */}
        <p className="text-sm md:text-base line-clamp-2">
          <span className=" font-semibold text-gray-800">Description: </span>
          <span className="text-gray-600 font-normal">{description}</span>
        </p>
        <p className="text-sm md:text-base font-semibold text-gray-800">
          Price: ${price}
        </p>

        {/* Add to Cart Button for Wishlist */}
        {activeTab === "wishlist" && (
          <button
            onClick={handleAddToCart}
            className="btn bg-purple-700 text-white rounded-full"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardProductCard;
