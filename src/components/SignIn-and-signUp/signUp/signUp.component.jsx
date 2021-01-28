import React from "react";
import FormInput from "../Form-input/form-input.component";
import { CreateUser } from "../../../firebase/firbaseAction";
import "../styles/singup.styles.scss";
import { auth } from "../../../firebase/firebase.utills";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
    };
  }

  formSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      const error = "Password and Confirm-password Doesn't Match";
      this.setState(() => ({ error }));
    } else {
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const { displayName } = this.state;
      await CreateUser(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  render() {
    const { displayName, email, password, confirmPassword, error } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={this.formSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChangeHandler={this.handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChangeHandler={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChangeHandler={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChangeHandler={this.handleChange}
            label="Confirm Password"
            required
          />

          <button type="submit" value="submit" className="black-button">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
