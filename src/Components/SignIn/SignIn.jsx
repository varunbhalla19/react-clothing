import React, { Component } from 'react';

import './SignIn.scss';

import FormInput from '../FormInput/FormInput'

import { signIn , auth } from '../../firebase/utils';

import Button from '../Button/Button';

class SignIn extends Component {

    state = { email: '', password: '' }

    changeInp = ev => {

        let type = ev.target.type, value = ev.target.value;

        this.setState(_ => ({ [type]: value }));
    }

    submitted = ev => {
        ev.preventDefault();
        let {email , password} = this.state ;
        console.log(this.state.email, this.state.password);
        auth.signInWithEmailAndPassword(email , password).then( user => {
            console.log('signedIn' , user );
            this.setState({
                email : '' , password : '' 
            })
        } ).catch( console.log ) ;
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
                        <Button onClick={signIn} type="button" googleButton text="Sign In With Google" />
                    </div>
                </form>
            </div>
        );
    }
}


export default SignIn;


