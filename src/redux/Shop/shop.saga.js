import {
  shopActionTypes,
  snapDataToMap,
  shopActionSucess,
} from "./shopdata-reducer";

import { takeEvery, put, call, take, takeLatest } from "redux-saga/effects";

import { db } from "../../firebase/utils";

// function* fetchShopData() {
//   yield console.log("inside fetchShopData");
//   const shopCollection = db.collection("ShopData");
//   const querySnap = yield shopCollection.get();
//   const shopResult = yield call(snapDataToMap, querySnap);
//   yield put(shopActionSucess(shopResult));
// }
// yield takeLatest(shopActionTypes.FETCH_SHOP_START, fetchShopData);

function* getShopDataStart() {
  yield take(shopActionTypes.FETCH_SHOP_START);
  const shopCollection = db.collection("ShopData");
  const querySnap = yield shopCollection.get();
  const shopResult = yield call(snapDataToMap, querySnap);
  yield put(shopActionSucess(shopResult));
}

export { getShopDataStart };
