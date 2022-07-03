import createReducer from "../reducer/createReducer";
import usersList from "mockData/usesList";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SETUSER = "SETUSER";

export const logIn = (userID) => ({ type: LOGIN, userID });
export const logOut = () => ({ type: LOGOUT });
export const setUser = (userID) => ({ type: SETUSER, userID });

const INITIAL_STATE = { id: "", info: [] };

const reducer = createReducer(INITIAL_STATE, {
  [LOGIN]: (state, action) => (state.id = action.userID),
  [LOGOUT]: (state, action) => {
    state.id = "";
    state.info = [];
  },
  [SETUSER]: (state, action) => {
    const userIndex = usersList.findIndex((user) => user.id === action.userID);
    state.info = usersList[userIndex].info;
  },
});

export default reducer;
