import logo from "../../components/imgs/LogoHamburKenzie.svg";
import mensagem from "../../components/imgs/texto.jpg";
import circulos from "../../components/imgs/Group135.jpg";

import { FormRegister } from "../../components/formRegister";
import { StyledRegister } from "./styles";

export function Register() {
  return (
    <StyledRegister>
      <div className="boxLogin">
        <div>
          <img src={logo} alt="HamburKenzie" />
        </div>
        <img
          className="imgPropaganda"
          src={mensagem}
          alt="A vida é como um sanduíche, é preciso recheá-la com os melhores ingredientes."
        />
        <img className="circulos" src={circulos} alt="circulos" />
      </div>
      <FormRegister />
    </StyledRegister>
  );
}
