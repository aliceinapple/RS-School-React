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

    switch (path) {
      case '/main':
        this.setState({ currentPageTitle: 'main' });
        break;
      case '/about':
        this.setState({ currentPageTitle: 'about' });
        break;
      default:
        this.setState({ currentPageTitle: '404' });
    }
  }

  render() {
    return <div className='header_title'>{this.state.currentPageTitle} page</div>;
  }
}

export default HeaderTitle;
