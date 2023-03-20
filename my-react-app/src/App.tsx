import React from 'react';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';
import Header from './components/Header';
import { HeaderTitleProps, HeaderTitleState } from 'interfaces/interfaces';

class App extends React.Component<HeaderTitleProps, HeaderTitleState> {
  constructor(props: HeaderTitleProps) {
    super(props);
    this.state = {
      currentPageTitle: '',
    };
    this.setCurrentPageTitle = this.setCurrentPageTitle.bind(this);
  }

  setCurrentPageTitle(title: string) {
    this.setState({ currentPageTitle: title });
  }

  render() {
    return (
      <BrowserRouter>
        <Header pageTitle={this.state.currentPageTitle} />
        <Routing setCurrentPageTitle={this.setCurrentPageTitle} />
      </BrowserRouter>
    );
  }
}

export default App;
