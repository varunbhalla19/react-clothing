import { connect } from "react-redux";
import { getShopArray, isLoading } from "../../redux/Shop/shoppage-selector";
import Loading from "../Loading/Loading";
import ShopMain from "./ShopMain";

export default connect((state) => ({
  shopData: getShopArray(state),
  isloading: isLoading(state),
}))(Loading(ShopMain));
