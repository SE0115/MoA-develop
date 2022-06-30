import createReducer from "../reducer/createReducer";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const GETUSER = "GETUSER";

export const logIn = (userID) => ({ type: LOGIN, userID });
export const logOut = () => ({ type: LOGOUT });
export const getUser = (userID) => ({ type: GETUSER, userID });

const INITIAL_STATE = { id: "" };

const reducer = createReducer(INITIAL_STATE, {
  [LOGIN]: (state, action) => (state.id = action.userID),
  [LOGOUT]: (state, action) => (state.id = ""),
});

export default reducer;
