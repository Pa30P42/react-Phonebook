import React from "react";
import { connect } from "react-redux";
import authSelectors from "../redux/authRedux/authSelectors";
import authOperations from "../redux/authRedux/authOperations";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ email, logoutUser }) => (
  <div style={styles.container}>
    <span style={styles.name}>Welcome, {email}</span>
    <button type="button" onClick={logoutUser}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(authOperations.logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
