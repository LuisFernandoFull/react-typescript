import { useForm } from "react-hook-form";
import { Form } from "../../components/Form";
import { Main } from "../../components/Main";
import { StyledHeadline, StyledTitleOne } from "../../styles/typography";
import { StyledDiv } from "./style";
import LogoHub from "../../assests/LogoHub.svg";
import { Link, useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { formRegisterSchema } from "../../validation";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const RegisterPage = () => {
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formRegisterSchema),
  });
  const onSubmitFunction = (registerData) => {
    console.log(registerData);
    api
      .post("/users", { ...registerData })
      .then((response) => {
        console.log(response);
        toast.success("Conta criada com sucesso!");
        navigation("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${error.response.data.message}`, {
          position: toast.POSITION.TOP_RIGHT,
          toastId: 1,
        });
      });
  };
  return (
    <Main>
      <StyledDiv>
        <div>
          <img src={LogoHub} alt="Logo Kenzie Hub" />

          <Link to={"/"}>Voltar</Link>
        </div>
        <div>
          <StyledTitleOne>Crie uma conta</StyledTitleOne>
          <StyledHeadline>Rapido e grátis, vamos nessa</StyledHeadline>
        </div>

        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="digite aqui seu nome"
            {...register("name")}
          />
          <StyledHeadline>{errors.name?.message}</StyledHeadline>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <StyledHeadline>{errors.email?.message}</StyledHeadline>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <StyledHeadline>{errors.password?.message}</StyledHeadline>

          <label htmlFor="confirm-password">Confirmar senha</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Digite novamente sua senha"
            {...register("confirmpassword")}
          />
          <StyledHeadline>{errors.confirmpassword?.message}</StyledHeadline>

          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <StyledHeadline>{errors.bio?.message}</StyledHeadline>

          <label htmlFor="contact">Contato</label>
          <input
            type="text"
            id="contact"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <StyledHeadline>{errors.contact?.message}</StyledHeadline>

          <label htmlFor="course_module">Selecionar módulo</label>
          <select id="course_module" {...register("course_module")}>
            <option>Selecione</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value=" Segundo Módulo (Frontend Avançado)">
              Segundo Módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro Módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto Módulo
            </option>
          </select>
          <StyledHeadline>{errors.course_module?.message}</StyledHeadline>

          <button type="submit">Cadastrar</button>
        </Form>
      </StyledDiv>
    </Main>
  );
};
