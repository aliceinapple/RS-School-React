import React from 'react';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import { TitleProps } from 'components/Header/interfaces';
import { store } from './store';

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
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
