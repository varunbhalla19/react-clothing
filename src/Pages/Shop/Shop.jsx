import React from "react";

import "./Shop.scss";

import ShopCollection from "../../Components/ShopCollection/ShopCollection";

import { connect } from "react-redux";

import { Route } from "react-router-dom";

import ShopCategory from "../../Pages/ShopCategory/ShopCategory.jsx";

import { getShopArray } from "../../redux/Shop/shoppage-selector";

const Shop = ({ match }) => (
  <div className="shop">
    <h1> The Shop </h1>
    <Route path={`${match.path}`} exact component={connectedShopMain} />
    <Route path={`${match.path}/:pageId`} component={ShopCategory} />
  </div>
);

const ShopMain = ({ shopData }) => (
  <>
    {shopData.map((el) => (
      <ShopCollection
        key={el.id}
        items={el.items.slice(0, 4)}
        title={el.title}
      />
    ))}
  </>
);

let connectedShopMain = connect((state) => ({
  shopData: getShopArray(state),
}))(ShopMain);

export default Shop;
