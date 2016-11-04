import React from 'react';
import _ from 'lodash';

import Error from './Error';
import TransactionGroup from './TransactionGroup';

const toGroup = (transactions) => {
  return {
    day: transactions[0].day,
    transactions
  };
};

const groupByDay = (transactions) => {
  return _(transactions)
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

  const grouped = groupByDay(transactions);

  return(
    <div>
      { grouped.map((group, i) => {
        return <TransactionGroup {...group} key={i}/>;
      })}
    </div>
  );
};
