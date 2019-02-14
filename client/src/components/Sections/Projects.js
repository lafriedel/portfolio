import React from "react";
import { Project } from "../Projects";
import projects from "../../project-data";

const Projects = props => {
  return (
    <>
      <div className="section">
        <h2>Projects</h2>
      </div>
      {projects.map(project => (
        <Project project={project} key={project.id} />
      ))}
    </>
  );
};

export default Projects;
