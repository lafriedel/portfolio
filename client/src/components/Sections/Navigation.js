import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`;

const Navigation = props => {
  return (
    <NavContainer>
      <div>
        <h2>Leigh-Ann Friedel</h2>
      </div>
      <div>
        <a href="#skills-section">Skills</a>
        <a href="#projects-section">Projects</a>
        <a href="#contact-section">Contact</a>
      </div>
    </NavContainer>
  );
};

export default Navigation;
