import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import Error from './Error';
import TransactionGroup from './TransactionGroup';

const addDay = (transaction) => {
  return _.assign({}, transaction, {
    day: moment(transaction.created).format('YYYY-MM-DD'),
  });
};

const toGroup = (transactions) => {
  return {
    day: transactions[0].day,
    transactions
  };
};

const groupByDay = (transactions) => {
  return _(transactions)
    .map(addDay)
    .groupBy('day')
    .map(toGroup)
    .value();
};

export default ({
  transactions,
  isFetching,
  error
}) => {
  if (error) {
    return <Error message={error.message} stack={error.stack} status={error.status}/>;
  }

  const groupedByDay = groupByDay(transactions);

  return(
    <div>
      { groupedByDay.map((group, i) => {
        return <TransactionGroup {...group} key={i}/>;
      }) }
    </div>
  );
};
