import React, { createContext, useState } from "react";
import { products } from "../database/database";
import { productsTwo } from "../database/database";
import { toast } from "react-toastify";

// create context
export const StoreContext = createContext();
function GlobalContext({ children }) {
  const [cartItems, setCartsItems] = useState([]);
  const [favorite, setFavorite] = useState([]);

  // addToCart function
  const addToCart = (item) => {
    setCartsItems((prevItem) => [...prevItem, item]);
    toast.success(`${cartItems.length + 1} item added!`);
  };

  // removeFromCart function
  const removeFromCart = (itemId) => {
    setCartsItems((prevItem) => prevItem.filter((item) => item.id !== itemId));
    toast.error("1 item remove!");
  };

  // Check is the product is in the cart
  const isInCart = (itemId) => cartItems.some((item) => item.id === itemId);

  //   addToFav function
  const addToFav = (item) => {
    setFavorite((prevFav) => [...prevFav, item]);
    toast.success(`${favorite.length + 1} fav item added!`);
  };

  //   removeFromFav function
  const removeFromFav = (itemId) => {
    setFavorite((prevFav) => prevFav.filter((item) => item.id !== itemId));
    toast.error("1 fav item remove");
  };

  // check the item is in favorite list
  const isFavorite = (itemId) => favorite.some((item) => item.id === itemId);

  // cartTotalAmount
  const cartTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price || item.product_price * item.quantity;
    }, 0);
  };

  // context value
  const contextValue = {
    products,
    productsTwo,
    cartItems,
    setCartsItems,
    favorite,
    setFavorite,
    addToCart,
    removeFromCart,
    isInCart,
    addToFav,
    removeFromFav,
    isFavorite,
    cartTotalAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default GlobalContext;
