import React from "react";
import { SocialLink } from "../Contact";
import social from "../../social-data";
import { ContactContainer, SocialLinkContainer } from "./Sections.styles";

const Contact = props => {
  return (
    <ContactContainer>
      <p>Let's connect! I'd love to hear from you.</p>
      <SocialLinkContainer>
        {social.map(account => (
          <SocialLink account={account} key={account.account} />
          ))}
      </SocialLinkContainer>
    </ContactContainer>
  );
};

export default Contact;
