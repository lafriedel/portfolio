import React from "react";
import { HeaderContainer } from "./Sections.styles";
import "../../styles/cssans.min.css";

const Header = props => {
  return (
    <HeaderContainer>
      <div className="cssans cssans--left">
        <div className="cssans__accessible">Leigh-Ann Friedel</div>

        <div className="cssans__word">
          <b className="cssans:L" />
          <b className="cssans:e" />
          <b className="cssans:i" />
          <b className="cssans:g" />
          <b className="cssans:h" />
          <b className="cssans:-" />
          <b className="cssans:A" />
          <b className="cssans:n" />
          <b className="cssans:n" />
        </div>

        <div className="cssans__word">
          <b className="cssans:F" />
          <b className="cssans:r" />
          <b className="cssans:i" />
          <b className="cssans:e" />
          <b className="cssans:d" />
          <b className="cssans:e" />
          <b className="cssans:l" />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
