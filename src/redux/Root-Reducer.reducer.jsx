
import UserReducer from "./user/User.Reducer";
import {  combineReducers } from 'redux';
import CartReducer from "./cart/cart.reducer";


export default combineReducers({

    user: UserReducer,
    cart: CartReducer
    
});