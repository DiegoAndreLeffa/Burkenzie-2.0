import logo from "../../components/imgs/LogoHamburKenzie.svg";
import mensagem from "../../components/imgs/texto.jpg";
import circulos from "../../components/imgs/Group135.jpg";
import { FormLogin } from "../../components/formLogin";
import { StyledLogin } from "./styles";

export function Login() {
  return (
    <StyledLogin>
      <div className="boxLogin1">
        <div>
          <img src={logo} alt="HamburKenzie" />
        </div>
        <img
          className="imgPropaganda"
          src={mensagem}
          alt="A vida é como um sanduíche, é preciso recheá-la com os melhores ingredientes."
        />
      </div>
      <FormLogin />
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
    </StyledLogin>
  );
}
