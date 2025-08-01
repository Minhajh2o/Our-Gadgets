import { createContext, useContext, useEffect, useState } from "react";
import {
  getStoredData,
  removeData,
  storeData,
} from "../Utilities/LocalStorage";

// create a context for managing user interests
const InterestContext = createContext();

// custom hook to use the InterestContext
// eslint-disable-next-line react-refresh/only-export-components
export const useInterest = () => {
  return useContext(InterestContext);
};

// InterestProvider component
export const InterestProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load initial data from local storage when the component mounts
  useEffect(() => {
    setCartItems(getStoredData("cart"));
    setWishlistItems(getStoredData("wishlist"));
  }, []);

  // Cart functions
  const addToCart = (id) => {
    const result = storeData("cart", id);
    if (result.success) {
      setCartItems([...cartItems, id]);
    }
  };

  const removeFromCart = (id) => {
    removeData("cart", id);
    setCartItems(cartItems.filter((itemId) => itemId === id));
  };

  // Wishlist functions
  const addToWishlist = (id) => {
    const result = storeData("wishlist", id);
    if (result.success) {
      setWishlistItems([...wishlistItems, id]);
    }
  };

  const removeFromWishlist = (id) => {
    removeData("wishlist", id);
    setWishlistItems(wishlistItems.filter((itemId) => itemId === id));
  };

  const value = {
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <InterestContext.Provider value={value}>
      {children}
    </InterestContext.Provider>
  );
};
