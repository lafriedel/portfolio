import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialLinkDiv from "./Contact.styles";

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
