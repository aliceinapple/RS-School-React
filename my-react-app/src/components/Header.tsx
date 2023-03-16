import React from 'react';
import { NavLink } from 'react-router-dom';
import PageTitle from './PageTitle';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <NavLink to="/main">Main</NavLink>
          <NavLink to="/about">About</NavLink>
          <PageTitle />
        </div>
      </header>
    );
  }
}

export default Header;
