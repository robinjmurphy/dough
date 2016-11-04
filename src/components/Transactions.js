import moment from 'moment';
import React, { Component } from 'react';

import TransactionsList from './TransactionsList';
import TransactionsDetail from './TransactionsDetail';

export default class Transactions extends Component {
  componentDidMount() {
    const { loadTransactions } = this.props;
    const token = process.env.REACT_APP_MONZO_TOKEN;
    const since = moment().subtract(3, 'days').toISOString();

    loadTransactions(token, since);
  }

  render() {
    return (
      <div>
        <TransactionsList {...this.props}/>
        <TransactionsDetail {...this.props}/>
      </div>
    );
  }
}
