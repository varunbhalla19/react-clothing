import React from "react";

// import "./Button.scss";

import { StyledButton } from "./Button-styled";

const Button = (props) => (
  <div className="button">
    {/* <button
      className={`the-button 
            ${props.googleButton ? "google-button" : ""}
            ${props.inverted ? "btn-inverted" : ""}
            `}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button> */}

    <StyledButton {...props} > {props.text} </StyledButton>

  </div>
);

export default Button;
