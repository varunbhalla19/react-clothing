import React, { useContext } from "react";
import "./Checkout.scss";

import CartItem from "../../Components/CartItem/CartItem";

// import { connect } from "react-redux";
// import { getTotalPrice } from "../../redux/CartItems/cartitems-selector";

import { CartContext } from "../../Context/Cart/CartProvider";

const Checkout = () => {
  console.log('Checkout Rendered')
  const { cartItems, cartPrice } = useContext(CartContext);
  return (
    <div className="checkout-page">
      <h2 className="checkout-head">Checkout Page</h2>
      <h3> Total Price: ${cartPrice} </h3>
      <div className="checkout">
        {cartItems.map((el) => (
          <CartItem key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
// connect((state) => ({
//   items: state.cartItems,
//   price: getTotalPrice(state),
// }))(Checkout);
