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
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [isInitialized, setIsInitialized] = useState(false);


  // Load initial data from local storage when the component mounts
  useEffect(() => {
    setCartItems(getStoredData("cart"));
    setWishlistItems(getStoredData("wishlist"));

    
    // Load totalPrice from localStorage
    // const storedTotalPrice = localStorage.getItem("totalPrice");
    // if (storedTotalPrice) {
    //   setTotalPrice(parseFloat(storedTotalPrice));
    // }
    
    // setIsInitialized(true);
  }, []);
/*
  // Update totalPrice in localStorage whenever it changes
  useEffect(() => {
    // Only save to localStorage after initial load is complete
    if (isInitialized) {
      console.log("Total price updated:", totalPrice);
      localStorage.setItem("totalPrice", totalPrice.toString());
    }
  }, [totalPrice, isInitialized]);
*/

  // Cart functions
  // add item to cart
  const addToCart = (id) => {
    const resultIdStore = storeData("cart", id);

    if (resultIdStore.success) {
      setCartItems([...cartItems, id]);
    }
    return resultIdStore; // Return the result so the component can check success
  };

  // remove item from cart
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
  // add item to wishlist
  const addToWishlist = (id) => {
    const result = storeData("wishlist", id);
    if (result.success) {
      setWishlistItems([...wishlistItems, id]);
    }
    return result;
  };

  // remove item from wishlist
  const removeFromWishlist = (id) => {
    const result = removeData("wishlist", id);
    setWishlistItems(wishlistItems.filter((itemId) => itemId !== id));
    return result;
  };

  const value = {
    // totalPrice,
    // setTotalPrice,
    cartItems,
    addToCart,
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
