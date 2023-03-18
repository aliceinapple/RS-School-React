import Header from '../components/Header';
import React, { Fragment } from 'react';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="not-found-page">
          <h1>404 Not Found</h1>
        </div>
      </Fragment>
    );
  }
}

export default NotFoundPage;
