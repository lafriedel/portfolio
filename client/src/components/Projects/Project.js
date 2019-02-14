import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
display: flex;
padding: 40px 0 60px 0;
margin: 0 0 80px 10px;
justify-content: space-between;
align-items: center;

&:nth-child(even) {
    flex-direction: row-reverse;
}

@media (max-width:800px) {
flex-direction: column-reverse;
justify-content: center;

&:nth-child(even) {
    flex-direction: column-reverse;
}
}
`;

const ProjectInfoContainer = styled.div`
width:55%;

@media (max-width: 800px) {
    width: 100%;
}
`;

const ProjectImgContainer = styled.div`
width: 40%;
display: flex;
justify-content: center;


@media (max-width: 800px) {
    width: 90%;
    margin-bottom: 40px;
}
`;

const ProjectImg = styled.img`
max-width: 500px;
width: 100%;
align-self: center;
`;

const Project = props => {
    console.log(props.project.marketingImage)
    return (
        <ProjectContainer>
            <ProjectInfoContainer>
                <h3>{props.project.title}</h3>
                <p>Role: {props.project.role}</p>
                <p>Technologies used: {props.project.technologies}</p>
                <p>{props.project.description}</p>
                <a href={props.project.projectURL} target="_blank"><button>View Project</button></a>
            </ProjectInfoContainer>
            <ProjectImgContainer>
            <ProjectImg alt={`${props.project.name} represented on a MacBook Pro screen`} src={props.project.marketingImage} />
            </ProjectImgContainer>
        </ProjectContainer>
    )
}

export default Project;