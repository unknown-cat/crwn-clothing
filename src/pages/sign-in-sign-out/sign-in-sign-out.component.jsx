import React from 'react';

import './sign-in-sign-out.styles.scss'

import SignIn from "../../compnonents/sign-in/sign-in.component";
import SignUp from "../../compnonents/sign-up/sign-up.component";

const SignInSignUpPage = () => (
  <div className="sign-in-sign-up">
    <SignIn/>
    <SignUp/>
  </div>
);

export default SignInSignUpPage;