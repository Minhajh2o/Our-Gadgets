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
        gadgetsData.filter((item) =>
          (cartItems || []).includes(item.product_id)
        )
      );
      setFilteredWishlist(
        gadgetsData.filter((item) =>
          (wishlistItems || []).includes(item.product_id)
        )
      );
    }
  }, [cartItems, wishlistItems, gadgetsData]);
  
  return (
    <div className="bg-slate-100">
      <div className="container max-w-5xl px-4 md:px-8 mx-auto pt-6 md:pt-12 pb-12 md:pb-18 lg:pb-24">
        {activeTab === "cart" ? (
          <Cart filteredCart={filteredCart} setFilteredCart={setFilteredCart} />
        ) : (
          <Wishlist filteredWishlist={filteredWishlist} />
        )}
      </div>
    </div>
  );
};

export default DashboardWidgets;
