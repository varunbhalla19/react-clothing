import CartItemType from "./cartitems-action-type";
import filterItems from "./cartitems-util";
import { removeFromCart, incItemCart, decItemCart } from "./cartitems-util";

const initState = [];

const cartItemReducer = (state = initState, action) => {
  switch (action.type) {
    case CartItemType.ADD_CART_ITEM:
      return filterItems(state, action.payload);

    case CartItemType.DELETE_CART_ITEM:
      return removeFromCart(state, action.payload);

    case CartItemType.INC_CART_ITEM:
      return incItemCart(state, action.payload);

    case CartItemType.DEC_CART_ITEM:
      return decItemCart(state, action.payload);

    case CartItemType.CLEAR_CART:
      return [] ;

    default:
      return state;
  }
};

export default cartItemReducer;
