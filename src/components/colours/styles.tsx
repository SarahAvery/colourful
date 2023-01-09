import styled from "styled-components";

const ColoursStyled = styled.div`
  height: calc(80vh - 40px);

  margin: 0 auto;
  background: white;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  max-width: 800px;

  svg {
    height: 100%;
    width: 100%;

    .none {
      fill: transparent;
    }
  }
`;

export default ColoursStyled;
