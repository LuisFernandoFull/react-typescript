import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext/ModalContext";
import { ModalRegisterTech } from "../../Modal/RegisterTech";
import { AddTech } from "../AddTech";
import { ListTechs } from "../Techs/ListTechs";

import { StyledMain } from "./style";

export const AllStructureDashbord = () => {
  const { currentModal } = useContext(ModalContext);
  return (
    <StyledMain>
      {currentModal && <ModalRegisterTech />}
      <AddTech />
      <ListTechs />
    </StyledMain>
  );
};
