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
        <span>full-stack developer, designer, and artist</span>. When I'm not working in code I'm likely rock climbing, thinking about how to make cities and transportation more sustainable, reading up on personal finance techniques, or trying a new recipe.
      </p>
    </AboutContainer>
  );
};

export default About;
