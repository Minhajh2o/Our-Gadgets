import { PiSlidersDuotone } from "react-icons/pi";
import DashboardProductCard from "../Cards/DashboardProductCard";
import { useEffect, useState } from "react";
import { useInterest } from "../Context/InterestContext";
import PurchasedModal from "../Modal/PurchasedModal";
import EmptyState from "../EmptyState/EmptyState";

const Cart = ({ filteredCart, setFilteredCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { clearCart } = useInterest();

  // Calculate total price of items in the cart
  useEffect(() => {
    const totalCost = filteredCart
      .reduce((total, product) => total + product.price, 0)
      .toFixed(2);
    setTotalPrice(totalCost);
  }, [filteredCart]);

  // Function to sort products by price
  const sortByPrice = () => {
    const sorted = [...filteredCart].sort((a, b) => b.price - a.price);
    setFilteredCart(sorted);
  };

  const handlePurchase = () => {
    // Show purchase success modal
    document.getElementById("my_modal_5").showModal();
  };

  // Function to handle modal close and clear cart
  const handleModalClose = () => {
    // Clear all items from cart in localStorage and context
    clearCart();
    // Clear the local state
    setFilteredCart([]);
    // Reset total Price to zero
    setTotalPrice(0);
  };

  return (
    <div className="relative ">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Cart</h2>

        {/* Cart Summary Section */}
        <div className="flex items-center gap-4">
          <p className="hidden md:block text-xl font-bold text-gray-800">
            Total cost: {totalPrice}
          </p>

          <button
            onClick={sortByPrice}
            disabled={filteredCart.length === 0}
            className={`p-[2px] rounded-full bg-gradient-to-b from-purple-700 to-fuchsia-600 cursor-pointer transition-opacity duration-300
              disabled:opacity-50 disabled:cursor-not-allowed`} 
          >
            <span className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full hover:bg-purple-100 transition-color duration-300">
              <span className="font-semibold text-purple-700">
                Sort by Price
              </span>
              <PiSlidersDuotone className="text-purple-600" />
            </span>
          </button>

          <button
            onClick={handlePurchase}
            disabled={Number(totalPrice) === 0}
            className={`hidden md:block px-6 py-2.5 bg-gradient-to-b from-purple-700 to-fuchsia-600 text-white font-semibold rounded-full cursor-pointer hover:scale-103 transition-all duration-300 shadow-md
              disabled:opacity-50 disabled:cursor-not-allowed`} 
          >
            Purchase
          </button>
        </div>
      </div>

      {filteredCart.length === 0 ? (
        <div className="flex items-center justify-center">
          <EmptyState />
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {filteredCart.map((product) => (
            <DashboardProductCard key={product.product_id} product={product} />
          ))}
        </div>
      )}

      {/* total price and purchase button for small devices */}
      <div className="md:hidden sticky bottom-0 left-0 right-0 bg-white shadow-lg z-10 mt-6">
        <div className="flex items-center justify-between p-4 ">
          <p className="text-xl font-bold text-gray-800">
            Total cost: {totalPrice}
          </p>

          <button
            onClick={handlePurchase}
            className="px-6 py-2 bg-gradient-to-b from-purple-700 to-fuchsia-600 text-white font-semibold rounded-full cursor-pointer hover:opacity-90 transition-opacity duration-300 shadow-md"
          >
            Purchase
          </button>
        </div>
      </div>

      {/* Purchase Success Modal */}
      <PurchasedModal totalPrice={totalPrice} onClose={handleModalClose} />
    </div>
  );
};

export default Cart;
