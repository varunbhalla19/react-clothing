import React from 'react';

import './Header.scss';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/utils';

import { ReactComponent as Logo } from '../../assets/shopping-bag.svg';

const Header = props => (
    <nav className="header" >
        <Link className="header-logo" to="/" > <Logo /> </Link>
        <ul className="header-options">
            <li className="header-option"> <Link to='/shop'> SHOP </Link> </li>
            <li className="header-option"> <Link to='/contact'> CONTACT </Link> </li>
            <li className="header-option">
                {
                    props.user
                        ? (<p onClick={_ => auth.signOut()} >Sign Out</p>)
                        : (<Link to='/sign-in'> SIGN IN </Link>)
                }  </li>
            <li className="header-option header-option-logo "></li>
        </ul>
    </nav>
);

export default Header;