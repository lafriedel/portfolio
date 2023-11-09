import React from "react";
import { SocialLink } from "../Contact";
import social from "../../social-data";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 85%;
  margin: 5px auto;

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }

  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

const SocialLinkContainer = styled.div`
  display: flex;
`;

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
