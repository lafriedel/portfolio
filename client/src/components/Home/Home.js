import React from "react";
import { Header, About, Skills, Projects, Art, Contact } from "../Sections";

import styled from "styled-components";

const CoverDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;

  @media (max-width: 575px) {
    min-height: 375px;
    height: 100%;
    justify-content: flex-start;
    margin-top: 10rem;
  }
`;

const Home = props => {
  return (
    <>
      <CoverDiv>
        <Header />
        <About />
      </CoverDiv>
      <Skills />
      <Projects />
      <Art />
      <Contact />
    </>
  );
};

export default Home;
