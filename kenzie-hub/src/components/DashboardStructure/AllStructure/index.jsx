import { useState } from "react";
import { ModalRegisterTech } from "../../Modal/RegisterTech";
import { AddTech } from "../AddTech";
import { ListTechs } from "../Techs/ListTechs";
import { UserInformation } from "../UserInformation";
import { StyledMain } from "./style";

export const AllStructureDashbord = ({ userData }) => {
  const [currentModal, setCurrentModal] = useState(null);
  return (
    <StyledMain>
      {currentModal && <ModalRegisterTech setCurrentModal={setCurrentModal} />}
      <AddTech setCurrentModal={setCurrentModal} />
      <ListTechs />
    </StyledMain>
  );
};
