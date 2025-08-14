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
  const [totalPrice, setTotalPrice] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);


  // Load initial data from local storage when the component mounts
  useEffect(() => {
    setCartItems(getStoredData("cart"));
    setWishlistItems(getStoredData("wishlist"));

    // Load totalPrice from localStorage
    const storedTotalPrice = localStorage.getItem("totalPrice");
    if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice));
    }
    
    setIsInitialized(true);
  }, []);


  useEffect(() => {
    // Only save to localStorage after initial load is complete
    if (isInitialized) {
      console.log("Total price updated:", totalPrice);
      localStorage.setItem("totalPrice", totalPrice.toString());
    }
  }, [totalPrice, isInitialized]);

  console.log("Cart items:", cartItems);

  // Cart functions
  const addToCart = (id) => {
    const resultIdStore = storeData("cart", id);

    if (resultIdStore.success) {
      setCartItems([...cartItems, id]);
    }
    return resultIdStore; // Return the result so the component can check success
  };

  const removeFromCart = (id) => {
    const result = removeData("cart", id);
    setCartItems(cartItems.filter((itemId) => itemId !== id));
    return result;
  };

  // Clear all cart items (for purchase)
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    return { success: true, message: "Cart cleared successfully." };
  };

  // Wishlist functions
  const addToWishlist = (id) => {
    const result = storeData("wishlist", id);
    if (result.success) {
      setWishlistItems([...wishlistItems, id]);
    }
    return result;
  };

  const removeFromWishlist = (id) => {
    const result = removeData("wishlist", id);
    setWishlistItems(wishlistItems.filter((itemId) => itemId !== id));
    return result;
  };

  const value = {
    cartItems,
    addToCart,
    totalPrice,
    setTotalPrice,
    wishlistItems,
    removeFromCart,
    clearCart,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <InterestContext.Provider value={value}>
      {children}
    </InterestContext.Provider>
  );
};
