import { combineReducers } from "redux";

import userReducer from "./User/user-reducer";
import cartShowReducer from "./CartShow/cartshow-reducer";
import cartItemReducer from "./CartItems/cartitems-reducer";
import menuReducer from "./Menu/menu-reducer";
import shopDataReducer from "./Shop/shopdata-reducer";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cartItems"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cartShow: cartShowReducer,
  cartItems: cartItemReducer,
  menu: menuReducer,
  shopData : shopDataReducer
});

const peristRootReducer = persistReducer(persistConfig, rootReducer);

export default peristRootReducer;
