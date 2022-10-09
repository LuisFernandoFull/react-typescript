import { AddTech } from "../AddTech";
import { ListTechs } from "../Techs/ListTechs";
import { UserInformation } from "../UserInformation";
import { StyledMain } from "./style";

export const AllStructureDashbord = ({ userData }) => {
  return (
    <StyledMain>
      {/* <UserInformation userData={userData} /> */}
      <AddTech />
      <ListTechs />
    </StyledMain>
  );
};
