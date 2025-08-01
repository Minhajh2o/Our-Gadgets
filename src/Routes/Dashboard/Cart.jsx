import { PiSlidersDuotone } from "react-icons/pi";
import DashboardProductCard from "../Cards/DashboardProductCard";

const Cart = ({ filteredCart }) => {
  return (
    <div className="relative ">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Cart</h2>

        {/* Cart Summary Section */}
        <div className="flex items-center gap-4">
          <p className="hidden md:block text-xl font-bold text-gray-800">Total cost: 999.99</p>

          <button className="p-[2px] rounded-full bg-gradient-to-b from-purple-700 to-fuchsia-600">
            <span className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full">
              <span className="font-semibold text-purple-700">
                Sort by Price
              </span>
              <PiSlidersDuotone className="text-purple-600" />
            </span>
          </button>

          <button className="hidden md:block px-6 py-2.5 bg-gradient-to-b from-purple-700 to-fuchsia-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-300 shadow-md">
            Purchase
          </button>
        </div>
      </div>

      {/* Cart Items Section */}
      <div className="flex flex-col gap-6">
        {filteredCart.map((product) => (
          <DashboardProductCard key={product.product_id} product={product} />
        ))}
      </div>

      {/* total price and purchase button for small devices */}
      <div className="sticky bottom-0 left-0 right-0 bg-white shadow-lg z-10 mt-6">
        <div className="flex items-center justify-between p-4 ">
          <p className="text-xl font-bold text-gray-800">Total cost: 999.99</p>

          <button className="px-6 py-2 bg-gradient-to-b from-purple-700 to-fuchsia-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-300 shadow-md">
            Purchase
          </button>
        </div>
        </div>
    </div>
  );
};

export default Cart;
