import React from 'react';

export default (props) => (
  <div className="Error">
    <p className="Error__exclamation">🙈</p>
    <p className="Error__message">{'That page doesn\'t exist'}</p>
    <p className="Error__tip">Go back to <a href="/">your transactions</a>.</p>
  </div>
);
