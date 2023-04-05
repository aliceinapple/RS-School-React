import { TitleProps, TitleState } from 'interfaces/interfaces';
import React from 'react';

class HeaderTitle extends React.Component<TitleProps, TitleState> {
  render() {
    return <div className="header_title">{this.props.pageTitle} page</div>;
  }
}

export default HeaderTitle;
