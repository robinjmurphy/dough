import { createAction } from 'redux-actions';

import Transactions from '../models/Transactions';

export const REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS';
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const RECEIVE_TRANSACTIONS_FAILURE = 'RECEIVE_TRANSACTIONS_FAILURE';

export const requestTransactions = createAction(REQUEST_TRANSACTIONS);
export const receiveTransactions = createAction(RECEIVE_TRANSACTIONS);

export const fetchTransactions = (token, since) => {
  return (dispatch) => {
    dispatch(requestTransactions());

    return Transactions.find(token, since)
      .then(transactions => dispatch(receiveTransactions(transactions)))
      .catch(err => dispatch(receiveTransactions(err)));
  };
};
