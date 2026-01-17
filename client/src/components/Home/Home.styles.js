import styled from "styled-components";

const CoverDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;

  @media (max-width: 575px) {
    min-height: 375px;
    height: 100%;
    justify-content: flex-start;
  }
`;

export default CoverDiv;