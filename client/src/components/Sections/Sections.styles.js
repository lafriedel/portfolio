import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 85%;
  font-family: "Montserrat", sans-serif;

  h1 {
    font-size: 5rem;
    line-height: 1;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 575px) {
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export const AboutContainer = styled.div`
width: 85%;
margin: 5px auto;
font-family: "Montserrat", sans-serif;

a {
  text-decoration: none;
  color: #e34e0c;}
span {
  font-weight: 500;
}
@media (max-width: 800px) {
  width: 100%;
}

`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 85%;
  margin: 5px auto;
  font-family: "Montserrat", sans-serif;

  a {
    text-decoration: none;
    color: #e34e0c}

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