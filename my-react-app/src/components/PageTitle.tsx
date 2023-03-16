import React from 'react';

interface TitleState {
  pageTitle: string;
}

class PageTitle extends React.Component<{}, TitleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      pageTitle: '',
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.handleHashChange);
  }

  componentDidUpdate() {
    const hash = window.location.pathname;
    if (this.state.pageTitle !== hash) {
      this.setState({ pageTitle: hash });
    }
  }

  handleHashChange = () => {
    const hash = window.location.pathname;
    this.setState({ pageTitle: hash });
    console.log(hash);
  };

  render() {
    const { pageTitle } = this.state;

    return <div>{pageTitle}</div>;
  }
}

export default PageTitle;
