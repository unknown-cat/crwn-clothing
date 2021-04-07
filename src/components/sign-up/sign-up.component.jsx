import React from 'react'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email, password
      );

      createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

    } catch (err) {
      console.error(err);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value })
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={ this.handleSubmit }>
          <FormInput name="displayName"
                     type="text"
                     value={ displayName }
                     label="Display Name"
                     onChange={ this.handleChange }
                     required
          />
          <FormInput name="email"
                     type="email"
                     value={ email }
                     label="email"
                     onChange={ this.handleChange }
                     required
          />
          <FormInput name="password"
                     type="password"
                     value={ password }
                     label="password"
                     onChange={ this.handleChange }
                     required
          />
          <FormInput name="confirmPassword"
                     type="password"
                     value={ confirmPassword }
                     label="confirm password"
                     onChange={ this.handleChange }
                     required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>

      </SignUpContainer>
    )
  }
}

export default SignUp;