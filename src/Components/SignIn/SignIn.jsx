import React, { useState } from "react";

import "./SignIn.scss";

import FormInput from "../FormInput/FormInput";

import Button from "../Button/Button";

import { connect } from "react-redux";

import {
  googleAuthStartAction,
  customAuthStartAction,
} from "../../redux/User/user-actions";

const SignInComp = ({ SignInWithGoogle, CustomSignIn }) => {
  let [email, setEmail] = useState("");
  let [password, setPass] = useState("");

  const submitted = (ev) => {
    ev.preventDefault();
    console.log(email, password);
    CustomSignIn(email, password);
  };

  return (
    <div className="sign-in">
      <h2> Sign In </h2>
      <form onSubmit={submitted}>
        <FormInput
          required={true}
          onChange={(ev) => setEmail(ev.target.value)}
          type="email"
          name="email"
          id="si-name"
          label="Email"
          value={email}
        />
        <FormInput
          required={true}
          onChange={(ev) => setPass(ev.target.value)}
          type="password"
          name="password"
          id="si-pass"
          label="Password"
          value={password}
        />
        <div className="button-cover">
          <Button onClick={submitted} type="Submit" text="Sign In" />
          <Button
            onClick={SignInWithGoogle}
            type="button"
            googleButton
            text="Sign In With Google"
          />
        </div>
      </form>
    </div>
  );
};

export default connect(null, (dispatch) => ({
  SignInWithGoogle: () => dispatch(googleAuthStartAction()),
  CustomSignIn: (email, password) =>
    dispatch(customAuthStartAction(email, password)),
}))(SignInComp);
