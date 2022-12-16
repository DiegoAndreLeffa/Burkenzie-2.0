import styled from "styled-components";

export const StyledListProduct = styled.li`
  width: 245px;
  height: 346px;

  background: #ffffff;

  border: 2px solid #e0e0e0;
  border-radius: 5px;

  &:hover {
    border: 2px solid #27ae60;

    button {
      background: #27ae60;
      border: 2px solid #27ae60;
    }
  }

  .divImg {
    background: #f5f5f5;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 150px;
  }

  img {
    width: 60%;
  }

  .divBody {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    width: 240px;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: #333333;
  }
  small {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #828282;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #27ae60;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 106px;
    height: 40px;

    background: #bdbdbd;

    border: 2px solid #bdbdbd;
    border-radius: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    color: #ffffff;
  }
`;
