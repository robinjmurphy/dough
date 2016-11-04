import React from 'react';
import './Error.css';

const hasToken = !!process.env.REACT_APP_MONZO_TOKEN;
const message = hasToken ? 'It looks like there\'s a problem with your token' : 'Export your Monzo token to get started';
const fix = hasToken ? 'Grab a fresh token' : 'Grab a token';

export default () => (
  <div className="Error">
    <p className="Error__exclamation">🔐</p>
    <p className="Error__message">{message}</p>
    <p className="Error__fix"><a href="https://developers.monzo.com/" target="_blank">{fix}</a>{' and export it as '}<code>{'REACT_APP_MONZO_TOKEN'}</code></p>
  </div>
);
