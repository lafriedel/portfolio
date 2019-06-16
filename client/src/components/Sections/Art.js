import React from "react";
import { ArtProject } from "../Art";
import art from "../../art-data";

const Art = () => {
  return (
    <>
      <div className="section" id="projects-section">
        <h2>Art</h2>
      </div>
      {art.map(project => (
        <ArtProject project={project} key={project.id} />
      ))}
    </>
  );
};

export default Art;
