import React from 'react';
import _ from 'lodash';

import Amount from './Amount';
import './Transaction.css';

export default ({
  name,
  logo,
  amount
}) => {
  return (
    <li className="Transaction">
      <span className="Transaction__logo"><img src={logo} alt={name}/></span>
      <span className="Transaction__name">{name}</span>
      <span className="Transaction__amount"><Amount amount={amount}/></span>
    </li>
  );
};
