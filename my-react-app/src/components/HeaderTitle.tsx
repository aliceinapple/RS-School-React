import { HeaderTitleProps, HeaderTitleState } from 'interfaces/interfaces';
import React from 'react';

class HeaderTitle extends React.Component<HeaderTitleProps, HeaderTitleState> {
  render() {
    return <div className="header_title">{this.props.pageTitle} page</div>;
  }
}

export default HeaderTitle;
