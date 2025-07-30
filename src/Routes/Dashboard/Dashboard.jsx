import DashboardProductCard from "../Cards/DashboardProductCard";
import DashboardDetails from "./DashboardDetails";
import { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart"); // 'cart' or 'wishlist'
    const handleActiveTab = (tab) => {
    setActiveTab(tab);
    }

    const handleDashboardCart = () => {
      handleActiveTab("cart");
    };

    const handleDashboardWishlist = () => {
      handleActiveTab("wishlist");
    };

return (
    <section>
        {/* Dashboard Content */}
        <DashboardDetails
          activeTab={activeTab}
          onCartClick={handleDashboardCart}
          onWishlistClick={handleDashboardWishlist}
        />

        {/* Dashboard Widgets */}
        <DashboardProductCard />

    </section>
);
};

export default Dashboard;
