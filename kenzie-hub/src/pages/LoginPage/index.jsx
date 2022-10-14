import { useContext } from "react";
import { AuthenticationContext } from "../../contexts/UserContext/AuthContext";
import { Form } from "../../components/Form";
import { Main } from "../../components/Main";
import { StyledHeadline, StyledTitleOne } from "../../styles/typography";
import { Container, StyledDiv, StyledDivLinkMsg, StyledLink } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formLoginSchema } from "../../validation";

import LogoHub from "../../assests/LogoHub.svg";
import { Img } from "../../components/Imagem";
import { Label } from "../../components/Label";

import { Button } from "../../components/Button";
import { StyledInput } from "../../components/Input/style";

export const LoginPage = () => {
  const { handleLogin } = useContext(AuthenticationContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formLoginSchema),
  });

  const handleForm = (data) => {
    handleLogin(data);
  };

  return (
    <Main>
      <Container>
        <Img
          src={LogoHub}
          alt={"Imagem logo kenziehub"}
          width={130}
          height={50}
        />
        <StyledDiv>
          <StyledTitleOne color="#fff">Login</StyledTitleOne>
          <Form onSubmit={handleSubmit(handleForm)}>
            <Label htmlFor="email">Email</Label>
            <StyledInput
              type="email"
              id="email"
              placeholder="Digite seu E-mail"
              {...register("email")}
            />
            <StyledHeadline fontSize={9} color={"#E83F5B"}>
              {errors.email?.message}
            </StyledHeadline>

            <Label htmlFor="password">Senha</Label>
            <StyledInput
              type="password"
              id="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <StyledHeadline fontSize={9}>
              {errors.password?.message}
            </StyledHeadline>

            <Button type="submit">Entrar</Button>
            <StyledDivLinkMsg>
              <StyledHeadline fontSize={12} color={"#868E96"}>
                Ainda não possui uma conta ?
              </StyledHeadline>

              <StyledLink to={"/register"}>Cadastre-se</StyledLink>
            </StyledDivLinkMsg>
          </Form>
        </StyledDiv>
      </Container>
    </Main>
  );
};
