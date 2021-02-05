import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../header.component/header.component";
import PageNotFound from "../PageNotFound/PageNotFound.page";
// import PrivateRoute from "./PrivateRoute";
import Spinner from "../spinner/withSpinner.component";
import PublicRoute from "./PublicRouter";
import { checkUserSession } from "../../redux/user/user.action";
import { connect } from "react-redux";
import { GlobalStyles } from "../../styles/GlobalStyles/global.styles";
import ErrorBoundary from "../error-boundary/error-boundary.component";

const App = lazy(() => import("../App"));
const ShopPage = lazy(() => import("../Pages/ShopPage.page"));
const Contact = lazy(() => import("../Trash/contact"));
const SignIn = lazy(() => import("../Pages/SignIn-and-SingUp-page"));

const CheckOut = lazy(() => import("../checkout/CheckOut.componet"));

const AppRouter = ({ checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <GlobalStyles />
        <Header />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={App} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/checkout" component={CheckOut} />
            <PublicRoute path="/signIn" component={SignIn} />
          </Suspense>
          <Route component={PageNotFound} />
        </Switch>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: (user) => dispatch(checkUserSession(user)),
});

// const mapStateToprops = createStructuredSelector({
//   Collections: selectCollectionForPreview,
// });
export default connect(undefined, mapDispatchToProps)(AppRouter);
