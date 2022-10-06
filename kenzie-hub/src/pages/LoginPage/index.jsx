import { Link } from "react-router-dom";
import { Form } from "../../components/Form";
import { Main } from "../../components/Main";
import { StyledHeadline, StyledTitleOne } from "../../styles/typography";
import { StyledDiv } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formLoginSchema } from "../../validation";

import { api } from "../../services/api";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formLoginSchema),
  });

  const handleForm = (userData) => {
    api
      .post("/sessions", { ...userData })
      .then((response) => {
        console.log({ ...response });
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.token);
      })
      .catch((error) => {
        const msg = console.log(error.response.data.message);
        toast.error(`${error.response.data.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <Main>
      <StyledDiv>
        <StyledTitleOne>Login</StyledTitleOne>
        <Form onSubmit={handleSubmit(handleForm)}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu E-mail"
            {...register("email")}
          />
          <StyledHeadline>{errors.email?.message}</StyledHeadline>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <StyledHeadline>{errors.password?.message}</StyledHeadline>

          <button type="submit">Entrar</button>

          <StyledHeadline fontSize={9} color={"#868E96"}>
            Ainda não possui uma conta ?
          </StyledHeadline>

          <Link>Cadastre-se</Link>
        </Form>
      </StyledDiv>
    </Main>
  );
};
