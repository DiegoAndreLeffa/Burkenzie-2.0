import styled from "styled-components";

export const StyledDeshBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  header {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 200px;
    align-items: center;

    background: #f5f5f5;

    margin-bottom: 25px;
  }
  header img {
    width: 158.94px;
    height: 36.83px;
  }

  .Box {
    display: flex;
  }
  .pesquisa {
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 15px;
    gap: 20px;

    width: 365px;
    height: 60px;

    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
  }
  .pesquisa input {
    border: 1px solid transparent;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #e0e0e0;
  }
  .pesquisa input:focus {
    outline: none;
  }
  .lupasDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 68px;
    height: 40px;

    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
  }

  .lupa {
    width: 20px;
    color: white;

    cursor: pointer;
  }

  .Cart {
    display: flex;
    height: 58px;
    align-items: center;
    justify-content: center;

    position: relative;
  }
  .cartOpen {
    width: 50px;
    height: 20px;
    color: #bdbdbd;
    cursor: pointer;
  }
  .cartOpen:hover {
    color: black;
  }

  .contador {
    position: absolute;
    top: 3px;
    right: 4px;

    z-index: 1;
  }
  .contador p {
    font-family: "Inter";
    font-size: 16px;
    font-weight: 900;
    color: white;

    width: 20px;
    height: 23px;

    background: green;

    display: flex;
    justify-content: center;

    border-radius: 7px;
  }

  .sair {
    width: 38px;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buttonSair {
    width: 40px;
    height: 27px;
    color: #bdbdbd;
    cursor: pointer;
  }
  .buttonSair:hover {
    color: black;
  }

  .divLista {
    width: 100%;
    padding: 0 200px;
  }

  .lista {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px 56px;
    width: 100%;
  }

  @media (max-width: 1254px) {
    header {
      display: flex;
      flex-direction: column;
      height: auto;
      padding: 10px;
    }

    .pesquisa {
      width: 55%;
    }

    .Box {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .pesquisa input {
      width: 50%;
    }

    .divLista {
      padding: 0 10%;
    }

    .lista {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow-x: scroll;
    }
  } ;
`;
