import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/utils";
import CartIcon from "../CartIcon/CartIcon";
import CartShow from "../CartShow/CartShow";
// import { ReactComponent as Logo } from "../../assets/shopping-bag.svg";
// import "./Header.scss";

import { SignoutStartAction } from "../../redux/User/user-actions";

import {
  HeaderStyled,
  LogoStyled,
  LinkStyled,
  OptionsStyled,
  OptionStyled,
} from "./Header-style";

const Header = ({ currentUser, cartShow, signOut }) => (
  <HeaderStyled>
    <LinkStyled to="/">
      <LogoStyled />
    </LinkStyled>
    <OptionsStyled>
      <OptionStyled>
        <Link to="/shop"> SHOP </Link>
      </OptionStyled>
      <OptionStyled>
        <Link to="/contact"> CONTACT </Link>
      </OptionStyled>
      <OptionStyled>
        {currentUser ? (
          <p onClick={signOut}>Sign Out</p>
        ) : (
          <Link to="/sign-in"> SIGN IN </Link>
        )}
      </OptionStyled>
      <OptionStyled>
        <CartIcon />
      </OptionStyled>
      {cartShow ? <CartShow /> : null}
    </OptionsStyled>
  </HeaderStyled>
);

const mapStateToProps = ({ user, cartShow }) => ({
  currentUser: user.currentUser,
  cartShow,
});

const newHeader = connect(mapStateToProps, (dispatch) => ({
  signOut: () => dispatch(SignoutStartAction()),
}))(Header);

export default newHeader;
