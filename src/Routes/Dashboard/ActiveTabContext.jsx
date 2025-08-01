import { createContext, useState, useContext } from "react";

const ActiveTabContext = createContext();

// Custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useActiveTab = () => {
  const context = useContext(ActiveTabContext);
  if (!context) {
    throw new Error("useActiveTab must be used within ActiveTabProvider");
  }
  return context;
};

// Provider component
export const ActiveTabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("cart");

  const handleDashboardCart = () => {
    setActiveTab("cart");
  };

  const handleDashboardWishlist = () => {
    setActiveTab("wishlist");
  };

  const value = {
    activeTab,
    handleDashboardCart,
    handleDashboardWishlist,
  };

  return (
    <ActiveTabContext.Provider value={value}>
      {children}
    </ActiveTabContext.Provider>
  );
};