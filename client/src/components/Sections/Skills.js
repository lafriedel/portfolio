import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;

  @media (max-width: 575px) {
    flex-direction: column;
    justify-content: flex-start;
  }

  span {
    font-weight: 500;
  }
`;

const SkillCategory = styled.div`
@media (max-width: 575px) {
    margin-bottom: 20px;
}
`;

const Skills = props => {
  return (
    <>
      <div className="section" id="skills-section">
        <h2>Skills</h2>
      </div>
      <SkillsContainer>
        <SkillCategory>
          <p>
            <span>Front-End</span>
          </p>
          <ul>
            <li>Javascript</li>
            <li>React | Redux</li>
            <li>CSS | Preprocessing</li>
            <li>Semantic HTML</li>
          </ul>
        </SkillCategory>
        <SkillCategory>
          <p>
            <span>Back-End</span>
          </p>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>SQL</li>
            <li>MySQL | PostgreSQL</li>
          </ul>
        </SkillCategory>
        <SkillCategory>
          <p>
            <span>Other</span>
          </p>
          <ul>
            <li>Version control</li>
            <li>REST</li>
            <li>Sketch</li>
            <li>Jest</li>
          </ul>
        </SkillCategory>
      </SkillsContainer>
    </>
  );
};

export default Skills;
