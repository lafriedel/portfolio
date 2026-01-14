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
        My most recent software engineering role was at <a target="_blank" rel="noopener noreferrer" href="https://tackle.io">Tackle.io</a>, helping software companies accelerate their revenue in the cloud marketplaces.
      </p>
      <p>
        I am also an <span>artist and printmaker</span>. I sell my work in my <a target="_blank" rel="noopener noreferrer" href="https://shop.leighannfriedel.com">online shop</a> and in person in the Seattle area.
      </p>
      <p>
        When I'm not developing software or making art, you can likely find me birding, doing aerial yoga, or spending time with my husband and cat.
      </p>
    </AboutContainer>
  );
};

export default About;
