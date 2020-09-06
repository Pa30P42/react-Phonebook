const isAuthorized = (state) => state.auth.token;

const getUserName = (state) => state.auth.user.email;

export default { isAuthorized, getUserName };
