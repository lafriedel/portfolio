import React from "react";
import { AboutContainer } from "./Sections.styles";

const About = props => {
  return (
    <AboutContainer>
      <p>
        Hello, I'm Leigh-Ann! Thanks for visiting my corner of the internet. 
      </p>
      <p>
        I am a Seattle-based <span>full-stack software engineer</span> with a background in experiential design.
      </p>
      <p>
        From 2019 to 2025, starting as employee #15, I worked at <a target="_blank" rel="noopener noreferrer" href="https://tackle.io">Tackle</a>, where I helped software companies accelerate their revenue in the cloud marketplaces. Tackle was acquired by AppDirect in late 2025.
      </p>
      <p>
        I am also an <span>artist and printmaker</span>. I sell my work in my <a target="_blank" rel="noopener noreferrer" href="https://shop.leighannfriedel.com">online shop</a> and in person in the Seattle area.
      </p>
      <p>
        As of August 2025, I am on a short career break to focus on art and rest. I will be seeking a new software engineering role in early-mid 2026.
      </p>
    </AboutContainer>
  );
};

export default About;
