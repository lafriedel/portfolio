import React, { Component } from "react";
import { Home } from "./components/Home";
import { GlobalStyles } from "./styles";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 5%;
`;

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
