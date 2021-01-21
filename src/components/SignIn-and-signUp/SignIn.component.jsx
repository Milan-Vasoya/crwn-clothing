import React from "react";
import './styles/sign-in.styles.scss';
import FormInput from "./Form-input/form-input.component";
import { signInWithGoogle } from '../../firebase/firebase.utills';


class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("auth", this.state);

    this.setState(() => ({ email: "", password: "" }));
  };

  inputChangeHandler = (e) => {
    const {name, value} = e.target;
    this.setState(() => ({ [name]: value }));
  };
  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span className='title'>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChangeHandler={this.inputChangeHandler}
            label='Email'
            required
          />
     
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChangeHandler={this.inputChangeHandler}
            label='Password'
            required
          />
      <div className='buttons-div'>
          <button className='black-button button ' type='submit'>Sign In</button>
          <button className='google-sign-in black-button buttons' onClick={signInWithGoogle} >Sign In With Google</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
