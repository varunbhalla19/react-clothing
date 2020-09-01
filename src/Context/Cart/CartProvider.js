import React, { useState, createContext, useEffect } from "react";

import filterItems, {
  removeFromCart,
  incItemCart,
  decItemCart,
  getCartItemsCount,
  getCartPrice,
} from "../../redux/CartItems/cartitems-util";

const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  cartItemsCount: 0,
  incrementItem: () => {},
  decrementItem: () => {},
  cartPrice : 0
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  const [cartItems, setCartItems] = useState([]);

  const [cartItemsCount, setCartItemsCount] = useState(0);

  const [cartPrice, setCartPrice] = useState(0);

  const addItem = (item) => {
    console.log("addItem called");
    return setCartItems(filterItems(cartItems, item));
  };

  const removeItem = (id) => setCartItems(removeFromCart(cartItems, id));

  const clearCart = () => setCartItems([]);

  const incrementItem = (id) => setCartItems(incItemCart(cartItems, id));
  const decrementItem = (id) => setCartItems(decItemCart(cartItems, id));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartPrice(getCartPrice(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearCart,
        cartItemsCount,
        incrementItem,
        decrementItem,
        cartPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export { CartContext };
