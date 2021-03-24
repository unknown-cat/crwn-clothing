import React from 'react'

import './sign-in.styles.scss'

import FromInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    this.setState({ email: '', password: '' });

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' })
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={ this.handleSubmit }>
          <FromInput name="email"
                     type="email"
                     value={ this.state.email }
                     handleChange={ this.handleChange }
                     label="email"
                     required/>

          <FromInput name="password"
                     type="password"
                     value={ this.state.password }
                     handleChange={ this.handleChange }
                     label="password"
                     required/>

          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton type="button" onClick={ signInWithGoogle } isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </div>

        </form>
      </div>
    )
  }
}

export default SignIn;