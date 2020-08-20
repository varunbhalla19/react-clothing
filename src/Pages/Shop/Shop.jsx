import React from "react";
import "./Shop.scss";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
// import ShopCategory from "../../Pages/ShopCategory/ShopCategory.jsx";

import ShopCategoryContainer from '../../Pages/ShopCategory/ShopCategory.Container'

// import { db } from "../../firebase/utils";
import { getShopDataAsync } from "../../redux/Shop/shopdata-reducer";

import ShopMainContainer from '../../Components/ShopMain/ShopMain.Container' ;

class Shop extends React.Component {
  
  componentDidMount() {
    let { getShopData } = this.props;
    
    getShopData() 
  }

  render() {
    let { match } = this.props;
    console.log("shp page rendering");
    return (
      <div className="shop">
        <h1> The Shop </h1>
        <Route path={`${match.path}`} exact component={ShopMainContainer} />
        <Route path={`${match.path}/:pageId`} component={ShopCategoryContainer} />
      </div>
    );
  }
}


export default connect(null, (dispatch) => ({
  getShopData : () => dispatch(getShopDataAsync())
}))(Shop);

// updateShopState: (newShopData) => dispatch(shopActionCreator(newShopData)),