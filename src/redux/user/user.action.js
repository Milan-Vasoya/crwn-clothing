import { UserActionTypes } from "./user.types";

export const setCurrentUser = (id) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  id,
});

export const googoleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (email, password) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  email,
  password,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  user,
});

export const signInFailure = (error_message) => ({
  type: UserActionTypes.signInFailure,
  error_message,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error_message) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  error_message,
});
