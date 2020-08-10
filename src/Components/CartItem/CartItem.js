import React from "react";

import "./CartItem.scss";

const CartItem = ({ imageUrl, price, name, quantity }) => (
  <div className="cart-item">
    <img src={imageUrl} alt='cart-item' ></img>
    <div className="cart-item-detail">
      <p className="cart-item-name"> {name} </p>
      <p className="cart-item-price">
        ${price} x {quantity}{" "}
      </p>
    </div>
    {/* <p className="cart-item-qty">  </p> */}
  </div>
);

export default CartItem;
