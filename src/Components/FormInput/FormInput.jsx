import React from 'react';

import './FormInput.scss'

const FormInput = props => (
    <div className="form-input-cover">
        <input
            onChange={props.onChange}
            type={props.type}
            name={props.name}
            value={props.value}
            id={props.name}
            required={props.required}
            className="form-input" />
        <label
            htmlFor={props.name}
            className={`form-label ${props.value.length ? "shrink" : ''}`}
        >{props.name}</label>
    </div>
)

export default FormInput;