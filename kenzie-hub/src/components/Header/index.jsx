import { UserInformation } from "../DashboardStructure/UserInformation";
import { StyledHeader } from "./style";
export const Header = ({ userData }) => {
  return (
    <StyledHeader>
      <UserInformation userData={userData} />
    </StyledHeader>
  );
};
