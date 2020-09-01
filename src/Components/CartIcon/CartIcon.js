import React, { useContext } from "react";
import { ReactComponent as CartSvg } from "../../assets/shopping-h.svg";
import { ReactComponent as EmptyCartSvg } from "../../assets/cart.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import toggleCartShow from "../../redux/CartShow/cartshow-action";
import { getItemsLength } from "../../redux/CartItems/cartitems-selector";

// import { CartShowContext } from '../Header/Header'

import { CartContext } from "../../Context/Cart/CartProvider";

const CartIcon = ({ toggle, itemLength, items }) => {
  const { toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-icon-cover" onClick={toggleHidden}>
      {itemLength ? (
        <>
          <CartSvg />
          <span className="icon-count">{itemLength}</span>
        </>
      ) : (
        <EmptyCartSvg />
      )}
    </div>
  );
};

export default connect(
  (state) => ({
    itemLength: getItemsLength(state),
    items: state.cartItems,
  }),
  {
    toggle: toggleCartShow,
  }
)(CartIcon);
