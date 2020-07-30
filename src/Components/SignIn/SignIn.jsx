import React, { Component } from 'react';

import './SignIn.scss';

import FormInput from '../FormInput/FormInput'

import { signIn } from '../../firebase/utils';

import Button from '../Button/Button';

class SignIn extends Component {

    state = { email: '', password: '' }

    changeInp = ev => {

        let type = ev.target.type, value = ev.target.value;

        this.setState(_ => ({ [type]: value }));
    }

    submitted = ev => {
        ev.preventDefault();
        console.log(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="sign-in">
                <h2> Sign In </h2>
                <form onSubmit={this.submitted} >
                    <FormInput
                        required={true}
                        onChange={this.changeInp}
                        type="email"
                        name="email"
                        value={this.state.email} />
                    <FormInput
                        required={true}
                        onChange={this.changeInp}
                        type="password"
                        name="password"
                        value={this.state.password} />
                    <div className="button-cover">
                        <Button onClick={this.submitted} type="Submit" text="Sign In" />
                        <Button onClick={signIn} googleButton text="Sign In With Google" />
                    </div>
                </form>
            </div>
        );
    }
}


export default SignIn;


