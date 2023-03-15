import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <NavLink to="/main">Main</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </header>
    );
  }
}

export default Header;
