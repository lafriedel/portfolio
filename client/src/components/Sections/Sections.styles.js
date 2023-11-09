import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 85%;

  @media (max-width: 800px) {
    width: 100%;

    b {
      font-size: 2.76rem;
    }
  }

  @media (max-width: 575px) {
    b {
      font-size: 1.5rem;
    }
  }
`;

export const AboutContainer = styled.div`
width: 85%;
margin: 5px auto;

@media (max-width: 800px) {
  width: 100%;
}

span {
  font-weight: 500;
}
`;

export const ContactContainer = styled.div`
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

export const SocialLinkContainer = styled.div`
  display: flex;
`;