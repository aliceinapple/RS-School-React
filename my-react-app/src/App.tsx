import React from 'react';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';
import Header from './components/Header';
import { TitleProps } from 'interfaces/interfaces';

class App extends React.Component<TitleProps> {
  constructor(props: TitleProps) {
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
        <Header />
        <Routing />
      </BrowserRouter>
    );
  }
}

export default App;
