import { useContext } from "react";
import { TechsContext } from "../../../../contexts/TechsContext/TechsContext";
import { LandingPage } from "../../LandingPage";
import { TechsCards } from "../TechsCard";
import { StyledUl } from "./style";

export const ListTechs = () => {
  const { techs } = useContext(TechsContext);

  return (
    <>
      {techs.length === 0 ? (
        <LandingPage />
      ) : (
        <StyledUl>
          <TechsCards />
        </StyledUl>
      )}
    </>
  );
};
