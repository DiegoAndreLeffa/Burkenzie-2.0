import styled from "styled-components";

export const StyledFormRegister = styled.div`
  box-sizing: border-box;

  width: 500px;
  height: 474px;

  padding: 21px 24px;

  background: #ffffff;

  border: 2px solid #f5f5f5;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  margin-left: 2%;

  form {
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  form button {
    height: 60px;
    width: 100%;
    background: #219653;
    border-radius: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    text-align: center;

    color: #ffffff;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .title h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: #333333;
  }
  .title a {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;

    text-decoration-line: underline;

    color: #828282;
  }

  form button:hover {
    background: #93d7af;
    color: #ffffff;
  }

  .inputs-group {
    position: relative;
  }

  input {
    border: none;
    // border: 2px solid #333333;
    border-radius: 8px;
    background: #f5f5f5;
    padding: 1rem;
    width: 100%;
    font-size: 1rem;
    color: #f5f5f5;
    transition: 150ms;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #333333;
  }

  label {
    position: absolute;
    left: 16px;

    pointer-events: none;
    transform: translateY(1rem);
    transition: 150ms;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #333333;
  }
  input::placeholder {
    opacity: 0;
  }
  input:focus,
  input:not(:placeholder-shown) {
    outline: none;
    border: 2px solid #333333;
  }

  input:focus::placeholder {
    opacity: 1;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translateY(-50%) scale(0.8);
    background-color: white;
    padding: 0 0.2rem;
    color: #333333;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #e60000;
  }

  @media (max-width: 550px) {
    width: 90%;
    margin: 0;
  }
`;
