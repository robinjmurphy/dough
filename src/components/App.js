import React from 'react';
import Header from './Header';
import LoadingBar from 'react-redux-loading-bar';

export default (props) => (
  <div className="App">
    <Header/>
    <LoadingBar style={{ backgroundColor: '#E34B5F' }}/>
    <main className="App__main">
      {props.children}
    </main>
  </div>
);
