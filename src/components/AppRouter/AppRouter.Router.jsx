import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../App";
import Header from "../Trash/header.component";
import ShopPage from "../Pages/ShopPage.page";

const AppRouter = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  </div>
);

export default AppRouter;
