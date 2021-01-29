import ShopActionTypes from "./shop.types";
import database from "../../firebase/firebase.utills";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  collections,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  errorMessage,
});

export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart);
    return database.ref(`collections`)
      .once("value")
      .then((snapshot) => snapshot.val())
      .then((collections) => dispatch(fetchCollectionsSuccess(collections)))
      .catch((e) => dispatch(fetchCollectionsFailure(e.message)));
  };
};
