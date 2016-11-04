import { STATUS_CODES } from 'http';

const _ = require('lodash');
const baseUrl = 'https://api.monzo.com';

const get = (path, token) => {
  const opts = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return fetch(`${baseUrl}${path}`, opts)
    .then((res) => {
      if (!res.ok) {
        const statusText = STATUS_CODES[res.status];
        const err = new Error(`HTTP error ${res.status} ${statusText}`);

        err.status = res.status;

        throw err;
      }

      return res;
    })
    .then(res => res.json());
};

const getAccount = (token) => {
  return get('/accounts', token)
    .then(body => body.accounts[0]);
};

const getTransactions = (token, since) => {
  return getAccount(token)
    .then(account => get(`/transactions?account_id=${account.id}&since=${since}&expand[]=merchant`, token))
    .then(body => _.get(body, 'transactions', []).reverse());
};

export default {
  getTransactions
};
