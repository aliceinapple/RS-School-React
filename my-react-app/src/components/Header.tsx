import React from 'react';
import Routing from './Routing';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <Routing />
      </nav>
    );
  }
}

export default Header;
