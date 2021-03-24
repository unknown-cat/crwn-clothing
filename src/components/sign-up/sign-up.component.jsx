import React from 'react'

import './sign-up.styles.scss'
import FromInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

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
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={ this.handleSubmit }>
          <FromInput name="displayName"
                     type="text"
                     value={ displayName }
                     label="Display Name"
                     onChange={ this.handleChange }
                     required
          />
          <FromInput name="email"
                     type="email"
                     value={ email }
                     label="email"
                     onChange={ this.handleChange }
                     required
          />
          <FromInput name="password"
                     type="password"
                     value={ password }
                     label="password"
                     onChange={ this.handleChange }
                     required
          />
          <FromInput name='confirmPassword'
                     type="password"
                     value={ confirmPassword }
                     label="confirm password"
                     onChange={ this.handleChange }
                     required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>

      </div>
    )
  }
}

export default SignUp;