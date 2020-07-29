import React from "react";

import './Menuitem.scss';

import { withRouter } from 'react-router-dom';

const Menuitem = props => (
    <div className={`menu-item ${props.size}`} onClick={_ => props.history.push(`${props.match.url}${props.link}`)} >
        <div
            className="background-image"
            style={{
                backgroundImage: `url(${props.imageURL})`
            }} > </div>
        <div className="content">
            <h1 className="title">{props.name}</h1>
            <p className="subtitle">SHOP NOW</p>
        </div>
    </div>
);
export default withRouter(Menuitem);