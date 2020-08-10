import React from "react";

import "./CartShow.scss";

import Button from "../Button/Button";

const CartShow = () => (
  <div className='cart-show'  >
    <div className="cart-show-items"></div>
    <div className="cart-show-button">
      <Button text="CHECKOUT" />
    </div>
  </div>
);

export default CartShow ;
