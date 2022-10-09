import { FiPlus } from "react-icons/fi";
import { StyledContAddTech } from "./style";
export const AddTech = ({ setCurrentModal }) => {
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
