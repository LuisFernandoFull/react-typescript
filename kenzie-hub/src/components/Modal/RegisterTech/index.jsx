import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Button";
import { StyledInput } from "../../Input/style";
import { Label } from "../../Label";
import {
  StyledDiv,
  StyledModalDiv,
  StyledRegisterTech,
  StyledSelect,
} from "./style";
import { formTechSchema } from "../../../validation";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { useEffect, useRef } from "react";
export const ModalRegisterTech = ({ setCurrentModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    function handleOutClick(e) {
      const target = e.target;

      if (!modalRef.current.contains(target)) {
        setCurrentModal(null);
      }
    }
    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const token = localStorage.getItem("authToken");
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formTechSchema),
  });

  const onSubmitFunction = (techData) => {
    console.log(techData);
    api
      .post("/users/techs", techData, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        toast.success("Conta criada com sucesso!");
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
    <StyledModalDiv>
      <StyledDiv ref={modalRef}>
        <div>
          <h4>cadastrar Tecnologia</h4>
          <button type="button" onClick={() => setCurrentModal(null)}>
            x
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Label htmlFor={"title"}>Nome</Label>
          <StyledInput
            type="text"
            id="title"
            placeholder="Tecnologia"
            {...register("title")}
          />

          <Label htmlFor={"status"}>Selecionar status</Label>
          <StyledSelect id="status" {...register("status")}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediario</option>
            <option value="avancado">Avançado</option>
          </StyledSelect>

          <Button type="submit">Cadastrar Tecnologia</Button>
        </form>
      </StyledDiv>
    </StyledModalDiv>
  );
};
