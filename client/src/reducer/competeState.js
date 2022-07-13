import createReducer from "./createReducer";

const ADD = "compete/ADD";
const DELETE = "compete/DELETE";
const UPDATE = "compete/UPDATE";

export const addCompete = (compete) => ({ type: ADD, compete });
export const deleteCompete = (key) => ({ type: DELETE, key });
export const updateCompete = (editInfo) => ({ type: UPDATE, editInfo });

const INITIAL_STATE = {
  competeList: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => {
    if (action.compete.length > 1) {
      state.competeList.push(...action.compete);
    } else {
      state.competeList.push(action.compete);
    }
  },
  [DELETE]: (state, action) =>
    (state.competeList = state.competeList.filter((x) => x.key !== action.key)),
  [UPDATE]: (state, action) => {
    const { pick, bet, key } = action.editInfo;
    state.competeList.map((x) => {
      if (x.key === key) {
        x.pick = pick;
        x.bet = bet;
      }
    });
  },
});

export default reducer;
