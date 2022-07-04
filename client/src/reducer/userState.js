import createReducer from "../reducer/createReducer";
import usersList from "mockData/usesList";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SET_USER = "SETUSER";
const UPDATE_USER = "UPDATEUSER";
const ADD_ACCOUNT = "ADDACCOUNT";

export const logIn = (userID) => ({ type: LOGIN, userID });
export const logOut = () => ({ type: LOGOUT });
export const setUser = (userID) => ({ type: SET_USER, userID });
export const addAccount = (account) => ({ type: ADD_ACCOUNT, account });
export const updateUser = (name, value) => ({ type: UPDATE_USER, name, value });

const INITIAL_STATE = { id: "", info: [] };

const reducer = createReducer(INITIAL_STATE, {
  [LOGIN]: (state, action) => (state.id = action.userID),
  [LOGOUT]: (state, action) => {
    state.id = "";
    state.info = [];
  },
  [SET_USER]: (state, action) => {
    const userIndex = usersList.findIndex((user) => user.id === action.userID);
    state.info = usersList[userIndex].info;
  },
  [ADD_ACCOUNT]: (state, action) => state.info.accounts.push(action.account),
  [UPDATE_USER]: (state, action) => (state.info[action.name] = action.value),
});

export default reducer;
