import CartItemType from "./cartitems-action-type";
import filterItems from "./cartitems-util";

const initState = [] ;

const cartItemReducer = (state = initState, action) => {
  if (action.type === CartItemType.ADD_CART_ITEM) {
    return filterItems(state, action.payload) ;
  }
  return state ;
};

export default cartItemReducer;
