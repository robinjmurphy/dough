import React from 'react';
import { Link } from 'react-router';

const App = (props) => (
  <div>
    <h1>Hello world</h1>
    <Link to="/login">Login</Link>
  </div>
);

export default App;
