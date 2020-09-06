import React from "react";

const LoginView = () => {
  return (
    <>
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button>login</button>
      </form>
    </>
  );
};

export default LoginView;
