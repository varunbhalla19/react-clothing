import React from "react";

import { ReactComponent as CartSVG } from "../../assets/sale.svg";

import "./CartIcon.scss";

import { connect } from "react-redux";

import toggleCartShow from "../../redux/CartShow/cartshow-action";

const CartIcon = ({ toggle }) => (
  <div className="cart-icon-cover" onClick={toggle}>
    <CartSVG />
    <span className="icon-count"> 4 </span>
  </div>
);
export default connect(null, { toggle: toggleCartShow })(CartIcon);
