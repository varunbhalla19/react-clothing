import React from "react";

import './Button.scss';

const Button = props => (
    <div className="button">
        <button
            className={`the-button 
            ${props.googleButton ? 'google-button' : '' }
            ${props.inverted ? 'btn-inverted' : '' }
            `}
            type={props.type}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    </div>
)

export default Button;



