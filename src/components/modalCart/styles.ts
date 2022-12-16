import styled from "styled-components";

export const StyledModalCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  position: fixed;
  inset: 0;
  z-index: 99;

  background-color: rgba(0, 0, 0, 0.25);

  .modalBody {
    width: 400px;
    background: white;
    border-radius: 10px;
  }

  .modalBodyTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 10px 15px;
    border-radius: 10px 10px 0 0;
    margin-bottom: 10px;
    background: #27ae60;
  }

  .modalBodyTitle h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #ffffff;
  }

  .modalBodyTitle button {
    background-color: transparent;
    font-size: 18px;
    font-family: "Inter";
    font-weight: 700;

    color: #ffffff;
  }

  .divList {
    padding: 10px 15px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 450px) {
    .modalBody {
      width: 90%;
    }
  } ;
`;
