import * as yup from "yup";

export const RegisterFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório!"),
  email: yup.string().required("Email obrigatório!").email("Email inválido!"),
  password: yup
    .string()
    .required("Senha obrigatório!")
    .matches(/(?=.*?[A-Z])/, "É necessário um letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caractere especial."
    )
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .min(8, "É necessário uma senha de pelos 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha!")
    .oneOf([yup.ref("password")], "As senhas não são iguais!"),
});
