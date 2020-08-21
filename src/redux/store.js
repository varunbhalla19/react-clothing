import { createStore, applyMiddleware } from "redux";

import { logger } from "redux-logger";

// import thunk from "redux-thunk";

import createSagaMiddleware from 'redux-saga';

import peristRootReducer from "./root-reducer";

import rootSaga from './root-saga'

import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware()

const middleware = [logger, sagaMiddleware];

const store = createStore(peristRootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga) ;

export const persistedStore = persistStore(store);

export default store;
