import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import RootReducer from './Root-Reducer.reducer';
import {  persistStore} from 'redux-persist';

const MiddleWare = [];
if(process.env.NODE_ENV==='development'){
    MiddleWare.push(logger);
}

export const store = createStore(RootReducer, applyMiddleware(...MiddleWare));

export const persistore = persistStore(store);

