import React from 'react';
import logo from "../assets/images/icon.svg";
import './Header.scss';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="portfolio-nav">
              <img src={logo} alt='icon' />
              <span>{"<shaheb />"}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header