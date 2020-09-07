import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import { connect } from "react-redux";
import authSelectors from "../redux/authRedux/authSelectors";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

const Navigation = ({ isAuthorized }) => (
  <nav>
    <NavLink
      exact
      key={routes[0].label}
      to="/"
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Home
    </NavLink>
    {!isAuthorized && (
      <>
        <NavLink
          exact
          key={routes[1].label}
          to="/register"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Register
        </NavLink>
        <NavLink
          exact
          key={routes[2].label}
          to="/login"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Login
        </NavLink>{" "}
      </>
    )}
    {isAuthorized && (
      <NavLink
        exact
        key={routes[3].label}
        to="/contacts"
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}

    {/* {routes.map(
      (route) =>
        isAuthorized && (
          <NavLink
            exact={route.exact}
            key={route.label}
            to={route.path}
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            {route.label}
          </NavLink>
        )
    )} */}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthorized: authSelectors.isAuthorized(state),
});

export default connect(mapStateToProps)(Navigation);
