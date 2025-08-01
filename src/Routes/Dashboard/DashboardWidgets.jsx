import { useEffect, useState } from "react";
import { useActiveTab } from "../Context/ActiveTabContext";
import { useInterest } from "../Context/InterestContext";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const DashboardWidgets = ({ gadgetsData }) => {
  const { activeTab } = useActiveTab();
  const { cartItems, wishlistItems } = useInterest();
  const [filteredCart, setFilteredCart] = useState([]);
  const [filteredWishlist, setFilteredWishlist] = useState([]);

  useEffect(() => {
    if (gadgetsData) {
      setFilteredCart(
        gadgetsData.filter((item) => (cartItems || []).includes(item.product_id))
      );
      setFilteredWishlist(
        gadgetsData.filter((item) => (wishlistItems || []).includes(item.product_id))
      );
    }
  }, [cartItems, wishlistItems, gadgetsData]);

  return (
    <div>
      {activeTab === "cart" ? (
        <Cart filteredCart={filteredCart} />
      ) : (
        <Wishlist filteredWishlist={filteredWishlist} />
      )}
    </div>
  );
};

export default DashboardWidgets;
