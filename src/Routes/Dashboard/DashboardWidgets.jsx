import { useActiveTab } from "../Context/ActiveTabContext";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const DashboardWidgets = () => {
  const { activeTab } = useActiveTab();

  return <div>{activeTab === "cart" ? <Cart /> : <Wishlist />}</div>;
};

export default DashboardWidgets;
