import UserActions from "./user-action-types";

const setCurrentUser = (user) => ({
  type: UserActions.SET_CURRENT_USER,
  payload: user,
});

const googleAuthStartAction = () => ({
  type: UserActions.GOOGLE_AUTH_START,
});

const customAuthStartAction = (email, password) => ({
  type: UserActions.CUSTOM_AUTH_START,
  payload: { email, password },
});

const AuthSucessAction = (user) => ({
  type: UserActions.AUTH_SUCCESS,
  payload: user,
});

const AuthErrAction = (er) => ({
  type: UserActions.AUTH_FAILURE,
  payload: er.message,
});

const SignoutStartAction = () => ({ type: UserActions.SIGNOUT_START });

const SignoutSucessAction = () => ({ type: UserActions.SIGNOUT_SUCCESS });

// const SignoutErAction = (er) => ({
//   type: UserActions.SIGNOUT_ERR,
//   payload: er,
// });

const SignupActionStart = (name, email, password) => ({
  type: UserActions.SIGNUP_START,
  payload: { name, email, password },
});

export {
  googleAuthStartAction,
  customAuthStartAction,
  AuthSucessAction,
  AuthErrAction,
  SignoutStartAction,
  SignoutSucessAction,
  SignupActionStart,
};

export default setCurrentUser;
