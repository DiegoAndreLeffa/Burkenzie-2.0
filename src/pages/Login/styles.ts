import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  .boxLogin {
    display: flex;
    flex-direction: column;
  }

  .boxLogin1 {
    display: none;
    flex-direction: column;
  }

  .boxLogin div {
    margin-bottom: 25px;
  }
  .boxLogin div img {
    width: 50%;
  }

  .imgPropaganda {
    width: 100%;
    margin-bottom: 25px;
  }

  .circulos {
    width: 65%;
    height: 112px;
  }

  @media (max-width: 910px) {
    display: flex;
    flex-direction: column;

    .boxLogin {
      display: none;
    }
    .boxLogin1 {
      display: flex;
      width: 330px;
    }
  }

  @media (max-width: 370px) {
    .boxLogin1 {
      width: 90%;
    }
  }
`;
