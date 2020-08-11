import React from "react";
import "./CartShow.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import toggleCartShow from "../../redux/CartShow/cartshow-action";
import { getItemsLength } from "../../redux/CartItems/cartitems-selector";

const CartShow = ({ items, history, toggleShow, itemsLength }) => (
  <div className="cart-show">
    <div className="cart-show-items">
      {itemsLength ? (
        <>
          {items.map((el) => (
            <CartItem key={el.id} {...el} />
          ))}
        </>
      ) : (
        <h1>Empty</h1>
      )}
    </div>
    <Button
      text="CHECKOUT"
      onClick={() => {
        toggleShow();
        history.push("/checkout");
      }}
    />
  </div>
);

export default withRouter(
  connect(
    (state) => ({ items: state.cartItems, itemsLength: getItemsLength(state) }),
    {
      toggleShow: toggleCartShow,
    }
  )(CartShow)
);
