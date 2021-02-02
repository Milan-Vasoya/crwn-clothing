import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  getCurrentUser,
  auth,
  signInWithGoogleAuth
} from "../../firebase/firebase.utills";
import { AddOrGetUserToDb, CreateUser } from "../../firebase/firbaseAction";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess,
} from "./user.action";

export function* signInWithGoogle() {
  try {
    const {user} = yield signInWithGoogleAuth();
    const userRef = yield AddOrGetUserToDb(user);
    
    yield put(signInSuccess({ id: user.uid, ...userRef }));
  } catch (e) {
    yield put(signInFailure(e.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ email, password }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield AddOrGetUserToDb(user);
    yield put(signInSuccess({ id: user.uid, ...userRef }));
  } catch (e) {
    yield put(signInFailure(e.message));
  }
}

export function* OnEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    const userRef = yield AddOrGetUserToDb(userAuth);
    yield put(signInSuccess({ id: userAuth.uid, ...userRef }));
  } catch (e) {
    yield put(signInFailure(e.message));
  }
}

export function* onChechkUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* startSignOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (e) {
    yield put(signOutFailure(e.message));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, startSignOut);
}

export function* signUpWithGoogle({ email, password, displayName }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch (e) {
    yield put(signUpFailure(e.message));
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpWithGoogle);
}

export function* signInAfterSignUP({ user, displayName }) {
  try {
    const userAuth = yield CreateUser(user, { displayName });
    yield put(signInSuccess({ id: user.uid, ...userAuth }));
  } catch (e) {
    yield put(signUpFailure(e.message));
  }
}

export function* onSignupSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUP);
}

export default function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(OnEmailSignInStart),
    call(onChechkUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignupSuccess),
  ]);
}
