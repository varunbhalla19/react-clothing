import React from "react";

import "./FormInput.scss";

const FormInput = (props) => (
  <div className="form-input-cover">
    <input
      onChange={props.onChange}
      type={props.type}
      name={props.name}
      value={props.value}
      id={props.id}
      required={props.required}
      className="form-input"
      autoComplete="new-password"
    />
    <label
      htmlFor={props.id}
      className={`form-label ${props.value.length ? "shrink" : ""}`}
    >
      {props.label}
    </label>
  </div>
);

export default FormInput;
