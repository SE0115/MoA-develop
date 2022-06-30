import { createStore, combineReducers } from "redux";
import userReducer, { logIn, logOut } from "./userState";
import gatherReducer from "./gatherState";

const reducer = combineReducers({
  user: userReducer,
  gather: gatherReducer,
});

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(reducer, persistedState);

store.subscribe(() => {
  console.log("state-subscribe", store.getState());
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
