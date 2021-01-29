import { takeLatest,put,all,call } from 'redux-saga/effects';
import {  clearCart} from "./cart.action";
import UserActionType from "../user/user.types";

export function* clearCartOnSignOut(){
yield put(clearCart())
}

export function* onSignOutSuccess (){
yield takeLatest(UserActionType.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export default function* cartSaga(){
  yield  all([call(onSignOutSuccess)])
}