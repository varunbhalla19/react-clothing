import React, { useContext } from "react";
import "./CartShow.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import toggleCartShow from "../../redux/CartShow/cartshow-action";
// import { getItemsLength } from "../../redux/CartItems/cartitems-selector";

import { CartContext } from "../../Context/Cart/CartProvider";

const CartShow = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);
  console.log("CartShow ==> ", cartItems);
  return (
    <div className="cart-show">
      <div className="cart-show-items">
        {cartItems.length ? (
          <>
            {cartItems.map((el) => (
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
          toggleHidden();
          history.push("/checkout");
        }}
      />
    </div>
  );
};

export default withRouter(CartShow);
