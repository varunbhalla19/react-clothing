import React from "react";
import "./Shop.scss";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import ShopCategory from "../../Pages/ShopCategory/ShopCategory.jsx";
// import { db } from "../../firebase/utils";
import { getShopDataAsync } from "../../redux/Shop/shopdata-reducer";

import ShopMain from '../../Components/ShopMain/ShopMain' ;

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
        <Route path={`${match.path}`} exact component={ShopMain} />
        <Route path={`${match.path}/:pageId`} component={ShopCategory} />
      </div>
    );
  }
}


export default connect(null, (dispatch) => ({
  getShopData : () => dispatch(getShopDataAsync())
}))(Shop);

// updateShopState: (newShopData) => dispatch(shopActionCreator(newShopData)),