import React from "react";

import { ReactComponent as CartSVG } from "../../assets/sale.svg";

import "./CartIcon.scss";

import { connect } from "react-redux";

import toggleCartShow from "../../redux/CartShow/cartshow-action";

import { getItemsLength } from "../../redux/CartItems/cartitems-selector";

const CartIcon = ({ toggle, itemLength }) => (
  <div className="cart-icon-cover" onClick={toggle}>
    <CartSVG />
    <span className="icon-count">{itemLength}</span>
  </div>
);

export default connect(
  (state) => ({
    itemLength: getItemsLength(state),
  }),
  {
    toggle: toggleCartShow,
  }
)(CartIcon);
