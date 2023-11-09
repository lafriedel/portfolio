import React from "react";
import { Header, About, Contact } from "../Sections";

import styled from "styled-components";

const CoverDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 575px) {
    min-height: 375px;
    height: 100%;
    justify-content: flex-start;
    margin-top: 10rem;
  }
`;

const Home = props => {
  return (
    <CoverDiv>
      <Header />
      <About />
      <Contact />
    </CoverDiv>
  );
};

export default Home;
