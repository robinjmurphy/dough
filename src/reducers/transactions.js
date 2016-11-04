import {
  REQUEST_TRANSACTIONS,
  RECEIVE_TRANSACTIONS,
  RECEIVE_TRANSACTIONS_FAILURE
} from '../actions/transactions';

export default (state = {
  isFetching: false,
  transactions: [],
  error: null,
  lastUpdated: null
}, action) => {
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_TRANSACTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        transactions: action.transactions.reverse(),
        lastUpdated: action.receivedAt
      });
    case RECEIVE_TRANSACTIONS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
};
