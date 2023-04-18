import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeaderTitle from './HeaderTitle';

function Header() {
  const [pageTitle, setPageTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    const title = pathName.slice(1);
    setPageTitle(title.charAt(0).toUpperCase() + title.slice(1));
  }, [location.pathname]);

  return (
    <header>
      <div className="header">
        <div className="nav">
          <Link to="/main">Main</Link>
          <Link to="/about">About</Link>
          <Link to="/form">Form</Link>
        </div>
        <HeaderTitle pageTitle={pageTitle ? pageTitle : 'Main'} />
      </div>
    </header>
  );
}

export default Header;
