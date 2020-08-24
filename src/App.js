import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import SignupLogin from "./Pages/SignupLogin/SignupLogin";
import Checkout from "./Pages/Checkout/Checkout";

import { connect } from "react-redux";
import setCurrentUser from "./redux/User/user-actions";
import { auth } from "./firebase/utils";

import "./index.css";

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() =>
    auth.onAuthStateChanged((user) => {
      if (user) {
        // console.log("auth state changed object", user, user.custom_Name);
        console.log("auth state changed object");
        setCurrentUser(user);
      } else {
        console.log("auth state changed ", user);
      }
    }),
    [setCurrentUser]
  );

  return (
    <div className="App">
      <Header />
      <Route component={Shop} path={"/shop"} />
      <Route component={Homepage} path={"/"} exact />
      <Route component={Checkout} path={"/checkout"} exact />
      <Route
        path={"/sign-in"}
        exact
        render={() => (currentUser ? <Redirect to="/" /> : <SignupLogin />)}
      />
    </div>
  );
};

export default connect(
  (state) => ({ currentUser: state.user.currentUser }),
  (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  })
)(App);
