import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Header from "../header.component/header.component";
import ShopPage from "../Pages/ShopPage.page";
import Contect from "../Trash/contact";
import SignIn from "../Pages/SignIn-and-SingUp-page";
import PageNotFound from "../PageNotFound/PageNotFound.page";
// import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRouter";

import CheckOut from "../checkout/CheckOut.componet";
import { checkUserSession } from "../../redux/user/user.action";
import { connect } from "react-redux";
import {GlobalStyles} from '../../styles/GlobalStyles/global.styles'

const AppRouter =({ checkUserSession })=>{

useEffect(()=> {
    checkUserSession();
  },[checkUserSession]
)

    return (
      <BrowserRouter>
      <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={Contect} />
          <Route path="/checkout" component={CheckOut} />
          <PublicRoute path="/signIn" component={SignIn} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }


const mapDispatchToProps = (dispatch) => ({
  checkUserSession: (user) => dispatch(checkUserSession(user)),
});

// const mapStateToprops = createStructuredSelector({
//   Collections: selectCollectionForPreview,
// });
export default connect(undefined, mapDispatchToProps)(AppRouter);
