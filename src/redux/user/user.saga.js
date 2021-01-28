import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  GoogleAuthProvider,
  getCurrentUser,
  auth,
} from "../../firebase/firebase.utills";
import { AddOrGetUserToDb } from "../../firebase/firbaseAction";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from "./user.action";

export function* getSnapShotFromUserAuth() {}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(GoogleAuthProvider);
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
export default function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(OnEmailSignInStart),
    call(onChechkUserSession),
    call(onSignOutStart),
  ]);
}
