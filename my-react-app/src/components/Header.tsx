import React from 'react';
import { Link } from 'react-router-dom';
import HeaderTitle from './HeaderTitle';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className="nav">
            <Link to="/main">Main</Link>
            <Link to="/about">About</Link>
          </div>
          <HeaderTitle />
        </div>
      </header>
    );
  }
}

export default Header;
