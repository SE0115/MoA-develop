import createReducer from "./createReducer";

const ADD = "gather/ADD";
const UPDATE = "gather/UPDATE";
const DELETE = "gather/DELETE";
const DELETEALL = "gather/DELETEALL";
const DEPOSIT = "gather/DEPOSIT";

export const addGather = (gather) => ({ type: ADD, gather });
export const updateGather = (gather) => ({ type: UPDATE, gather });
export const deleteGather = (gather) => ({ type: DELETE, gather });
export const deleteAllGather = () => ({ type: DELETEALL });
export const deposit = (gather, transaction) => ({
  type: DEPOSIT,
  gather,
  transaction,
});

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
  [DELETEALL]: (state, action) => (state.gatherList = []),
  [DEPOSIT]: (state, action) => {
    const index = state.gatherList.findIndex(
      (gather) => gather.id === action.gather.id
    );
    state.gatherList[index].transactions.push(action.transaction);
    state.gatherList[index].currentAmount =
      Number(state.gatherList[index].currentAmount) +
      Number(action.transaction.amount);
  },
});

export default reducer;
