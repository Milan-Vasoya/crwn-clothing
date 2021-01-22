import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Header from "../header.component/header.component";
import ShopPage from "../Pages/ShopPage.page";
import Contect from "../Trash/contact";
import SignIn from "../Pages/SignIn-and-SingUp-page";
import PageNotFound from "../PageNotFound/PageNotFound.page";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRouter";
import { auth } from "../../firebase/firebase.utills";
import { Adduser } from "../../firebase/firbaseAction";

import { setCurrentUser } from "../../redux/user/user.action";
import { connect } from "react-redux";

class AppRouter extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("login");
        Adduser(user);
        setCurrentUser(user.uid);
      } else {
        console.log("logout");
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={App} />
          <PrivateRoute path="/shop" component={ShopPage} />
          <PrivateRoute path="/contact" component={Contect} />
          <PublicRoute path="/signIn" component={SignIn} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(dispatch(setCurrentUser(user))),
});

export default connect(undefined, mapDispatchToProps)(AppRouter);
