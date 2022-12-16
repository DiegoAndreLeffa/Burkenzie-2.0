import styled from "styled-components";

export const StyledTotalCartProducts = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 100%;
    height: 60px;

    background: #e0e0e0;

    border: 2px solid #e0e0e0;
    border-radius: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #828282;
  }

  button: hover {
    background: #828282;
    border: 2px solid #828282;
    color: #e0e0e0;
  }
`;
