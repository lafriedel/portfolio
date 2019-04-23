import React from "react";
import { Navigation } from "../Sections";
import { Header } from "../Sections";
import { About } from "../Sections";
import { Skills } from "../Sections";
import { Projects } from "../Sections";
import { Contact } from "../Sections";

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
      <Contact />
    </>
  );
};

export default Home;
