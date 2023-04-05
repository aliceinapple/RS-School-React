import { TitleProps } from 'interfaces/interfaces';
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderTitle from './HeaderTitle';

class Header extends React.Component<TitleProps> {
  render() {
    return (
      <header>
        <div className="header">
          <div className="nav">
            <Link to="/main">Main</Link>
            <Link to="/about">About</Link>
            <Link to="/form">Form</Link>
          </div>
          <HeaderTitle pageTitle={this.props.pageTitle} />
        </div>
      </header>
    );
  }
}

export default Header;
