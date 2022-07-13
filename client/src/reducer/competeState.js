import createReducer from "./createReducer";

const ADD = "compete/ADD";
const DELETE = "compete/DELETE";
const UPDATE = "compete/UPDATE";

export const addCompete = (compete) => ({ type: ADD, compete });
export const deleteCompete = (id, compete) => ({ type: DELETE, id, compete });
export const updateCompete = () => ({ type: UPDATE });

const INITIAL_STATE = {
  competeList: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.competeList.push(...action.compete),
});

export default reducer;
