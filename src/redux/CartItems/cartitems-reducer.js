import CartItemType from "./cartitems-action-type";
import filterItems from "./cartitems-util";

const cartItemReducer = (state = [], action) => {
  if (action.type === CartItemType.ADD_CART_ITEM) {
    return filterItems(state, action.payload) ;
  }
  return state;
};

export default cartItemReducer;
