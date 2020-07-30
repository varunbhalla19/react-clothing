import React from 'react';

import './SignupLogin.scss';

import SignIn from '../../Components/SignIn/SignIn' ;

const SignupLogin = props => (
    <div className="signup-login">
        <h2>
            Sign Up and Log In
        </h2>
        <SignIn />
    </div>
);

export default SignupLogin;