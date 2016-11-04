import _ from 'lodash';
import moment from 'moment';

import monzo from '../monzo';

const defaultImage = 'http://placehold.it/28x28/EEEEEE?text=+';

const toTransaction = (transaction) => {
  const name = _.get(transaction, 'merchant.name', transaction.description);
  const merchantLogo = _.get(transaction, 'merchant.logo', defaultImage);
  const logo = _.isEmpty(merchantLogo) ? defaultImage : merchantLogo;
  const day = moment(transaction.created).format('YYYY-MM-DD');
  const amount = transaction.amount;

  return {
    name,
    logo,
    amount,
    day
  };
};

const find = (token, since) => {
  return monzo.getTransactions(token, since)
    .then(transactions => transactions.map(toTransaction).reverse());
};

export default {
  find
};
