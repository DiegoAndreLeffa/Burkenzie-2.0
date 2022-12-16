import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom/dist";
import { UserContext } from "../../context/UserContext";
import { RegisterFormSchema } from "./formRegisterSchema";
import { StyledFormRegister } from "./styles";

interface iFormRegisterValues {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export function FormRegister() {
  const { userRegister, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iFormRegisterValues>({
    resolver: yupResolver(RegisterFormSchema),
  });

  const submit: SubmitHandler<iFormRegisterValues> = (data) => {
    delete data.confirmPassword;
    userRegister(data);
    reset();
  };

  return (
    <StyledFormRegister>
      <div className="title">
        <h2>Cadastro</h2>
        <Link to={"/"}>Retornar para o login</Link>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="inputs-group">
          <input type="text" placeholder="Nome" {...register("name")} />
          <label>Nome</label>
          {errors.name && <p>{errors.name.message}</p>}
        </div>

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
          <label>Senha</label>
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className="inputs-group">
          <input
            type="password"
            placeholder="Confime a senha"
            {...register("confirmPassword")}
          />
          <label>Confirmar Senha</label>
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </StyledFormRegister>
  );
}
