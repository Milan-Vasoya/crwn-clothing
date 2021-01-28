import { takeLatest, put } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import database from "../../firebase/firebase.utills";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.action";

export function* fetchCollectionsAsync() {
  try {
    const snapshot = yield database.ref(`collections`).once("value");
    const collections = snapshot.val();
    yield put(fetchCollectionsSuccess(collections));
  } catch (e) {
    yield put(fetchCollectionsFailure(e.message));
  }

}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
