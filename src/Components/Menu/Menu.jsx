import React from "react";

import Menuitem from "../MenuItem/Menuitem";

import "./Menu.scss";

import { connect } from "react-redux";

const Menu = ({ menu }) => (
  <div className="menu">
    {menu.map(({ id, ...otherProps }) => (
      <Menuitem key={id} {...otherProps} />
    ))}
  </div>
);


export default connect((state) => ({
  menu: state.menu,
}))(Menu);
