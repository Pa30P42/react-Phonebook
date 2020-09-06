import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/authRedux/authOperations";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.registerUser({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              value={name}
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              value={email}
              type="email"
              name="email"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              value={password}
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (contact) => dispatch(authOperations.registerUser(contact)),
  };
};

export default connect(null, mapDispatchToProps)(RegisterView);
