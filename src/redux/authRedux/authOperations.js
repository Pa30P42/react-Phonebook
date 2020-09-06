import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Autorization = "";
  },
};

const registerUser = (user) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axios
    .post("users/signup", user)
    .then((res) => {
      // console.log(res);
      token.set(res.data.token);
      dispatch(authActions.registerSuccess(res.data));
    })
    .catch((error) => dispatch(authActions.registerError(error)));
};

const loginUser = (user) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("users/login", user)
    .then((res) => {
      token.set(res.data.token);
      dispatch(authActions.loginSuccess(res.data));
    })
    .catch((error) => dispatch(authActions.loginError(error)));
};

const logoutUser = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  axios
    .post("users/logout")
    .then(() => {
      console.log("hello");
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
};

const getCurrentUser = () => (dispatch) => {
  dispatch(authActions.getUserRequest());

  axios
    .get("users/current")
    .then((res) => {
      console.log(res);
      dispatch(authActions.getUserSuccess(res.data));
    })
    .catch((error) => dispatch(authActions.getUserError(error)));
};

export default { registerUser, loginUser, logoutUser, getCurrentUser, token };
