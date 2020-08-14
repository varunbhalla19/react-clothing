import React from "react";

import ShopCollection from "../../Components/ShopCollection/ShopCollection";

import { connect } from "react-redux";

import "./ShopCategory.scss";

import selectCategory from "../../redux/Shop/shoppage-selector";

const ShopCategory = ({ categoryObject }) => (
  <div className="shop-category-page">
    <ShopCollection title={categoryObject.title} items={categoryObject.items} />
  </div>
);

export default connect((state, props) => ({
  categoryObject: selectCategory(state, props),
}))(ShopCategory);
