import { UserActionTypes } from "./user.types";

const IntialState = {
  currentUser: null,
  error_message: null,
};

const UserReducer = (state = IntialState, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
        error_message: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error_message: null,
      };
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error_message: action.error_message,
      };
    default:
      return state;
  }
};
export default UserReducer;
