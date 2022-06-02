import React from 'react';
import logo from '../assets/logo-big.png';
import './Header.scss';

function Header() {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  )
}

export default Header