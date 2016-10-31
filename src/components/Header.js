import React from 'react';
import { Link } from 'react-router';

const Header = (props) => (
  <header className="Header">
    <h1 className="Header__logo">Dough</h1>
    <nav className="Header__nav">
      <ul>
        <li><Link to="/">Transactions</Link></li>
      </ul>
    </nav>
  </header>

);

export default Header;
