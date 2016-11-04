import Transactions from '../models/Transactions';

export const REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS';

export function requestTransactions() {
  return {
    type: REQUEST_TRANSACTIONS
  };
}

export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';

export function receiveTransactions(transactions) {
  return {
    type: RECEIVE_TRANSACTIONS,
    transactions: transactions,
    receivedAt: Date.now()
  };
}

export const RECEIVE_TRANSACTIONS_FAILURE = 'RECEIVE_TRANSACTIONS_FAILURE';

export function receiveTransactionsFailure(err) {
  return {
    type: RECEIVE_TRANSACTIONS_FAILURE,
    error: err,
    receivedAt: Date.now()
  };
}

export function fetchTransactions(token, since) {
  return (dispatch) => {
    dispatch(requestTransactions());

    return Transactions.find(token, since)
      .then(transactions => dispatch(receiveTransactions(transactions)))
      .catch(err => dispatch(receiveTransactionsFailure(err)));
  };
}
