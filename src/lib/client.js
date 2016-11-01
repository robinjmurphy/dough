const baseUrl = 'https://api.monzo.com';

const get = (path, token) => {
  const opts = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return fetch(`${baseUrl}${path}`, opts)
    .then((res) => res.json());
};

const getAccount = (token) => {
  return get('/accounts', token)
    .then((body) => body.accounts[0]);
};

const getTransactions = (token, since) => {
  return getAccount(token)
    .then((account) => get(`/transactions?account_id=${account.id}&since=${since}&expand[]=merchant`, token))
    .then((body) => body.transactions);
};

export default {
  getTransactions
};
