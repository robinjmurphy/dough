import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import Transaction from './Transaction';
import './TransactionGroup.css';

function getFormattedDay(day) {
  const date = moment(day);

  if (date.isSame(moment(), 'day')) {
    return 'Today';
  } else if (date.isSame(moment().subtract(1, 'day'), 'day')) {
    return 'Yesterday';
  } else {
    return date.format('dddd, D MMM');
  }
}

export default ({
  day,
  transactions
}) => {
  const fomatted = getFormattedDay(day);

  return(
    <div className="TransactionGroup">
      <header className="TransactionGroup__header">
        <h3 className="TransactionGroup__heading">{fomatted}</h3>
      </header>
      <ul>
        { transactions.map((transaction, i) => {
          return (
            <Transaction {...transaction} key={i}/>
          );
        })}
      </ul>
    </div>
  );
};
