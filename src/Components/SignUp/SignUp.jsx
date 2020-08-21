import React, { Component } from "react";

import "./SignUp.scss";

import FormInput from "../FormInput/FormInput";

import Button from "../Button/Button";

// import { auth } from '../../firebase/utils';

import { connect } from "react-redux";

import { SignupActionStart } from "../../redux/User/user-actions";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  };

  handleChange = (ev) => {
    let { name, value } = ev.target;
    this.setState((_) => ({ [name]: value }));
  };

  formSubmit = (ev) => {
    ev.preventDefault();
    let { name, email, password, confirmPass } = this.state;
    if (password !== confirmPass) {
      return alert("Passwords should match");
    }
    if (password.length < 6) {
      return alert("Short Password");
    }

    console.log("inside handler", name, email, password);

    this.props.signUp(name, email, password);

    // auth.createUserWithEmailAndPassword(email, password)
    //     .then(user => {
    //         console.log('Signed Up', user);
    //         user.user.custom_Name = name ;
    //         this.setState({ name : '' , email : '',password : '' , confirmPass: '' }) ;
    //     })
    //     .catch(console.log);
  };

  render() {
    return (
      <div className="sign-up">
        <h2> Sign Up </h2>
        <form
          className="sign-up-form"
          onSubmit={this.formSubmit}
        >
          <FormInput
            type="text"
            name="name"
            id="su-name"
            label="Name"
            value={this.state.name}
            required={true}
            onChange={this.handleChange}
          />
          <FormInput
            type="email"
            name="email"
            id="su-email"
            label="E-mail"
            value={this.state.email}
            required={true}
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            id="su-pass"
            label="Password"
            value={this.state.password}
            required={true}
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPass"
            id="su-confpass"
            label="Confirm Password"
            value={this.state.confirmPass}
            required={true}
            onChange={this.handleChange}
          />
          <Button type="submit" text="Sign Up" />
        </form>
      </div>
    );
  }
}

export default connect(null, (dispatch) => ({
  signUp: (name, email, password) =>
    dispatch(SignupActionStart(name, email, password)),
}))(SignUp);
