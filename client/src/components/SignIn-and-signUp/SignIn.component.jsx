import React, { useState } from "react";
import "./styles/sign-in.styles.scss";
import FormInput from "./Form-input/form-input.component";
import { connect } from "react-redux";
import {
  googoleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredential;

  const handleSubmit = (e) => {
    e.preventDefault();
 
     emailSignInStart(email, password);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserCredential({ ...userCredential, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span className="title">Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChangeHandler={inputChangeHandler}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          onChangeHandler={inputChangeHandler}
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
};

const mapStateToDispatch = (dispatch) => ({
  googleSignInStart: () => dispatch(googoleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password)),
});

export default connect(undefined, mapStateToDispatch)(SignIn);
