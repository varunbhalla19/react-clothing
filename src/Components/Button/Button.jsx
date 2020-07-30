import React from "react";

import './Button.scss' ;

const Button = props => (
    <div className="button">
        <button className="the-button" type={props.type} > {props.text} </button>
    </div>
)

export default Button ;



