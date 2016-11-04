import moment from 'moment';
import React, { Component } from 'react';

import TransactionsList from './TransactionsList';

export default class Transactions extends Component {
  componentDidMount() {
    const { loadTransactions } = this.props;
    const token = process.env.REACT_APP_MONZO_TOKEN;
    const since = moment().subtract(30, 'days').toISOString();

    loadTransactions(token, since);
  }

  render() {
    return (
      <div>
        <TransactionsList {...this.props}/>
      </div>
    );
  }
}
