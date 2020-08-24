import React, { useState } from "react";

import "./SignUp.scss";

import FormInput from "../FormInput/FormInput";

import Button from "../Button/Button";

import { connect } from "react-redux";

import { SignupActionStart } from "../../redux/User/user-actions";

const SignUp = ({ signUp }) => {
  let [signupData, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = (ev) => {
    let { name, value } = ev.target;
    setSignup({
      ...signupData,
      [name]: value,
    });
  };

  const formSubmit = (ev) => {
    ev.preventDefault();
    let { name, email, password, confirmPass } = signupData;
    if (password !== confirmPass) {
      return alert("Passwords should match");
    }
    if (password.length < 6) {
      return alert("Short Password");
    }

    console.log("inside handler", name, email, password);

    signUp(name, email, password);
  };

  return (
    <div className="sign-up">
      <h2> Sign Up </h2>
      <form className="sign-up-form" onSubmit={formSubmit}>
        <FormInput
          type="text"
          name="name"
          id="su-name"
          label="Name"
          value={signupData.name}
          required={true}
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          id="su-email"
          label="E-mail"
          value={signupData.email}
          required={true}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          id="su-pass"
          label="Password"
          value={signupData.password}
          required={true}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPass"
          id="su-confpass"
          label="Confirm Password"
          value={signupData.confirmPass}
          required={true}
          onChange={handleChange}
        />
        <Button type="submit" text="Sign Up" />
      </form>
    </div>
  );
};

// class SignUp extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//     confirmPass: "",
//   };

//   handleChange = (ev) => {
//     let { name, value } = ev.target;
//     this.setState((_) => ({ [name]: value }));
//   };

//   formSubmit = (ev) => {
//     ev.preventDefault();
//     let { name, email, password, confirmPass } = this.state;
//     if (password !== confirmPass) {
//       return alert("Passwords should match");
//     }
//     if (password.length < 6) {
//       return alert("Short Password");
//     }

//     console.log("inside handler", name, email, password);

//     this.props.signUp(name, email, password);

//   };

//   render() {

//   }
// }

export default connect(null, (dispatch) => ({
  signUp: (name, email, password) =>
    dispatch(SignupActionStart(name, email, password)),
}))(SignUp);
