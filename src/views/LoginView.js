import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/authRedux/authOperations";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser({ ...this.state });
    this.setState({ password: "", email: "" });
  };

  render() {
    const { password, email } = this.state;
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button>login</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (contact) => dispatch(authOperations.loginUser(contact)),
  };
};

export default connect(null, mapDispatchToProps)(LoginView);
