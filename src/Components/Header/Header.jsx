import React from "react";

import "./Header.scss";

import { Link } from "react-router-dom";

import { auth } from "../../firebase/utils";

import { ReactComponent as Logo } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";

import CartIcon from "../CartIcon/CartIcon";

import CartShow from "../CartShow/CartShow";

const Header = ({ currentUser, cartShow }) => (
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
      <li className="header-option header-option-logo ">
        <CartIcon />
      </li>
      {cartShow ? <CartShow /> : null}
    </ul>
  </nav>
);

const mapStateToProps = ({ user, cartShow }) => ({
  currentUser: user.currentUser,
  cartShow,
});

const newHeader = connect(mapStateToProps)(Header);

export default newHeader;
