import Cart from "./Cart";
import Wishlist from "./Wishlist";

const DashboardWidgets = ({ activeTab }) => {
  return <div>{activeTab === "cart" ? <Cart /> : <Wishlist />}</div>;
};

export default DashboardWidgets;
