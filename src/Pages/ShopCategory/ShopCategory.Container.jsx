import { connect } from "react-redux";
import selectCategory, { isLoading } from "../../redux/Shop/shoppage-selector";
import Loading from "../../Components/Loading/Loading";
import ShopCategory from "./ShopCategory";

export default connect((state, props) => {
  return {
    categoryObject: selectCategory(state, props),
    isloading: isLoading(state),
  };
})(Loading(ShopCategory));
