import React, { useContext } from "react";

import Menuitem from "../MenuItem/Menuitem";

import "./Menu.scss";

import MenuContext from "../../Context/Menu/MenuContext";

// import { connect } from "react-redux";

const Menu = () => {
  const menu = useContext(MenuContext);   // That's it
  return (
    <div className="menu">
      {menu.map(({ id, ...otherProps }) => (
        <Menuitem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Menu;
