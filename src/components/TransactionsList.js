import React from 'react';
import _ from 'lodash';

const Transaction = (props) => {
  const name = _.get(props, 'merchant.name', props.description);

  return (
    <li>{name}</li>
  );
};

export default ({
  transactions
}) => (
  <div>
    <ul>
      { transactions.map((transaction, i) => {
        return (
          <Transaction {...transaction} key={i}/>
        );
      })}
    </ul>
  </div>
);
