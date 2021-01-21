import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import App from "../App";
import Header from "../header.component/header.component";
import ShopPage from "../Pages/ShopPage.page";
import Contect from "../Trash/contact";
import SignIn from "../Pages/SignIn-and-SingUp-page";
import PageNotFound from "../PageNotFound/PageNotFound.page";
import { auth } from "../../firebase/firebase.utills";

const AppRouter = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((guser) => {
      setUser(guser);
    });
  }, []);
  console.log(user);
  return (
    <div>
      <Header user={user}/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={Contect} />
        <Route path="/signIn" component={SignIn} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default AppRouter;
