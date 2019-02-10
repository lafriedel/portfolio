import React from 'react';

const Project = props => {
    return (
        <>
            <h3>{props.project.title}</h3>
            <p>Role: {props.project.role}</p>
            <p>Technologies used: {props.project.technologies}</p>
            <p>{props.project.description}</p>
            <a href={props.project.projectURL} target="_blank"><button>View Project</button></a>
        </>
    )
}

export default Project;