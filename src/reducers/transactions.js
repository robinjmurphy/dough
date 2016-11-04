import { RECEIVE_TRANSACTIONS } from '../actions/transactions';

export default (state = {
  transactions: [],
  error: null
}, action) => {
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      const isError = action.error;

      if (isError) {
        return {
          ...state,
          error: action.payload
        };
      } else {
        return {
          ...state,
          transactions: action.payload,
          error: null
        };
      }
    default:
      return state;
  }
};
