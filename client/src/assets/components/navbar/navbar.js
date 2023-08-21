import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar blue">
      <div className="navbar-container">
        <div className="brand">K-Hub React Practice App</div>
        <div className="nav-blocks">
        <div className="nav-block blue"></div>
        <div className="nav-block navy"></div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
