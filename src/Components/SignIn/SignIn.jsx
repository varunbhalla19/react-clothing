import React, { Component } from 'react';

import './SignIn.scss';

import FormInput from '../FormInput/FormInput'

import { auth } from '../../firebase/utils';

import Button from '../Button/Button';

import { connect } from 'react-redux' ;

import {googleAuthStartAction , customAuthStartAction } from '../../redux/User/user-actions'

class SignIn extends Component {

    state = { email: '', password: '' }

    changeInp = ev => {

        let { type, value } = ev.target;

        this.setState(_ => ({ [type]: value }));
    }

    resetForm = () => {
        this.setState(_ => ({
            email: '', password: ''
        }), _ => console.log(' Sign-in Form resetted')) ;
    }

    submitted = ev => {
        ev.preventDefault();
        let { email, password } = this.state;
        console.log(this.state.email, this.state.password);
        this.props.CustomSignIn(email,password)

        // auth.signInWithEmailAndPassword(email, password).then(user => {
        //     // console.log('signedIn', user);
        // }).catch(console.log);
    }

    render() {
        const {SignInWithGoogle} = this.props
        return (
            <div className="sign-in">
                <h2> Sign In </h2>
                <form onSubmit={this.submitted} >
                    <FormInput
                        required={true}
                        onChange={this.changeInp}
                        type="email"
                        name="email" id="si-name" label="Email"
                        value={this.state.email} />
                    <FormInput
                        required={true}
                        onChange={this.changeInp}
                        type="password"
                        name="password" id="si-pass" label="Password"
                        value={this.state.password} />
                    <div className="button-cover">
                        <Button onClick={this.submitted} type="Submit" text="Sign In" />
                        <Button onClick={SignInWithGoogle} type="button" googleButton text="Sign In With Google" />
                    </div>
                </form>
            </div>
        );
    }
}


export default connect(
    null,
    dispatch => ({
        SignInWithGoogle : () => dispatch(googleAuthStartAction()),
        CustomSignIn : (email,password) => dispatch(customAuthStartAction(email,password))
    })
)(SignIn) ;