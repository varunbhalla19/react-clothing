import { combineReducers } from "redux";

import userReducer from "./User/user-reducer";
import cartShowReducer from "./CartShow/cartshow-reducer";
import cartItemReducer from "./CartItems/cartitems-reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cartShow: cartShowReducer,
  cartItems: cartItemReducer,
});

export default rootReducer;
