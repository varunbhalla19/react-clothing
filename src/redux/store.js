import { createStore, applyMiddleware } from "redux";

import { logger } from "redux-logger";

import thunk from "redux-thunk";

import peristRootReducer from "./root-reducer";

import { persistStore } from "redux-persist";

const middleware = [logger, thunk];

const store = createStore(peristRootReducer, applyMiddleware(...middleware));

export const persistedStore = persistStore(store);

export default store;
