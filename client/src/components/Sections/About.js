import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  width: 85%;
  margin: 5px auto;

  @media (max-width: 800px) {
    width: 100%;
  }

  span {
    font-weight: 500;
  }

  p,
  a,
  span {
    font-size: 2.2rem;

    @media (max-width: 575px) {
      font-size: 1.8rem;
    }
  }
`;

const About = props => {
  return (
    <AboutContainer>
      <p>
        Hello, I'm Leigh-Ann! I'm a{" "}
        <span>front-end web engineer, designer, and artist</span>. Currently, I
        live in Arlington, Virginia, and I'm attending{" "}
        <a
          href="https://www.lambdaschool.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lambda School
        </a>{" "}
        full-time. Previously, I've worked with Anthropologie, the DC Public
        Library, and Wanderlust Yoga Festival. Welcome!
      </p>
    </AboutContainer>
  );
};

export default About;
