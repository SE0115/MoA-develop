import createReducer from "./createReducer";

const ADD = "gather/ADD";
const UPDATE = "gather/UPDATE";
const DELETE = "gather/DELETE";

export const addGather = (gather) => ({ type: ADD, gather });
export const updateGather = (gather) => ({ type: UPDATE, gather });
export const deleteGather = (gather) => ({ type: DELETE, gather });

const INITIAL_STATE = {
  gatherList: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.gatherList.push(action.gather),
  [UPDATE]: (state, action) => {
    const index = state.gatherList.findIndex(
      (gather) => gather.id === action.gather.id
    );
    state.gatherList[index] = action.gather;
  },
  [DELETE]: (state, action) => {
    state.gatherList = state.gatherList.filter(
      (gather) => gather.id !== action.gather.id
    );
  },
});

export default reducer;
