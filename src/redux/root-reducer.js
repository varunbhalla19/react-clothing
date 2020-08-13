import { combineReducers } from "redux";

import userReducer from "./User/user-reducer";
import cartShowReducer from "./CartShow/cartshow-reducer";
import cartItemReducer from "./CartItems/cartitems-reducer";

// import { persistedStore } from "./store";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

// That the only thing we want to white list I E the only reducer that we actually want to persist is the cart.

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cartItems"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cartShow: cartShowReducer,
  cartItems: cartItemReducer,
});

const peristRootReducer = persistReducer(persistConfig, rootReducer);

export default peristRootReducer;
