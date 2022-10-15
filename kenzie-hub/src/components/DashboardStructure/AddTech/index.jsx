import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { ModalContext } from "../../../contexts/ModalContext/ModalContext";
import { StyledTitleHTwo } from "../../../styles/typography";
import { StyledContAddTech } from "./style";
export const AddTech = () => {
  const { setCurrentModal } = useContext(ModalContext);
  return (
    <StyledContAddTech>
      <StyledTitleHTwo fontSize={24} color={`${"var(--grey-0)"}`}>
        Tecnologias
      </StyledTitleHTwo>
      <button
        type="button"
        onClick={() => {
          setCurrentModal(true);
        }}
      >
        <FiPlus />
      </button>
    </StyledContAddTech>
  );
};
