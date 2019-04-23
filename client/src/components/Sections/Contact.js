import React from "react";
import { SocialLink } from "../Contact";
import social from "../../social-data";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

const SocialLinkContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Contact = props => {
  return (
    <>
      <div className="section" id="contact-section">
        <h2>Contact</h2>
      </div>
      <p>Let's connect!</p>

      <ContactContainer>
        <a href="mailto:leigh.ann.friedel@gmail.com">
          leigh.ann.friedel@gmail.com
        </a>
        <SocialLinkContainer>
          {social.map(account => (
            <SocialLink account={account} key={account.account} />
          ))}
        </SocialLinkContainer>
      </ContactContainer>
    </>
  );
};

export default Contact;
