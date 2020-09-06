import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/REGISTERREQUEST");
const registerSuccess = createAction("auth/REGISTERSUCCESS");
const registerError = createAction("auth/REGISTERERROR");

const loginRequest = createAction("authLOGINRREQUEST");
const loginSuccess = createAction("auth/LOGINSUCCESS");
const loginError = createAction("auth/LOGINERROR");

const logoutRequest = createAction("auth/LOGOUTREQUEST");
const logoutSuccess = createAction("auth/LOGOUTSUCCESS");
const logoutError = createAction("auth/LOGOUTERROR");

const getUserRequest = createAction("auth/GETUSERREQUEST");
const getUserSuccess = createAction("auth/GETUSERSUCCESS");
const getUserError = createAction("auth/GETUSERERROR");

export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getUserRequest,
  getUserSuccess,
  getUserError,
};
