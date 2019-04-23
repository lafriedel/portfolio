import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
background: #fcfafa;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 20px 25px 18px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  opacity: 0.95;

  h2 {
      margin-bottom: 0px;
  }
`;

const NameContainer = styled.div`
display: flex;
align-items: center;

@media (max-width: 575px) {
    display: none;
}
`;

const LinksContainer = styled.div`
display: flex;
align-items: center;
a {
    margin-left: 40px;
    line-height: inherit;

    @media (max-width: 768px) {
        margin-left: 25px;
    }

    @media (max-width: 575px) {
        margin-left: 0;
        margin-right: 25px;
    }
}

h2 {
    margin-bottom: 0px;
}
`;

const Navigation = props => {
  return (
    <NavContainer>
      <NameContainer>
        <h2>Leigh-Ann Friedel</h2>
      </NameContainer>
      <LinksContainer>
        <a href="#skills-section"><h2>Skills</h2></a>
        <a href="#projects-section"><h2>Projects</h2></a>
        <a href="#contact-section"><h2>Contact</h2></a>
      </LinksContainer>
    </NavContainer>
  );
};

export default Navigation;
