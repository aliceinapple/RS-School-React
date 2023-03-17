import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderTitle from './HeaderTitle';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className='nav'>
            <NavLink to="/main">Main</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <HeaderTitle />
        </div>
      </header>
    );
  }
}

export default Header;
