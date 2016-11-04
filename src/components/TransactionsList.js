import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import Error from './Error';
import './TransactionsList.css';

const defaultImage = 'http://placehold.it/28x28/EEEEEE?text=+';

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

const Amount = ({
  amount
}) => {
  const rounded = (amount / 100).toFixed(2);
  const matches = /(-?)(\d+).(\d+)/.exec(rounded.toString());

  if (!matches) {
    return null;
  }

  const symbol = matches[1] || '+';
  const major = matches[2];
  const minor = matches[3];
  const classNames = ['Amount'];

  if (amount > 0) classNames.push('Amount--positive');

  return (
    <span className={classNames.join(' ')}>
      <span className="Amount__symbol">{symbol}</span>
      <span className="Amount__major">{major}</span>
      <span className="Amount__minor">.{minor}</span>
    </span>
  );
};

const Transaction = (props) => {
  if (_.isEmpty(_.get(props,'merchant.logo'))) {
    _.set(props, 'merchant.logo', defaultImage);
  }

  const name = _.get(props, 'merchant.name', props.description);
  const image = _.get(props, 'merchant.logo', defaultImage);
  const amount = _.get(props, 'amount', 0);

  return (
    <li className="Transaction">
      <span className="Transaction__logo"><img src={image} alt={name}/></span>
      <span className="Transaction__name">{name}</span>
      <span className="Transaction__amount"><Amount amount={amount}/></span>
    </li>
  );
};

const TransactionGroup = ({
  day,
  transactions
}) => {
  const fomatted = getFormattedDay(day);

  return(
    <div className="TransactionGroup">
      <header className="TransactionGroup__header">
        <h3 className="TransactionGroup__heading">{fomatted}</h3>
      </header>
      <div className="TransactionGroup__Main">
        <ul>
          { transactions.map((transaction, i) => {
            return (
              <Transaction {...transaction} key={i}/>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ({
  transactions,
  isFetching,
  error
}) => {
  if (error) return <Error message={error.message} stack={error.stack} status={error.status}/>;

  const groupedByDay = _(transactions)
    .reverse()
    .map((transaction) => {
      return _.assign({}, transaction, {
        day: moment(transaction.created).format('YYYY-MM-DD'),
      });
    })
    .groupBy('day')
    .map((transactions) => {
      return {
        day: transactions[0].day,
        transactions
      };
    })
    .value();

  return(
    <div>
      { groupedByDay.map((group, i) => {
        return <TransactionGroup {...group} key={i}/>;
      }) }
    </div>
  );
};
