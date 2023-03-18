import Header from '../components/Header';
import React, { Fragment } from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="about-page">
          <h1>About</h1>
        </div>
      </Fragment>
    );
  }
}

export default AboutPage;
