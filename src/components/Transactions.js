import React from 'react';

import TransactionsList from './TransactionsList';
import TransactionsDetail from './TransactionsDetail';

export default (props) => (
  <div>
    <TransactionsList {...props}/>
    <TransactionsDetail {...props}/>
  </div>
);
