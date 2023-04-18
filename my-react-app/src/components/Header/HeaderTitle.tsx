import React from 'react';
import { TitleProps } from './interfaces';

function HeaderTitle({ pageTitle }: TitleProps) {
  return <div className="header_title">{pageTitle} page</div>;
}

export default HeaderTitle;
