import React from "react";
import "./styles/sign-in.styles.scss";
import FormInput from "./Form-input/form-input.component";
import { connect } from "react-redux";
import {
  googoleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

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
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
  };

  inputChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };
  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span className="title">Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChangeHandler={this.inputChangeHandler}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChangeHandler={this.inputChangeHandler}
            label="Password"
            required
          />
          <div className="buttons-div">
            <button className="black-button button " type="submit">
              Sign In
            </button>
            <button
              className="google-sign-in black-button buttons"
              type="button"
              onClick={googleSignInStart}
            >
              Sign In With Google
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToDispatch = (dispatch) => ({
  googleSignInStart: () => dispatch(googoleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password)),
});

export default connect(undefined, mapStateToDispatch)(SignIn);
