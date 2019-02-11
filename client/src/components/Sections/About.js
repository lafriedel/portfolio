import React from "react";
import styled from 'styled-components';

const AboutContainer = styled.div`
width: 85%;
margin: 5px auto;

@media (max-width: 800px) {
  width: 100%;
}
`;

const About = props => {
  return (
    <AboutContainer>
      <p>
        Welcome! I'm Leigh-Ann. I'm a front-end web engineer, designer, and artist.
        Currently, I live in Arlington, Virginia, and I'm attending <a href="https://www.lambdaschool.com" target="_blank">Lambda School</a> full-time. Previously, I've worked with Anthropologie, the DC Public Library, and Wanderlust Yoga Festival.
      </p>
    </AboutContainer>
  );
};

export default About;
