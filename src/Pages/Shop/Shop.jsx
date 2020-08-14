import React from "react";

import "./Shop.scss";

import ShopCollection from "../../Components/ShopCollection/ShopCollection";

import { connect } from "react-redux";

const Shop = ({ shopData }) => (
  <div className="shop">
    <h1> The Shop </h1>
    {shopData.map((el) => (
      <ShopCollection
        key={el.id}
        items={el.items.slice(0, 4)}
        title={el.title}
      />
    ))}
  </div>
);

export default connect((state) => ({
  shopData: state.shopData,
}))(Shop);
