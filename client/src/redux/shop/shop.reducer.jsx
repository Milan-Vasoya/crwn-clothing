import ShopActionTypes from "./shop.types";

const INTITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};
const shopReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.collections,
        isFetching: false,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage,
        isFetching: false,
      };
    default:
      return state;
  }
};
export default shopReducer;
