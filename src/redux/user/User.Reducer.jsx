
import { UserActionTypes } from "./user.types";

const IntialState = {
    currentUser:null
}

const UserReducer=(state = IntialState, action) =>{
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:action.id
            };
    
        default:
        return state;
    }

}
export default UserReducer;