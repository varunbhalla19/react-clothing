import React from "react";

import "./CartShow.scss";

import Button from "../Button/Button";

import CartItem from "../CartItem/CartItem";

import { connect } from "react-redux";

const CartShow = ({ items }) => (
  <div className="cart-show">
    <div className="cart-show-items">
      {items.map((el) => (
        <CartItem key={el.id} {...el} />
      ))}
    </div>
    <Button text="CHECKOUT" />
  </div>
);

export default connect((state) => ({ items: state.cartItems }))(CartShow);
