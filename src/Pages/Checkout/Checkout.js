import React from "react";
import "./Checkout.scss";

import CartItem from "../../Components/CartItem/CartItem";

import { connect } from "react-redux";

import { getTotalPrice } from "../../redux/CartItems/cartitems-selector";

const Checkout = ({ items, price }) => (
  <div className="checkout-page">
    <h2 className="checkout-head">Checkout Page</h2>
    <h3> Total Price: ${price} </h3>
    <div className="checkout">
      {items.map((el) => (
        <CartItem key={el.id} {...el} />
      ))}
    </div>
  </div>
);

export default connect((state) => ({
  items: state.cartItems,
  price: getTotalPrice(state),
}))(Checkout);
