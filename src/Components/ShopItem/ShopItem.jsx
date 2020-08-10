import React from "react";

import "./ShopItem.scss";

import Button from "../Button/Button";

import { connect } from "react-redux";

import CartItemAction from "../../redux/CartItems/cartitems-action";

const ShopItem = ({ item, addItemToCart }) => (
  <div className="shop-item">
    <div
      className="shop-item-image"
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    ></div>
    <div className="shop-item-detail">
      <p className="shop-item-name">{item.name}</p>
      <p className="shop-item-price">{item.price}</p>
    </div>

    <Button text="Add To Cart" inverted onClick={ () => addItemToCart(item) }  />
  </div>
);

export default connect(null, (dispatch) => ({
  addItemToCart: (item) => dispatch(CartItemAction(item)),
}))(ShopItem);
