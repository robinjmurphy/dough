import React from 'react';

import './Amount.css';

export default ({
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
