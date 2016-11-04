import React from 'react';
import _ from 'lodash';

import Amount from './Amount';
import './Transaction.css';

const defaultImage = 'http://placehold.it/28x28/EEEEEE?text=+';

export default ({
  merchant,
  description,
  amount
}) => {
  if (_.isEmpty(_.get(merchant,'logo'))) {
    _.set(merchant, 'logo', defaultImage);
  }

  const name = _.get(merchant, 'name', description);
  const image = _.get(merchant, 'logo', defaultImage);

  return (
    <li className="Transaction">
      <span className="Transaction__logo"><img src={image} alt={name}/></span>
      <span className="Transaction__name">{name}</span>
      <span className="Transaction__amount"><Amount amount={amount}/></span>
    </li>
  );
};
