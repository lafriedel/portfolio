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
  display: flex;
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
`;

const Project = props => {
  return (
    <ProjectContainer>
      <ProjectInfoContainer>
        <h3>{props.project.title}</h3>
        <Description>{props.project.description}</Description>
        <p>
          <span>Role:</span> {props.project.role}
        </p>
        <p>
          <span>Technologies used:</span> {props.project.technologies}
        </p>
        <ProjectButtons>
          <a
            href={props.project.projectURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project</button>
          </a>
          <a
            href={props.project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>GitHub Repo</button>
          </a>
        </ProjectButtons>
      </ProjectInfoContainer>
      <ProjectImgContainer>
        <ProjectImg
          alt={`${props.project.name} represented on a MacBook Pro screen`}
          src={props.project.marketingImage}
        />
      </ProjectImgContainer>
    </ProjectContainer>
  );
};

export default Project;
