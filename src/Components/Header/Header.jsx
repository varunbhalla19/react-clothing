import React from "react";

import "./Header.scss";

import { Link } from "react-router-dom";

import { auth } from "../../firebase/utils";

import { ReactComponent as Logo } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <nav className="header">
    <Link className="header-logo" to="/">
      <Logo />
    </Link>
    <ul className="header-options">
      <li className="header-option">
        <Link to="/shop"> SHOP </Link>
      </li>
      <li className="header-option">
        <Link to="/contact"> CONTACT </Link>
      </li>
      <li className="header-option">
        {currentUser ? (
          <p onClick={() => auth.signOut()}>Sign Out</p>
        ) : (
          <Link to="/sign-in"> SIGN IN </Link>
        )}{" "}
      </li>
      <li className="header-option header-option-logo "></li>
    </ul>
  </nav>
);

const mapStateToProps = (reducer) => ({
  currentUser: reducer.user.currentUser,
});

const newHeader = connect(mapStateToProps)(Header);

export default newHeader;
