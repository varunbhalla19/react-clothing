import React from "react";

import "./ShopCollection.scss";

import ShopItem from "../ShopItem/ShopItem";

const ShopCollection = ({ title, items }) => (
  <div className="shop-collection">
    <h2 className="shop-collection-title"> {title} </h2>
    <div className="shop-collection-preview">
      {items.map((item) => (
        <ShopItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default ShopCollection;
