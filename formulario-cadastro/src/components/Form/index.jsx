import "./style.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function Form() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Seu nome não pode conter números"
      ),
    email: yup
      .string()
      .email("Necessário estar no formato de email @")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Senha com menos de 8 caracteres")
      .matches(
        "^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[$*&%@#])",
        "Sua senha precisa conter: 1 letra maiscúla, 1 letra minúscula, 1 número e 1 símbolo: $*&%@#  "
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const send = (data) => {
    history.push(`/sucess/${data.name}`, data);
  };

  return (
    <form onSubmit={handleSubmit(send)}>
      <input placeholder="Nome de usuário" {...register("name")} />
      <span>{errors.name?.message}</span>
      <input placeholder="email" {...register("email")} />
      <span>{errors.email?.message}</span>
      <input placeholder="senha" type="password" {...register("password")} />
      <span>{errors.password?.message}</span>
      <input
        placeholder="Confirmar senha"
        type="password"
        {...register("confirmPassword")}
      />
      <span>{errors.confirmPassword?.message}</span>
      <button type="submit"> CADASTRAR </button>
    </form>
  );
}

export default Form;
