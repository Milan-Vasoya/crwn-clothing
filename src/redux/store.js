import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./Root-Reducer.reducer";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();
const MiddleWare = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  MiddleWare.push(logger);
}

export const store = createStore(RootReducer, applyMiddleware(...MiddleWare));

sagaMiddleware.run(rootSaga);

export const persistore = persistStore(store);
