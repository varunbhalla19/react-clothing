import React from "react";

import ShopCollection from "../../Components/ShopCollection/ShopCollection";


// import { connect } from "react-redux";
// import { getShopArray, isLoading } from "../../redux/Shop/shoppage-selector";
// import Loading from "../Loading/Loading";


const ShopMain = ({ shopData }) => (
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

export default ShopMain


// const LoadShopMain = Loading(NewShopMain);
// export default connect((state) => ({
//   shopData: getShopArray(state),
//   isloading: isLoading(state),
// }))(LoadShopMain);
