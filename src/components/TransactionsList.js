import React from 'react';
import _ from 'lodash';
import Error from './Error';

const Transaction = (props) => {
  const name = _.get(props, 'merchant.name', props.description);

  return (
    <li>{name}</li>
  );
};

export default ({
  transactions,
  error
}) => {
  if (error) return <Error message={error.message} stack={error.stack}/>;

  return(
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
};
