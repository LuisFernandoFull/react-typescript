import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { ModalContext } from "../../../contexts/ModalContext/ModalContext";
import { StyledContAddTech } from "./style";
export const AddTech = () => {
  const { setCurrentModal } = useContext(ModalContext);
  return (
    <StyledContAddTech>
      <h2>Tecnologias</h2>
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
