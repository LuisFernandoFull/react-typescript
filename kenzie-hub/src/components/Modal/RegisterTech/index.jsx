import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Button";
import { StyledInput } from "../../Input/style";
import { Label } from "../../Label";
import { StyledDiv, StyledModalDiv, StyledSelect } from "./style";
import { formTechSchema } from "../../../validation";

import { useContext, useEffect } from "react";
import { TechsContext } from "../../../contexts/TechsContext/TechsContext";
import { ModalContext } from "../../../contexts/ModalContext/ModalContext";
import { StyledTitleHTwo } from "../../../styles/typography";
export const ModalRegisterTech = () => {
  const { createTech } = useContext(TechsContext);
  const { setCurrentModal, handleOutClick, modalRef } =
    useContext(ModalContext);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutClick);
    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formTechSchema),
  });

  return (
    <StyledModalDiv>
      <StyledDiv ref={modalRef}>
        <div>
          <StyledTitleHTwo>cadastrar Tecnologia</StyledTitleHTwo>
          <button type="button" onClick={() => setCurrentModal(null)}>
            x
          </button>
        </div>

        <form onSubmit={handleSubmit(createTech)}>
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
