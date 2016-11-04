import React from 'react';
import './Error.css';
import TokenError from './TokenError';

export default ({
  message,
  stack,
  status
}) => {
  if (status === 401) return <TokenError/>;

  return (
    <div className="Error">
      <p className="Error__exclamation">🔥</p>
      <p className="Error__message">Oops! Something went wrong</p>
      <p className="Error__detail">{message}</p>
    </div>
  );
};
