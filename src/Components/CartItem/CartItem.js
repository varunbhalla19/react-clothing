import React, { useContext } from "react";

import "./CartItem.scss";

import { ReactComponent as DeleteSvg } from "../../assets/trash.svg";

import { ReactComponent as Less } from "../../assets/less.svg";
import { ReactComponent as Great } from "../../assets/greater.svg";

// import { connect } from "react-redux";

// import {
//   CartItemDelete,
//   IncreaseItem,
//   DecreaseItem,
// } from "../../redux/CartItems/cartitems-action";

import { CartContext } from "../../Context/Cart/CartProvider";

const CartItem = ({
  imageUrl,
  price,
  name,
  quantity,
  id,
  // deleteItem,
  // increaseItem,
  // decreaseItem,
}) => {
  const { removeItem, incrementItem, decrementItem } = useContext(CartContext);
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="cart-item"></img>
      <div className="cart-item-detail">
        <p className="cart-item-name"> {name} </p>
        <div className="cart-item-detail2">
          <p className="cart-item-price">${price}</p>
          <p className="cart-item-quantity">
            <span className="c-i-q-btn less" onClick={() => decrementItem(id)}>
              <Less />
            </span>
            {quantity}
            <span className="c-i-q-btn more" onClick={() => incrementItem(id)}>
              <Great />
            </span>
          </p>
        </div>
        <span id="cross" onClick={() => removeItem(id)}>
          <DeleteSvg />
        </span>
      </div>
    </div>
  );
};

export default CartItem;

// connect(null, (dispatch) => ({
//   deleteItem: (id) => dispatch(CartItemDelete(id)),
//   decreaseItem: (id) => dispatch(DecreaseItem(id)),
//   increaseItem: (id) => dispatch(IncreaseItem(id)),
// }))(CartItem);
