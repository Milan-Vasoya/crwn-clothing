import {UserActionTypes} from "./user.types";

export const setCurrentUser = (id) =>({
    type: UserActionTypes.SET_CURRENT_USER,
     id 
  });
  