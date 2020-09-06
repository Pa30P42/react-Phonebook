import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigations";
import authSelectors from "../redux/authRedux/authSelectors";
import UserMenu from "./UserMenu";
// import Navigation from "./Navigation";
// import UserMenu from "./UserMenu";
// import { authSelectors } from "../redux/auth";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

const AppBar = ({ isAuthorized }) => (
  <header style={styles.header}>
    <Navigation />
    {isAuthorized && <UserMenu />}
  </header>
);

const mapStateToProps = (state) => ({
  isAuthorized: authSelectors.isAuthorized(state),
});

export default connect(mapStateToProps)(AppBar);
