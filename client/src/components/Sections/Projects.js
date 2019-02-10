import React from 'react';
import { Project } from '../Projects';
import projects from '../../project-data';

const Projects = props => {
    return (
        <>
            <h2>Projects</h2>
            {projects.map(project => (
                <Project project={project} key={project.id} />
            ))}
        </>
    )
}

export default Projects;