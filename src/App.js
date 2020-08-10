import React from "react";

import { Route } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";

import Shop from "./Pages/Shop/Shop";

import Header from "./Components/Header/Header";

import SignupLogin from "./Pages/SignupLogin/SignupLogin";

import { auth, letsCreateProfile } from "./firebase/utils";

import { connect } from "react-redux";

import setCurrentUser from "./redux/User/user-actions";

import "./index.css";

class App extends React.Component {
  unsubscribe = null;

  componentDidMount() {
    let { setCurrentUser } = this.props;

    this.unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("auth state changed ", user);

      if (user) {
        letsCreateProfile(user, user.custom_Name).then((docRef) => {
          docRef.onSnapshot((snap) => {
            setCurrentUser({
              id: snap.id,
              ...snap.data(),
            });
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route component={Shop} path={"/shop"} exact />
        <Route component={Homepage} path={"/"} exact />
        <Route component={SignupLogin} path={"/sign-in"} exact />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const newApp = connect(null, mapDispatchToProps)(App);

export default newApp;
