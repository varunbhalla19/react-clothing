import React, { useEffect } from "react";
import "./Shop.scss";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import ShopCategoryContainer from "../../Pages/ShopCategory/ShopCategory.Container";

import { shopActionStart } from "../../redux/Shop/shopdata-reducer";

import ShopMainContainer from "../../Components/ShopMain/ShopMain.Container";

const Shop = ({ getShopData, match }) => {
  useEffect(() => {
    console.log("UE shop");
    getShopData();
  }, [getShopData]);

  return (
    <div className="shop">
      <h1> The Shop </h1>
      <Route path={`${match.path}`} exact component={ShopMainContainer} />
      <Route path={`${match.path}/:pageId`} component={ShopCategoryContainer} />
    </div>
  );
};

// class Shop extends React.Component {
//   componentDidMount() {
//     console.log("CDM of shop");
//     let { getShopData } = this.props;
//   }

//   render() {
//     let { match } = this.props;
//     console.log("shp page rendering");
//   }
// }

const mapDispatchToProps = (dispatch) => {
  console.log("MDTP called SHOP ");
  return {
    getShopData: () => dispatch(shopActionStart()),
  };
};

export default connect(null, mapDispatchToProps)(Shop);

