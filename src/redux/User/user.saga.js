import UserActions from "./user-action-types";

import { take, takeLatest, takeEvery, put, call } from "redux-saga/effects";

import {
  AuthSucessAction,
  SignoutStartAction,
  SignoutSucessAction,
} from "./user-actions";

import { ClearCart } from "../CartItems/cartitems-action";

import { auth, letsCreateProfile, db, provider } from "../../firebase/utils";

function* letsAuth(userAuthObject) {
  const userRef = yield call(letsCreateProfile, userAuthObject);
  const userSnap = yield userRef.get();
  yield put(AuthSucessAction({ id: userSnap.id, ...userSnap.data() }));
}

function* GoogleAuth() {
  const { user } = yield auth.signInWithPopup(provider);
  console.log("user is ", user);
  // yield letsAuth(user);
}

function* CustomAuth(action) {
  let { email, password } = action.payload;
  const { user } = yield auth.signInWithEmailAndPassword(email, password);
  // yield letsAuth(user);
}

function* GoogleAuthSaga() {
  yield takeLatest(UserActions.GOOGLE_AUTH_START, GoogleAuth);
}

function* CustomAuthSaga() {
  yield takeLatest(UserActions.CUSTOM_AUTH_START, CustomAuth);
}

function* setUser(action) {
  yield letsAuth(action.payload);
}

function* CurrentUserSaga() {
  yield takeLatest(UserActions.SET_CURRENT_USER, setUser);
}

function* ClearUser() {}

function* Signout() {
  yield auth.signOut();
  yield put(SignoutSucessAction());
  yield put(ClearCart());
}

function* SignoutStartSaga() {
  yield takeLatest(UserActions.SIGNOUT_START, Signout);
}

function* Signup(action){
  let {name, email, password} = action.payload ;
  yield console.log('name,email and password are ', name,email,password );
  const userAuth = yield auth.createUserWithEmailAndPassword(email , password);
  userAuth.user.custom_Name = name ;
}

function* SignupSaga(){
  yield takeLatest( UserActions.SIGNUP_START, Signup );
}

export { GoogleAuthSaga, CustomAuthSaga, CurrentUserSaga, SignoutStartSaga, SignupSaga };
