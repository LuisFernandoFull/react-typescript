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
import LogoHub from "../../assests/LogoHub.svg";
import { Img } from "../../components/Imagem";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
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
        toast.error(`${error.response.data.message}`, {
          position: toast.POSITION.TOP_RIGHT,
          toastId: 1,
        });
      });
  };

  return (
    <Main>
      <Img
        src={LogoHub}
        alt={"Imagem logo kenziehub"}
        width={100}
        height={50}
      />
      <StyledDiv>
        <StyledTitleOne>Login</StyledTitleOne>
        <Form onSubmit={handleSubmit(handleForm)}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Digite seu E-mail"
            {...register("email")}
          />
          <StyledHeadline>{errors.email?.message}</StyledHeadline>

          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <StyledHeadline>{errors.password?.message}</StyledHeadline>

          <Button type="submit">Entrar</Button>

          <StyledHeadline fontSize={9} color={"#868E96"}>
            Ainda não possui uma conta ?
          </StyledHeadline>

          <Link to={"/register"}>Cadastre-se</Link>
        </Form>
      </StyledDiv>
    </Main>
  );
};
