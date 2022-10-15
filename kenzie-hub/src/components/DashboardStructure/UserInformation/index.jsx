import { useContext } from "react";
import { DashbordContext } from "../../../contexts/DashbordContext/DashbordContext";
import { StyledHeadline, StyledTitleOne } from "../../../styles/typography";

export const UserInformation = () => {
  const { user } = useContext(DashbordContext);

  return (
    <div>
      <>
        <StyledTitleOne fontSize={24} color={`${"var(--grey-0)"}`}>
          Olá, {user.name}
        </StyledTitleOne>
        <StyledHeadline fontSize={12} color={`${"var(--grey-1)"}`}>
          {user.course_module}
        </StyledHeadline>
      </>
    </div>
  );
};
