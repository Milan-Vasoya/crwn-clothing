import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRouter = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user.currentUser
});
    

export default connect(mapStateToProps)(PublicRouter);
