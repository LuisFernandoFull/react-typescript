import { Link } from "react-router-dom";
import { Form } from "../../components/Form";
import { Main } from "../../components/Main";
import { StyledHeadline, StyledTitleOne } from "../../styles/typography";
import { StyledDiv } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formLoginSchema } from "../../validation";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formLoginSchema),
  });
  const onSubmitFunction = (data) => {
    console.log(data);
  };
  return (
    <Main>
      <StyledDiv>
        <StyledTitleOne>Login</StyledTitleOne>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
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
