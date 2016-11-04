import React from 'react';
import './Header.css';
import { Link } from 'react-router';

const Header = (props) => (
  <header className="Header">
    <h1 className="Header__logo"><Link to="/">Dough</Link> <span className="Header__emoji">💷</span></h1>
  </header>
);

export default Header;
