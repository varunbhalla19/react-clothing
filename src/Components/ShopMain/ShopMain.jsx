import React from "react";

import { connect } from "react-redux";

import { getShopArray } from "../../redux/Shop/shoppage-selector";

import ShopCollection from "../../Components/ShopCollection/ShopCollection";

import Loading from "../Loading/Loading";

const NewShopMain = ({ shopData }) => (
  <>
    {Object.values(shopData).map((el) => (
      <ShopCollection
        key={el.id}
        items={el.items.slice(0, 4)}
        title={el.title}
      />
    ))}
  </>
);

const LoadShopMain = Loading(NewShopMain);

export default connect((state) => {
  let shopData = getShopArray(state);
  return { shopData: shopData, loaded: shopData.length };
})(LoadShopMain);
