import { call, all } from "redux-saga/effects";

import { getShopDataStart } from "./Shop/shop.saga";

import {
  GoogleAuthSaga,
  CustomAuthSaga,
  SignupSaga,
  CurrentUserSaga,
  SignoutStartSaga,
} from "./User/user.saga";

export default function* () {
  yield all([
    call(getShopDataStart),
    call(GoogleAuthSaga),
    call(CustomAuthSaga),
    call(CurrentUserSaga),
    call(SignoutStartSaga),
    call(SignupSaga),
  ]);
}
