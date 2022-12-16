import styled from "styled-components";

export const CardsCartProducts = styled.li`
  width: 100%;
  display: flex;
  align-items: center;

  .divImg {
    width: 80px;
    heigth: 80px;
    background: #e0e0e0;
    border-radius: 5px;
    margin-right: 10px;
  }
  .divImg img {
    width: 95%;
    heigth: 95%;
  }
  .divnome {
    width: 100%;
  }
  .divnome h3 {
    margin-bottom: 10px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #333333;
  }
  .divnome small {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #828282;
  }

  button {
    display: flex;
    background: transparent;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: #bdbdbd;
  }
`;
