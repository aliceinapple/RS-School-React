import { TitleProps } from 'interfaces/interfaces';
import React from 'react';

function HeaderTitle({ pageTitle }: TitleProps) {
  return <div className="header_title">{pageTitle} page</div>;
}

export default HeaderTitle;
