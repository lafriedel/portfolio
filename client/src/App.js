import React, { Component } from 'react';
import { Home } from './components/Home';
import { GlobalStyles } from './styles';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Home />
      </>
    );
  }
}

export default App;
