import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigations";
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

const AppBar = ({ isAuthenticated }) => (
  <header style={styles.header}>
    <Navigation />
    {/* {isAuthenticated && <UserMenu />} */}
  </header>
);

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.isAuthenticated(state),
// });

export default connect(null)(AppBar);
