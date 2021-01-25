
import UserReducer from "./user/User.Reducer";
import {  combineReducers } from 'redux';
import CartReducer from "./cart/cart.reducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from "./directory/direcotry.reducer";
import shopReducer from "../redux/shop/shop.reducer";
const persitsConfig={
    key:'root',
    storage,
    whitelist:['cart']
} 



const RootReducer= combineReducers({

    user: UserReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop:shopReducer
});

export default persistReducer(persitsConfig, RootReducer);