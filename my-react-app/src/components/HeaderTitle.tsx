import { HeaderTitleState } from 'interfaces/interfaces';
import React from 'react';

class HeaderTitle extends React.Component<{}, HeaderTitleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentPageTitle: '',
    };
  }

  componentDidMount() {
    this.getTitle();
  }

  getTitle() {
    const path = window.location.pathname;

    if (path === '/main' || path === '/') {
      this.setState({ currentPageTitle: 'main' });
    } else if (path === '/about') {
      this.setState({ currentPageTitle: 'about' });
    } else {
      this.setState({ currentPageTitle: '404' });
    }
  }

  render() {
    return <div className="header_title">{this.state.currentPageTitle} page</div>;
  }
}

export default HeaderTitle;
