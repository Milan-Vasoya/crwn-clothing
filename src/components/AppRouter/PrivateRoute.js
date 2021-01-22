import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/signIn" />
    }
  />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user.currentUser
});



export default connect(mapStateToProps)(PrivateRoute);
