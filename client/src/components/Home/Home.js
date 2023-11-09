import React from "react";
import { Header, About, Contact } from "../Sections";
import CoverDiv from "./Home.styles"

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
