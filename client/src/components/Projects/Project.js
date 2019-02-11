import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
padding: 40px 0 60px 0;
margin-left: 10px;

`;

const Project = props => {
    return (
        <ProjectContainer>
            <h3>{props.project.title}</h3>
            <p>Role: {props.project.role}</p>
            <p>Technologies used: {props.project.technologies}</p>
            <p>{props.project.description}</p>
            <a href={props.project.projectURL} target="_blank"><button>View Project</button></a>
        </ProjectContainer>
    )
}

export default Project;