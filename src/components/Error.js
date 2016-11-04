import React from 'react';

export default ({
  message,
  stack
}) => (
  <div>
    <h2>Something went wrong</h2>
    <p>{message}</p>
    <code>
      <pre>
        {stack}
      </pre>
    </code>
  </div>
);
