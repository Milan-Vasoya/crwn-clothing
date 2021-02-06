import React from "react";
import ReactDOM from "react-dom";
import MyRouter from "./components/AppRouter/AppRouter.Router";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import {store, persistore} from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <Provider store={store}>
  <PersistGate persistor={persistore}>
    <MyRouter />
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);

serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
