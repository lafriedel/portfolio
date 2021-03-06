import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SocialLinkDiv = styled.div`
  padding-left: 15px;

  @media (max-width: 575px) {
    padding-left: 0;
    padding-right: 15px;
  }
`;

const SocialLink = props => {
  return (
    <SocialLinkDiv>
      <a
        href={props.account.profileURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FontAwesomeIcon icon={props.account.icon} />
      </a>
    </SocialLinkDiv>
  );
};

export default SocialLink;
