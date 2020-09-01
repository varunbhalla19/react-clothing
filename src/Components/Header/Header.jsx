import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartShow from "../CartShow/CartShow";
// import { ReactComponent as Logo } from "../../assets/shopping-bag.svg";
// import "./Header.scss";

import { CartContext } from "../../Context/Cart/CartProvider";

import { SignoutStartAction } from "../../redux/User/user-actions";

import {
  HeaderStyled,
  LogoStyled,
  LinkStyled,
  OptionsStyled,
  OptionStyled,
} from "./Header-style";

// const CartShowContext = createContext({ hide: true, toggleHide: () => {} });

const Header = ({ currentUser, cartShow, signOut }) => {
  
  const { hidden, setHidden } = useContext(CartContext);

  return (
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
          {/* <CartShowContext.Provider
            value={{ hide: hidden, toggleHide: toggleHide }}
          > */}
            <CartIcon />
          {/* </CartShowContext.Provider> */}
        </OptionStyled>
        {/* {cartShow ? <CartShow /> : null} */}
        {hidden ? null : <CartShow />}
      </OptionsStyled>
    </HeaderStyled>
  );
};

const mapStateToProps = ({ user, cartShow }) => ({
  currentUser: user.currentUser,
  cartShow,
});

const newHeader = connect(mapStateToProps, (dispatch) => ({
  signOut: () => dispatch(SignoutStartAction()),
}))(Header);

export default newHeader;

