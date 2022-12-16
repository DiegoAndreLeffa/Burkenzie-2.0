import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom/dist";
import { loginFormSchema } from "./formLoginSchema";
import { SubmitHandler } from "react-hook-form/dist/types";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { StyledFormLogin } from "./styles";

interface iFormLoginValues {
  email: string;
  password: string;
}

export function FormLogin() {
  const { userLogin, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iFormLoginValues>({
    resolver: yupResolver(loginFormSchema),
  });

  const submit: SubmitHandler<iFormLoginValues> = (data) => {
    userLogin(data);
    reset();
  };

  return (
    <StyledFormLogin>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div className="inputs-group">
          <input type="email" placeholder="Email" {...register("email")} />
          <label>Email</label>
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="inputs-group">
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <label>Passwoerd</label>
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Logando..." : "Logar"}
        </button>
      </form>

      <div className="text">
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>

        <Link to={"/register"}>Cadastrar</Link>
      </div>
    </StyledFormLogin>
  );
}
