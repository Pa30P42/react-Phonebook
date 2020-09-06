import React from "react";

const RegisterView = () => {
  return (
    <>
      <h2>Register</h2>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterView;