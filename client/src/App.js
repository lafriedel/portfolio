import React, { Component } from "react";
import { Home } from "./components/Home";
import { GlobalStyles } from "./styles";
import { AppContainer } from "./App.styles";

class App extends Component {
  render() {
    return (
    <AppContainer>
      <GlobalStyles />
      <Home />
    </AppContainer>
    );
  }
}

export default App;
