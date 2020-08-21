import React from "react";
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

class App extends React.Component {
  unsubscribe = null;

  componentDidMount() {

    auth.onAuthStateChanged( user => {
      if(user){
        console.log('auth state changed object', user , user.custom_Name )

        this.props.setCurrentUser(user) ;
      } else {
        console.log('auth state changed ', user)
      }
    } ) ;


  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="App">
        <Header />
        <Route component={Shop} path={"/shop"} />
        <Route component={Homepage} path={"/"} exact />
        <Route component={Checkout} path={"/checkout"} exact />
        <Route
          path={"/sign-in"}
          exact
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <SignupLogin />
          }
        />
      </div>
    );
  }
}

const newApp = connect(
  (state) => ({ currentUser: state.user.currentUser }),
  (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
  })
)(App);

export default newApp;
