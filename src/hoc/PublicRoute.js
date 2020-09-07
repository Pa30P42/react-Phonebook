import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import authSelectors from "../redux/authRedux/authSelectors";
// import { authSelectors } from "../redux/authRedux/authSelectors";

const PublicRoute = ({ component: Component, isAuthorized, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthorized && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthorized: authSelectors.isAuthorized(state),
  // authSelectors.isAuthorized(state),
});

export default connect(mapStateToProps)(PublicRoute);
