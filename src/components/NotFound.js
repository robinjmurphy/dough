import React from 'react';
import { Link } from 'react-router';

export default (props) => (
  <div className="Error">
    <p className="Error__exclamation">🙈</p>
    <p className="Error__message">{'That page doesn\'t exist'}</p>
    <p className="Error__tip">Go back to <Link to="/">your transactions</Link>.</p>
  </div>
);
