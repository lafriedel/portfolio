import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  padding: 40px 0 60px;
  margin-bottom: 80px;
  justify-content: space-between;
  align-items: flex-start;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    justify-content: center;

    &:nth-child(even) {
      flex-direction: column-reverse;
    }
  }
`;

const ProjectInfoContainer = styled.div`
  width: 55%;

  span {
    font-weight: 500;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Description = styled.p`
  margin-bottom: 15px;
`;

const ProjectButtons = styled.div`
  /* display: flex once image display is decided */
  display: none;
  align-items: center;

  button {
    margin-right: 25px;
  }
`;

const ProjectImgContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const ProjectImg = styled.img`
  max-width: 500px;
  width: 100%;
  align-self: center;
  border-radius: 5px;
`;

const ArtProject = props => {
  return (
    <ProjectContainer>
      <ProjectInfoContainer>
        <h3>{props.project.title}</h3>
        <Description>{props.project.description}</Description>
        <ProjectButtons>
            <button>View Photos</button>
        </ProjectButtons>
      </ProjectInfoContainer>
      <ProjectImgContainer>
        <ProjectImg src={props.project.marketingImage} />
      </ProjectImgContainer>
    </ProjectContainer>
  );
};

export default ArtProject;
