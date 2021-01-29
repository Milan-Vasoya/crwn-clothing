import React, { useState } from "react";
import FormInput from "../Form-input/form-input.component";
import { signUpStart } from "../../../redux/user/user.action";
import "../styles/singup.styles.scss";

import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
  const [userCredential, setUserCredential] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  const {
    displayName,
    email,
    password,
    confirmPassword,
    error,
  } = userCredential;

  const formSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      const error = "Password and Confirm-password Doesn't Match";
      setUserCredential({ ...userCredential, error: error });
      return;
    }
    
     signUpStart(email, password, displayName);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredential(() => ({ ...userCredential, [name]: value }));

  

  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={formSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChangeHandler={handleChange}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChangeHandler={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChangeHandler={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChangeHandler={handleChange}
          label="Confirm Password"
          required
        />

        <button className="black-button">Sign Up</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart(email, password, displayName)),
});

export default connect(undefined, mapDispatchToProps)(SignUp);
