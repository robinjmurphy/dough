import React, { Component } from 'react';
import moment from 'moment';

import Transactions from '../components/Transactions';
import monzo from '../lib/client';

export default class TransactionsContainer extends Component {
  constructor() {
    super();
    this.state = {
      transactions: []
    };
  }

  componentDidMount() {
    const token = process.env.REACT_APP_MONZO_TOKEN;
    const since = moment().subtract(3, 'days').toISOString();

    monzo.getTransactions(token, since)
      .then((transactions) => this.setState({ transactions }));
  }

  render() {
    const { transactions } = this.state;

    return (
      <Transactions transactions={transactions}/>
    );
  }
}
