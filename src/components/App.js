import React from 'react';
import Header from './Header';

export default (props) => (
  <div className="App">
    <Header/>
    <main className="App__main">
      {props.children}
    </main>
  </div>
);
