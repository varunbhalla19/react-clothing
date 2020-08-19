import React from "react";

import ShopCollection from "../../Components/ShopCollection/ShopCollection";

import { connect } from "react-redux";

import "./ShopCategory.scss";

import selectCategory, { isLoading } from "../../redux/Shop/shoppage-selector";

import Loading from "../../Components/Loading/Loading";

const ShopCategory = ({ categoryObject }) => (
  <div className="shop-category-page">
    <ShopCollection title={categoryObject.title} items={categoryObject.items} />
  </div>
);

const LoadShop = Loading(ShopCategory);

export default connect((state, props) => {
  return {
    categoryObject: selectCategory(state, props),
    isloading: isLoading(state),
  };
})(LoadShop);
