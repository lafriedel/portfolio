import React from "react";
import { AboutContainer } from "./Sections.styles";

const About = props => {
  return (
    <AboutContainer>
      <p>
        Hello, I'm Leigh-Ann! Thanks for visiting my tiny corner of the web. 
      </p>
      <p>
        I am a Seattle-based <span>full-stack software engineer</span> with a background in experiential design. 
      </p>
      <p>
        Since mid-2019 I've been working at <a target="_blank" rel="noopener noreferrer" href="https://tackle.io">Tackle.io</a>, helping software companies accelerate their revenue in the cloud marketplaces.
      </p>
      <p>
        When I'm not developing software you can likely find me birding, printmaking, doing aerial yoga, riding my bike, or reading about personal finance.
      </p>
    </AboutContainer>
  );
};

export default About;
