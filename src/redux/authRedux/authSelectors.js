const registerRequest = createAction("auth/REGISTERREQUEST");
const registerSuccess = createAction("auth/REGISTERSUCCESS");
const registerError = createAction("auth/REGISTERERROR");

export default {
  registerRequest,
  registerSuccess,
  registerError,
};
