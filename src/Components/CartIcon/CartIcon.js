import React from "react";
import { ReactComponent as CartSvg } from "../../assets/shopping-h.svg";
import { ReactComponent as EmptyCartSvg } from "../../assets/cart.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import toggleCartShow from "../../redux/CartShow/cartshow-action";
import { getItemsLength } from "../../redux/CartItems/cartitems-selector";

const CartIcon = ({ toggle, itemLength, items }) => (
  <div className="cart-icon-cover" onClick={toggle}>
    {itemLength ? (
      <>
        <CartSvg />
        <span className="icon-count">{itemLength}</span>
      </>
    ) : (
      <EmptyCartSvg />
    )}

    {console.log("rerendering iconjs")}
  </div>
);

export default connect(
  (state) => ({
    itemLength: getItemsLength(state),
    items: state.cartItems,
  }),
  {
    toggle: toggleCartShow,
  }
)(CartIcon);
